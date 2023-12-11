<template>
    <form @submit.prevent="submitSearch">
      <input type="text" v-model="searchTerm" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
</template>

<style scoped>

</style>

<script setup>

</script>