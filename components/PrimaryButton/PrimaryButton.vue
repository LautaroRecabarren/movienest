<template>
    <button class="primary-button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'PrimaryButton',
}
</script>

<style scoped>
.primary-button {
  overflow: visible;
}

.primary-button {
  text-transform: none;
}

.primary-button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
  appearance: button;

  border: none;
  box-shadow: none;
  outline: none;
}

.primary-button:active, [type="button"]:active, [type="reset"]:active, [type="submit"]:active {
  border: none;
  box-shadow: none;
  outline: none;
}

.primary-button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

.primary-button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

.primary-button {

    appearance: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;

    width: 22rem;
    height: 3.25rem;
    margin: 1.88rem 0;




    border-radius: 2.5rem;
    background: linear-gradient(102deg, rgba(53, 239, 228, 0.41) 25.48%, rgba(29, 19, 40, 0.88) 101.51%);
}
</style>