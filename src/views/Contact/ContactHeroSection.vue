<script setup>
import BackgroundGlow from '@/components/shared/BackgroundGlow.vue';
import HeroText from '@/components/shared/HeroText.vue';
import IntroText from '@/components/shared/IntroText.vue';

</script>
<template>
  <section class="px-4 sm:px-8 md:px-12 py-24">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <BackgroundGlow />
      <div class=" col-span-1 lg:col-span-2 space-y-5">
        <HeroText title="Get in touch." hightlight-text="touch" />
        <IntroText text="Have a vision for a project or looking for a long-term partnership? I specialize in 
      transforming complex requirements into high-performance digital craft." />
      </div>
    </div>
  </section>
</template>