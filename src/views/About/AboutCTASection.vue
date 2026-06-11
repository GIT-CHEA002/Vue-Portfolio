<script setup>
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
import HeroText from '@/components/shared/HeroText.vue';
import InfoText from '@/components/shared/InfoText.vue';

</script>
<template>
  <section class="px-4 sm:px-8 md:px-12 w-full py-12 ">
    <div class=" p-4 sm:p-8 md:p-12 lg:p-16 ">
      <div class="p-4 sm:p-8 md:p-12 lg:p-28 bg-gray-200/90 dark:bg-neutral-800/90 rounded dark:hover:brightness-110">
        <HeroText title="Ready to build something exceptional?" hightlight-text="exceptional"
          default-text=" text-base md:text-lg text-center lg:text-3xl" />
        <InfoText class="text-center px-4 sm:px-8 md:px-12 lg:px-36"
          text="I am currently accepting select projects for Q3 & Q4 2024. Let's discuss your vision and see how I can help you reach your goals." />
        <div class=" block text-center md:flex items-center justify-center py-5 space-y-4 md:space-x-5 md:space-y-0">
          <SecondaryNavigationButton target="contact" title="Start a project" />
          <span class="text-xs sm:text-sm md:text-md block">Book a consultation</span>
        </div>
      </div>
    </div>
  </section>
</template>