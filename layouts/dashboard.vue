<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const showUser = computed(() => route.path === '/movies')
const showBack = computed(() => route.path === '/movie/_id')

const goBack = () => {
    router.push('/movies')
}
</script>

<template>
    <div class="dashboard">
        <header>
            <div class="head">
            <button class="menu-button">
                <img src="/img/menu.svg" alt="menu svg">
            </button>
            <button v-show="showBack" @click="goBack" class="back-button">
                <img src="/img/back.svg" alt="back button">
            </button>
            <button class="font-changer-a">
                <img src="/img/font.svg" alt="font svg">
            </button>
            </div>
            <h1 v-show="showUser">
                <span style="font-size: 1.125rem">Hi,
                    <span style="font-weight: 500">%User%</span>
                </span>
                <br/>
                We have
                <span style="font-weight: 500">
                    movies available
                </span>
                to you.
            </h1>
            <SearchBar v-show="showUser" class="searchbar"/>
            <button class="font-changer-b">
                <img src="/img/font.svg" alt="font svg">
            </button>
            <img
            class="logo"
            src="/img/logo.svg?url"
            alt="logo">
        </header>
        <main>
            <slot />
        </main>
        <Footer/>
    </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  margin: 0 1rem ;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header {
    width: 100%;
}

main {
    width: 100%;
}

Footer {
    width: 100%;
    display: flex;
    justify-content: center;
}

.searchbar {
    margin: 2rem 0;
}

.logo {
    margin: 0;
    width: 7rem;
    height: 3rem;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 10%);
    top: 0.5%;
}

h1 {
    color: #FFF;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

button {
    background: none;
    border: none;
}

.menu-button {
    padding: 0;

    width: 2.1875rem;
    height: 2.1875rem;
}

.font-changer-a, .font-changer-b {
    width: 2.95875rem;
    height: 2.95875rem;
    flex-shrink: 0;

    background-color: rgba(217, 217, 217, 0.10);
    border-radius: 50%;
}

.font-changer-b {
    display: none;
}

.back-button {
    width: 2.95875rem;
    height: 2.95875rem;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 16%;

    background: rgba(217, 217, 217, 0.10);
    border-radius: 50%;

}

@media (min-width: 1280px) {
    .dashboard {
        padding: 1.8rem 0;
        height: 90vh;
    }

    header {
        height: 4rem;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h1 {
        padding: 0;
        margin: 0;

        margin: 0 3rem;


    }

    .font-changer-b {
        display: block;
    }

    .font-changer-a {
        display: none;
    }

    .logo {
        margin: 0;
        position: fixed;
        left: 90%;
        transform: translate(-50%, 10%);
        top: 3%;
        width: 11.8rem;
        height: 3.4rem;
    }

    .menu-button {
        width: 3.4375rem;
        height: 3.4375rem;
    }

    .menu-button  img {
        width: 3.4375rem;
        height: 3.4375rem;
    }

    .searchbar {
        margin-left: 14%;
        margin-right: 2%;
    }

    .back-button {
        left: 6.7%;
    }

}
</style>