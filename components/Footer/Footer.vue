<template>
    <footer>&copy; Lautaro Recabarren - {{ currentYear }}</footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
</script>

<style scoped>
footer{
  color: #727272;
  font-family: Poppins;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: fixed;
  bottom: 0;
  margin: 0.4rem;
}
</style>