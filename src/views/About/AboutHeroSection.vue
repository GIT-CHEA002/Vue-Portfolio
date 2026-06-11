<script setup>
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import SecondaryTitle from '@/components/shared/SecondaryTitle.vue';
import aboutProfile from "../../assets/image/aboutProfile.png"
import BackgroundGlow from '@/components/shared/BackgroundGlow.vue';
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
import PrimaryNavigationButton from '@/components/buttons/PrimaryNavigationButton.vue';
</script>
<template>
  <section class="px-4 sm:px-8 md:px-12 py-12  grid grid-cols-1 lg:grid-cols-2  gap-12">
    <BackgroundGlow />
    <div class="flex flex-col space-y-6">
      <SecondaryTitle title="the architect of digital expriences" />
      <HeroText title="Designing Logic, Crafting Beauty." hightlight-text="Logic" />
      <IntroText
        text="I specialize in building high-performance web applications that merge technical precision with intuitive user interfaces. With a decade of experience across the stack, I transform complex requirements into elegant, scalable digital products." />
      <div class="space-x-8">
        <SecondaryNavigationButton title="Download CV" target="/" />
        <PrimaryNavigationButton title="My process" target="Portfolio" />
      </div>
    </div>
    <div class="flex items-center justify-center lg:px-5">
      <img :src="aboutProfile" :alt="`image profile about`"
        class=" w-full h-full lg:w-96 rounded lg:h-96 dark:grayscale border object-cover dark:hover:grayscale-0 transition-colors duration-300 bg-cyan-600 dark:bg-cyan-400 border-cyan-600 dark:border-cyan-400 overflow-hidden ">
    </div>
  </section>
</template>