<script setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: "featured projects"
  },
  accentLine: {
    type: String,
    default: " md:h-1 w-16 h-0.5 -bottom-2 left-0"
  }
})
</script>
<template>
  <!-- leading title <sm : text lg , md = 2xl lg = 3xl -bottom-2 left-1/2 -translate-x-1/2-->
  <div class="relative z-20 w-fit">
    <h1 class="capitalize text-lg md:text-2xl lg:text-3xl font-semibold">{{ title }} </h1>
    <span :class="` bg-cyan-400 absolute z-30 ${accentLine}`"></span>
  </div>
</template>