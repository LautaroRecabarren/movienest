<template>
    <input class="email" type="text" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    modelValue: String,
    placeholder: String
  })

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<style>
.email {
    width: 19.5rem;
    height: 3.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;

    border: 2px solid #C1C1C1;
    border-radius: 2.5rem;
    background: none;

    color: #727272;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>