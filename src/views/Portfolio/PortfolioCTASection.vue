<script setup>
import PrimaryNavigationButton from '@/components/buttons/PrimaryNavigationButton.vue';
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
import InfoText from '@/components/shared/InfoText.vue';
import IntroText from '@/components/shared/IntroText.vue';
</script>
<template>
  <section class=" py-24 bg-black">
    <div
      class=" px-4 sm:px-8 md:px-12  py-24 grid grid-cols-1 md:grid-cols-2 bg-gray-200/90 dark:bg-neutral-800/90 dark:hover:brightness-110">
      <div class="text-center md:text-start space-y-2">
        <IntroText text="Start your technical revolution." default-text="text-sm md:text-md lg:text-3xl font-bold" />
        <InfoText text="I am currently accepting select projects for Q3 2024. Let's discuss your vision." />
      </div>
      <div class="flex items-center justify-center space-x-4">
        <SecondaryNavigationButton title="inquire now" target="contact" />
        <PrimaryNavigationButton title="View Resume" target="about" />
      </div>
    </div>
  </section>
</template>