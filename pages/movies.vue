<template>
    <div class="movies">
        <h2>Categories</h2>
        <MovieCategories class="categories"/>
        <h3>
            <span style="font-weight: 500;">Most popular</span>
            and
            <span style="color: #92FF8F;">avaliables now!</span>
        </h3>
        <div class="showroom-vertical">
            <div class="decoration"></div>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
        </div>
            <h4> Anothers movies
                <span style="color: #0CC1CE; font-weight: 300">for you</span>
            </h4>
        <div class="showroom-horizontal">
            <div class="decoration"></div>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
            <MoviePlaceHolder/>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
        layout: 'dashboard'
})
</script>

<style scoped>
.movies {
    width: 100%;
    height: 58vh;

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.movies::-webkit-scrollbar {
    display: none;
}

h2 {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin: 0;
    margin-top: 0.5rem;
    margin-bottom: 2.4rem;
}

h3 {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin: 2.4rem 0;
}

h4 {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin: 2.4rem 0;
}

.decoration {
    width: 100%;
    height: 15rem;

    border-radius: 0.3125rem;
    background: rgba(217, 217, 217, 0.10);

    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);

    display: none;
}

.showroom-vertical {
    width: 43vh;
    height: 51.1vh;
    margin-top: 1.3rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    position: relative;
}

.showroom-vertical::-webkit-scrollbar {
    display: none;
}

.showroom-horizontal {
    width: 43vh;
    height: 15rem;
    position: relative;

    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.showroom-horizontal::-webkit-scrollbar {
    display: none;
}


@media (min-width: 1280px) {
    .movies {
        height: 82.5vh;
    }

    .decoration {
        display: block;
    }

    .showroom-horizontal, .showroom-vertical {
        width: 200vh;
        height: 42.5vh;
    }
}
</style>