<script setup>
import { defineProps } from 'vue';
defineProps({
  text: {
    type: String,
    default: "A premium portfolio dedicated to high-performance web architecture and visual design for the next generation of technical products"
  },
  defaultText: {
    type: String,
    default: "text-lg lg:text-xl"
  }
})
</script>
<template>
  <p :class="`pe-3 ${defaultText}  `">
    {{ text }}
  </p>
</template>