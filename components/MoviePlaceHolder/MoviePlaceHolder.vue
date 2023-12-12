<template>
    <NuxtLink :to="`/movie/_id`" v-if="movie">
        <div class="movie-card">
            <img :src="movie.Poster" alt="movie banner" class="movie-img">
            <h3 class="no-underline">{{ movie.Title }}</h3>
            <RatingStars :score="movie.Metascore" class="stars"/>
        </div>
    </NuxtLink>
</template>

<script>
import { ref, onMounted } from 'vue'

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
.movie-card {
    margin: 0.9rem 0;
    padding: 0.3rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.nuxt-link-active, .nuxt-link-exact-active {
    text-decoration: none;
    color: inherit;
}
.movie-img {
    width: 6.5rem;
    height: 9.5rem;
    margin: 0 0.75rem;

    object-fit: cover;
    object-position: center;

    border-radius: 0.3125rem;
    box-shadow: 0px 0px 7.8px 0px rgba(0, 0, 0, 0.45);
}

.movie-card > h3 {
    margin: 0;
    width: 5.2rem;
    flex-shrink: 0;

    color: #FFF;
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    text-decoration: none;

    margin: 0.11rem 0;
}

.stars {
    width: 4.33269rem;
    height: 1.2rem;
    flex-shrink: 0;
}

@media (min-width: 1280px) {
    .movie-card > h3 {
        width: 10rem;
        font-size: 1.125rem;
        margin: 0.4rem 0;
    }

    .movie-img {
        width: 12.3rem;
        height: 18.4rem;
    }

    .stars {
        width: 8.2rem;
        height: 1.3rem;

        margin-top: 0.54rem;
    }
}
</style>