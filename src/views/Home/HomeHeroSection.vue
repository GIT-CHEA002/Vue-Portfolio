<script setup>
import PrimaryNavigationButton from '@/components/buttons/PrimaryNavigationButton.vue';
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
import BackgroundGlow from '@/components/shared/BackgroundGlow.vue';
import HeroText from '@/components/shared/HeroText.vue';
import SecondaryTitle from '@/components/shared/SecondaryTitle.vue';
</script>
<template>
  <section class=" px-4 sm:px-8 md:px-12 h-[90vh] w-full md:w-[70%]  flex flex-col justify-center space-y-6 
">
    <!-- glow ther background  -->
    <BackgroundGlow />
    <SecondaryTitle />
    <HeroText />
    <div>
      <p class="pe-3 text-lg md:text-xl md:line-clamp-3 lg:line-clamp-2 ">
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