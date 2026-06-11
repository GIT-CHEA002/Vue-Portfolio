<script setup>
import { defineProps } from 'vue';
defineProps({
  text: {
    type: String,
    default: "A premium portfolio dedicated to high-performance web architecture and visual design for the next generation of technical products"
  }
})
</script>
<template>
  <p class="pe-3 text-lg lg:text-xl ">
    {{ text }}
  </p>
</template>