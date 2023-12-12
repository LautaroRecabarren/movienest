<template>
    <div class="details">
        <MovieDetails/>
    </div>
</template>

<script setup lang="ts">
import movieService from '../../services/movieservices'

definePageMeta({
        layout: 'dashboard',
        middleware: 'auth',
})

</script>

<style scoped>
.details {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>