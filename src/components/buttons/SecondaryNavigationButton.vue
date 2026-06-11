<script setup>
import { defineProps } from 'vue';
defineProps({
  target: {
    type: String
  },
  title: {
    type: String
  }
})
</script>
<template>
  <RouterLink :to="`/${target.trim()}`" class="uppercase text-sm md:text-md lg:text-base border
    px-3 py-2 rounded-sm  font-bold text-black/90 hover:bg-cyan-700
   hover:border-cyan-700 hover:text-white transition-colors duration-300 bg-cyan-600 dark:text-white 
     dark:bg-cyan-400 border-cyan-600 dark:border-cyan-400
     dark:hover:bg-cyan-300 dark:hover:border-cyan-300 dark:hover:text-black
     ">
    {{ title }}
  </RouterLink>
</template>