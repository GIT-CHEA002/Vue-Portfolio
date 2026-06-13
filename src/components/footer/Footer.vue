<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/16/solid';
import InfoText from '../shared/InfoText.vue';
import FooterLink from './FooterLink.vue';
import FooterBrand from './FooterBrand.vue';
</script>
<template>
  <footer class="max-w-7xl px-4 sm:px-8 md:px-12  py-4 md:py-6
     bg-white dark:bg-black dark:shadow-cyan-400 shadow-md
       block md:flex justify-between items-center space-y-3">
    <FooterBrand />
    <FooterLink />
  </footer>
</template>