<script setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String
  }
})
</script>
<template>
  <span class="w-fit tracking-widest pe-2 py-2 uppercase text-sm md:text-md lg:text-base text-cyan-600 dark:text-cyan-400">
    {{ title }}
  </span>
</template>