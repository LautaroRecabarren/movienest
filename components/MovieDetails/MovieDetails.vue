<template>
    <div class="movie-detail" v-if="movie">
        <img class="sm" :src="movie.Poster" alt="movie img">
        <img class="xl" src="/img/poster.jpg" alt="movie img">
        <div class="title-rate">
            <h3>{{ movie.Title }}</h3>
            <RatingStars :score="movie.Metascore" class="stars"/>
            <h4>Avaliable now!</h4>
        </div>
        <span>Synthesis</span>
        <p>{{ movie.Plot }}</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const movie = ref(null)

        const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=59898298'

        onMounted(async () => {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            movie.value = await response.json()
            console.log(movie.value)
        })

        return {
            movie
        }
    }
}


</script>

<style scoped>
.movie-detail {
    width: 100%;
    height: 79vh;
    margin-top: 4%;

    display: flex;
    flex-direction: column;
    align-content: center;

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.xl {
    display: none;
}

.movie-detail::-webkit-scrollbar {
    display: none;
}

.movie-detail .degreeder {
    position: relative;
    display: inline-block;
}

.movie-detail .degreeder img {
    display: block;
    width: 100%;
    height: auto;
}

.title-rate h4 {
    color: #92FF8F;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin: 0;
    margin: 0.5rem 0;
}

.degreeder img {
    width: 100%;
    height: 29rem;
    flex-shrink: 0;

}

.movie-detail h3 {
    margin: 0;
    margin: 0.5rem 0;
}

p {
    width: 100%;

    color: #FFF;
    font-family: Poppins;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.movie-detail span {
    font-size:medium;
}

@media (min-width: 480px) {

    .sm {
        display: none;
    }
    .xl {
        display: block;
    }
}

@media (min-width: 1024px) {

    .title-rate {
        margin: 2.5rem 0;
    }

    h3 {
        font-size: xx-large;
    }

    .title-rate h4 {
        font-size: x-large;
    }

    p {
        font-size:large ;
    }

    .movie-detail span {
        font-size: x-large;
    }
}

</style>