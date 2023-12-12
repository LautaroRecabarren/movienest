<template>
    <div class="categories-buttons" ref="scrollContainer">
        <button
            v-for="(content, i) in buttonContent"
            :key="i"
            :class="{ active: activeButton === i }"
            @click="scrollToButton(i)"
        >
            {{ content }}
        </button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

let activeButton = ref(0) // The first button is selected
let scrollContainer = ref(null)

let buttonContent = [
    'All',
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller'
]

const scrollToButton = (index) => {
    activeButton.value = index
    nextTick(() => {
        const button = scrollContainer.value?.children[index]
        scrollContainer.value.scrollLeft = button.offsetLeft - button.clientWidth / 2
    })
}
</script>

<style scoped>
.categories-buttons {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.categories-buttons::-webkit-scrollbar {
    display: none;
}

button {
    border: none;
    flex-shrink: 0;
    width: 7.14288rem;
    height: 2.5rem;
    margin: 0 0.3rem;
    border-radius: 0.3125rem;
    background: rgba(217, 217, 217, 0.144);

    color: #ffffff52;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.active {
    border: 1.5px solid #0CC1CE;
    box-shadow: 0px 0px 8.1px 3px rgba(12, 193, 206, 0.30);
    background: rgba(217, 217, 217, 0.007);

    color: #FFF;
    font-weight: 300;
}
</style>