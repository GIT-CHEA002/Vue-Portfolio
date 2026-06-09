<script setup>
import PrimaryNavigationButton from '@/components/buttons/PrimaryNavigationButton.vue';
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
</script>
<template>
  <section class="relative h-[90vh] w-full md:w-[70%]  flex flex-col justify-center space-y-6 
">
    <div class="absolute top-0 left-80 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none mix-blend-multiply filter blur-[120px] opacity-80 transition-colors duration-500
    bg-cyan-200/50 dark:bg-cyan-200">
    </div>
    <div
      class="border w-fit p-1 font-bold border-cyan-600 dark:border-cyan-400 uppercase text-base text-cyan-600 dark:text-cyan-400">
      Crafting The future
    </div>
    <div>
      <h1 class="capitalize leading-tight text-4xl md:text-5xl lg:text-6xl tracking-widest line-clamp-3 font-extrabold">
        Building digital
        <span class="dark:text-cyan-400 text-cyan-600 drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]">excellence</span>
        through practise engineering.
      </h1>
    </div>
    <div>
      <p class="pe-3 text-lg md:text-xl md:line-clamp-3 lg:line-clamp-2">
        A premium portfolio dedicated to high-performance web architecture and visual
        design for the next generation of
        technical products
      </p>
    </div>
    <div class="flex space-x-12 justify-center md:justify-start">
      <SecondaryNavigationButton target="contact" title="View Box" />
      <PrimaryNavigationButton target="portfolio" title="Experise" />
    </div>
  </section>
</template>