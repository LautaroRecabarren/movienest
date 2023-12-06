<template>
    <div>
        <h1>Movie: {{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
    </div>
</template>

<script>
export default {
    async asyncData({ params }) {
        // Replace this with your actual data fetching logic.
        const movie = await fetchMovieById(params.id);
        return { movie };
    },
};
</script>