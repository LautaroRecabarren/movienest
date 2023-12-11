<template>
    <form @submit.prevent="submitSearch">
      <button type="submit">
        <img
        src="/img/search.svg"
        class="search-icon"
        >
      </button>
      <input class="search-bar"
        type="text"
        v-model="searchTerm"
        placeholder="Search movies"
      />
      <img
        src="/img/divider.svg"
        class="divider"
      >
      <button>
        <img
          src="/img/mic.svg"
          class="mic"
          >
      </button>
    </form>
</template>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button, button:hover, button:active, button:focus {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

img {
  position: absolute;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 0.9rem;
  transform: translateY(-50%);
}

.divider {
  position: absolute;
  top: 50%;
  right: 4.5rem;
  transform: translateY(-50%);
}

.mic {
  position: absolute;
  top: 50%;
  right: 1.8rem;
  transform: translateY(-50%);
}

form {position: relative;}

.search-bar {
  width: 83%;
  height: 3.5rem;
  padding-left: 3.4rem;

  border-radius: 2.5rem;
  border: 1px solid #C1C1C1;
  background: transparent;

  color: #727272;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (min-width: 1280px) {
  .search-bar {
    margin: 0;

    width: 33.6875rem;
    height: 3.5rem;

    border-radius: 2.5rem;
    border: 2px solid #C1C1C1;
  }

}

</style>

<script setup>

</script>