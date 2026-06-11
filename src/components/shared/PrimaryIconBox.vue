<script setup>
import { CpuChipIcon } from '@heroicons/vue/16/solid';
import { defineProps } from 'vue';
defineProps({
  icon: {
    type: [Object, Function],
    required: true,
    default: CpuChipIcon
  },
})
</script>
<template>
  <span
    class=" h-fit inline-flex items-center justify-center bg-cyan-600 backdrop-blur-md text-white dark:bg-cyan-400/90  brightness-110 p-2 rounded shadow-lg shadow-cyan-400/10 ">
    <component :is="icon" class="w-6 h-6  " />
  </span>
</template>