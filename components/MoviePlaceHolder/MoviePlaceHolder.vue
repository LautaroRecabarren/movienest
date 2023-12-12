<template>
    <div class="movie-card" v-if="movie">
        <img :src="movie.Poster" alt="movie banner" class="movie-img">
        <h3>{{ movie.Title }}</h3>
        <RatingStars :score="movie.Metascore" class="stars"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Movie {
    Poster: string;
    Title: string;
    Metascore: number;
    // Add other properties as needed
}

const movie = ref<Movie | null>(null)

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=59898298'

onMounted(async () => {
    const response = await fetch(apiUrl)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    movie.value = await response.json()
    console.log(movie.value)
})
</script>

<style scoped>
.movie-card {
    margin: 0.9rem 0;
    padding: 0.3rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 5.27556rem;
    height: 0.97494rem;
    flex-shrink: 0;

    color: #FFF;
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    margin: 0.11rem 0;
}

.stars {
    width: 4.33269rem;
    height: 0.66rem;
    flex-shrink: 0;
}

@media (min-width: 1280px) {
    .movie-card > h3 {
        font-size: 1.125rem;
        margin: 0.4rem 0;
    }

    .movie-img {
        width: 12.3rem;
        height: 18.4rem;
    }

    .stars {
        width: 8.22994rem;
        height: 1.25363rem;

        margin-top: 0.54rem;
    }
}
</style>