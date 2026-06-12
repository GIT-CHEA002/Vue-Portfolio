<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/16/solid';
import InfoText from '../shared/InfoText.vue';
</script>
<template>
  <footer class="max-w-7xl px-4 sm:px-8 md:px-12  py-4 md:py-6
     bg-white dark:bg-black dark:shadow-cyan-400 shadow-md
       block md:flex justify-between items-center space-y-3">
    <div class="block text-center md:text-start">
      <h1 class=" mt-2  leading-none font-bold text-sm md:text-base text-black dark:text-white">
        SOKCHEA DEV.
      </h1>
      <InfoText text="© 2024 Elite Craft Portfolio. Built with precision." default-text="text-xs brightness-50" />
    </div>
    <div class="space-x-4 text-center md:text-start">
      <a href="#" class="text-xs md:text-sm text-black/90 dark:text-white/90 ">
        policy
      </a>
      <a href="#" class="text-xs md:text-sm text-black/90 dark:text-white/90 ">
        LinkedIn
      </a>
      <a href="https://web.facebook.com/chhun.sokchea.10" class="text-xs md:text-sm text-black/90 dark:text-white/90 ">
        Facebook
      </a>
      <a href="https://github.com/GIT-CHEA002" target="blank"
        class="text-xs md:text-sm text-black/90 dark:text-white/90 ">
        GitHub
      </a>
    </div>
  </footer>
</template>