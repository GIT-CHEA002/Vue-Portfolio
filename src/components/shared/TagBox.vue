<script setup>
import { defineProps } from 'vue';
defineProps({
  tag: {
    type: String
  }
})
</script>
<template>
  <span
    class="  text-xs md:text-sm lg:text-md  cursor-pointer text-black dark:text-white bg-white/80 dark:bg-neutral-800 uppercase px-2 py-1 border border-gray-400 dark:border-gray-200/70  ">
    {{ tag }}
  </span>
</template>