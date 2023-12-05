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

<script>
export default {
  data() {
    return {
      currentYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
div {
  background: linear-gradient(0deg, rgba(26, 28, 41, 0.90) 0%, rgba(26, 28, 41, 0.90) 100%), linear-gradient(180deg, #1A1C29 0%, rgba(26, 28, 41, 0.00) 100%);
}
header, footer, div {
  color: white;
  font-family: Poppins;
}
</style>