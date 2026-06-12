<script setup>
import InfoText from '@/components/shared/InfoText.vue';
import IntroText from '@/components/shared/IntroText.vue';
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import { MapPinIcon } from '@heroicons/vue/16/solid';
const workExperiences = [
  {
    role: "Senior Engineering Lead",
    company: "NEXUS GLOBAL SYSTEMS",
    duration: "2021 – PRESENT",
    description: "Spearheading the core platform redesign using Vue 3 and Node.js. Managed a cross-functional team of 15 developers to deliver a mission-critical financial analytics dashboard that improved user retention by 35%."
  },
  {
    role: "Full Stack Developer",
    company: "HORIZON AI SOLUTIONS",
    duration: "2018 – 2021",
    description: "Implemented real-time data processing engines for AI training sets. Focused on optimizing database performance and building responsive web interfaces for data visualization tools."
  },
  {
    role: "Founder & Lead Dev",
    company: "PIXEL CRAFT STUDIO",
    duration: "2014 – 2018",
    description: "Founded a boutique digital agency catering to luxury brands. Successfully delivered 40+ projects ranging from e-commerce platforms to interactive brand experiences."
  }
];
</script>
<template>
  <section class="px-4 sm:px-8 md:px-12 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
      <div class="col-span-1 space-y-8">
        <PrimaryTitle title="Career Timeline" accent-line="w-0" />
        <IntroText
          text="From founding a tech startup to leading engineering teams at global enterprises, my journey is defined by a relentless pursuit of excellence." />
      </div>
      <div class="block col-span-1 md:col-span-2 space-y-5 ">
        <div v-for="(workExperience, index) in workExperiences" :key="index"
          class=" flex items-start md:space-x-5 rounded overflow-hidden">
          <div>
            <MapPinIcon class="w-6 h-6 text-cyan-400 hidden md:block" />
          </div>
          <div
            class=" w-full p-6 block rounded  bg-gray-200/90 dark:bg-neutral-800/90 hover:scale-[1.01] hover:brightness-105 dark:hover:brightness-110">
            <div class="  w-full flex items-center justify-between  ">
              <div class="block">
                <h1 class=" text-sm md:text-md lg:text-base font-bold capitalizering dark:text-white text-black">
                  {{ workExperience.role }}
                </h1>
                <span class="text-cyan-600 dark:text-cyan-400 text-xs md:text-sm ">{{ workExperience.company }}</span>
              </div>
              <span
                class="text-xs md:text-sm lg:text-md cursor-pointer text-black dark:text-white bg-white/80 dark:bg-neutral-800 uppercase px-2 py-1 border border-gray-400 dark:border-gray-200/70  ">
                {{ workExperience.duration }}
              </span>
            </div>
            <InfoText :text="workExperience.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>