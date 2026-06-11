<script setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: "Crafting The future"
  }
})
</script>
<template>
  <div
    class="border w-fit p-1 font-bold border-cyan-600 dark:border-cyan-400 uppercase text-base text-cyan-600 dark:text-cyan-400">
    {{ title }}
  </div>
</template>