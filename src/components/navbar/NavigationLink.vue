<script setup>
import { IdentificationIcon, ShoppingBagIcon } from '@heroicons/vue/16/solid';
import { defineProps } from 'vue';
defineProps({
  isActiveLink: {
    type: Function
  }
})
</script>
<template>
  <div class="flex flex-1 items-center">
    <!-- logo -->
    <RouterLink to="/">
      <div class="flex items-center justify-center space-x-2">
        <IdentificationIcon class="w-8 h-8 p-0 m-0 flex-shrink-0 text-cyan-600 dark:text-white" />
        <h1 class="leading-none flex items-center font-bold text-sm md:text-base text-black dark:text-white">
          SOKCHEA DEV.
        </h1>
      </div>
    </RouterLink>
    <!-- navigation link -->
    <div class=" flex-1 hidden  md:flex justify-center  items-center space-x-6">
      <RouterLink to="/" :class="[
        'text-sm', 'font-bold',
        'underline-offset-2',
        'tracking-widest',
        'transition-all',
        'duration-300',
        isActiveLink('/') ? 'text-cyan-600 dark:text-cyan-400 underline' : 'hover:text-cyan-400 text-black dark:text-white hover:underline'
      ]">
        HOME
      </RouterLink>
      <RouterLink to="/about" :class="[
        'text-sm', 'font-bold',
        'underline-offset-2',
        'tracking-widest',
        'transition-all',
        'duration-300',
        isActiveLink('/about') ? 'text-cyan-600 dark:text-cyan-400 underline' : ' hover:text-cyan-600 dark:hover:text-cyan-400 text-black dark:text-white hover:underline'
      ]">
        ABOUT
      </RouterLink>
      <RouterLink to="/portfolio" :class="[
        'text-sm', 'font-bold',
        'underline-offset-2',
        'tracking-widest',
        'transition-all',
        'duration-300',
        isActiveLink('/portfolio') ? 'text-cyan-600 dark:text-cyan-400 underline' : ' hover:text-cyan-600 dark:hover:text-cyan-400 text-black dark:text-white hover:underline'
      ]">
        PORTFOLIO
      </RouterLink>
      <RouterLink to="/contact" :class="[
        'text-sm', 'font-bold',
        'underline-offset-2',
        'tracking-widest',
        'transition-all',
        'duration-300',
        isActiveLink('/contact') ? 'text-cyan-600 dark:text-cyan-400 underline' : ' hover:text-cyan-600 dark:hover:text-cyan-400 text-black dark:text-white hover:underline'
      ]">
        CONTACT
      </RouterLink>
    </div>
  </div>
</template>