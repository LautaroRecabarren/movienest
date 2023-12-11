<template>
    <div class="Movies">
        <h2>Categories</h2>
        <MovieCategories class="categories"/>
        <h3>
            <span style="font-weight: 500;">Most popular</span>
            and
            <span style="color: #92FF8F;">avaliables now!</span>
        </h3>
        <MovieCard/>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
        layout: 'dashboard'
})
</script>

<style scoped>
h2 {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

h3 {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>