<template>
  <div>
    <header>
      <img src="/img/logo.svg" alt="MovieNest Logo" />
    </header>
    <main>
      <slot/>
    </main>
    <footer>&copy; Lautaro Recabarren - {{ currentYear }}</footer>
  </div>
</template>

<script setup>
useHead({
    titleTemplate : " %s - LogIn ",
});

const currentYear = new Date().getUTCFullYear();

</script>

<style scoped>

</style>