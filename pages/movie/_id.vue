<template>
    <div class="movie-detail">
        <span class="degreeder">
            <img src="/img/mvsm.jpeg" alt="movie img">
        </span>
        <div class="title-rate">
            <h3>MovieTitle</h3>
            <img src="/img/xamplerate.svg" alt="rating">
            <h4>Avaliable now!</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas sunt officiis optio eligendi quia. Natus illo earum, asperiores quis molestiae tempore temporibus magnam quo impedit porro cum, laborum et.
        Praesentium, vel, iste aspernatur quo a rem voluptatibus molestiae consequatur adipisci mollitia error ratione laboriosam dolor voluptatum! Beatae, quidem? Fugiat asperiores pariatur numquam, doloribus tempore eveniet culpa repellat ut beatae.
        Aliquam libero facilis iure iusto ratione similique non earum cumque veritatis neque dolor ipsum, omnis architecto repellendus suscipit rem animi voluptates nihil accusantium deleniti quae? Nobis delectus aut odio id!
        Eum vero quo neque nemo quas molestias, ut aspernatur harum a nisi voluptates non saepe est nobis, fugit culpa fugiat autem! Asperiores quis adipisci iusto eveniet. Sed soluta qui quos.
        Eveniet consequatur a possimus cumque? Minus tempora tenetur excepturi quo ipsum deleniti, laudantium, aspernatur sunt voluptatem, repudiandae omnis exercitationem consequuntur dolorum aperiam quam quos ducimus nobis? Eius nisi veritatis recusandae.</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
        layout: 'dashboard',
        middleware: 'auth',
})
</script>

<style scoped>
.movie-detail {
    width: 100%;
    height: 79vh;
    margin-top: 4%;

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.movie-detail::-webkit-scrollbar {
    display: none;
}

.movie-detail .degreeder {
    position: relative;
    display: inline-block;
}

.movie-detail .degreeder::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, #20222F 3.12%, rgba(26, 28, 41, 0.00) 48.96%, #1A1C29 96.35%);
    z-index: 2;
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

</style>