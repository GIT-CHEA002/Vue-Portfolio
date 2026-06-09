<script setup>
import { BriefcaseIcon } from '@heroicons/vue/16/solid';
import { defineProps } from 'vue';
defineProps({
  target: {
    type: String
  },
  title: {
    type: String
  },
  toggleSidebarOpen: {
    type: Function
  },
  isActiveLink: {
    type: Function
  }
})
</script>
<template>
  <RouterLink :to="`/${target}`" @click="toggleSidebarOpen" :class="[
    'flex',
    'items-center',
    'w-full px-5',
    'py-2 rounded-lg',
    'uppercase ',
    'tracking-widest',
    'text-sm',
    'font-semibold',
    'transition-all',
    'duration-300',
    'uppercase',
    isActiveLink(`/${target.trim()}`)
      ? 'shadow-[0_0_10px_rgba(6,182,212,0.25)]  border-l-4 border-cyan-400 text-cyan-600 dark:text-cyan-400  bg-cyan-100 dark:bg-cyan-950/60'
      : ' text-black dark:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] hover:border-l-4 border-cyan-400 hover:text-cyan-600 hover:bg-cyan-100 dark:hover:bg-cyan-900/60',
  ]">
    <BriefcaseIcon class="w-6 h-6 me-3" />
    {{ title }}
  </RouterLink>
</template>