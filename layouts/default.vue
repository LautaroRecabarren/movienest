<template>
  <div class="default">
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
useHead({
    titleTemplate : " %s - LogIn ",
});
</script>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 7rem;
}

main {
  width: 100%;
}
</style>