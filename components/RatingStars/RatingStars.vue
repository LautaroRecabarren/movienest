<template>
    <div class="stars">
      <svg v-for="index in 5" :key="index" width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1153 16.7961L6.76485 20.1349L7.97794 13.0632L2.83337 8.05548L9.93287 7.02657L13.1081 0.592773L16.2833 7.02657L23.3828 8.05548L18.2383 13.0632L19.4513 20.1349L13.1153 16.7961Z" :fill="getStarColor(index)" stroke="#0CC1CE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    score: {
      type: Number,
      required: true
    }
  });

  const getStarColor = (index) => {
    const fullStars = Math.floor(props.score / 20);
    const halfStar = props.score % 20 >= 10 ? 1 : 0;
    if (index <= fullStars) {
      return '#0CC1CE';
    } else if (index === fullStars + 1 && halfStar) {
      return 'url(#halfGradient)';
    }
    return 'none';
  };
  </script>

  <style scoped>
  .stars {
    display: flex;
  }
  </style>
