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
  <RouterLink :to="`/${target.trim()}`" class=" w-fit uppercase border px-3 py-2 rounded-sm font-bold text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors duration-300  dark:hover:text-white dark:hover:bg-cyan-400 dark:text-cyan-400
     text-sm md:text-md lg:text-base dark:bg-black border-cyan-600 dark:border-cyan-400">
    {{ title }}
  </RouterLink>
</template>