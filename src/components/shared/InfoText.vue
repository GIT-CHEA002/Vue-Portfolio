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
  <p class=" py-1 text-xs md:text-sm lg:text-md dark:brightness-90 ">
    {{ text }}
  </p>
</template>