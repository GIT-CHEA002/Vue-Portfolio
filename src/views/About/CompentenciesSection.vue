<script setup>
import PrimaryNavigationButton from '@/components/buttons/PrimaryNavigationButton.vue';
import SecondaryNavigationButton from '@/components/buttons/SecondaryNavigationButton.vue';
import PrimaryIconBox from '@/components/shared/PrimaryIconBox.vue';
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import TagBox from '@/components/shared/TagBox.vue';
import { CircleStackIcon, CodeBracketIcon, CpuChipIcon } from '@heroicons/vue/16/solid';
// const getRandomSpan = () => {
//   const layout = [
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-2",
//     "col-span-2 row-span-1",
//     "col-span-2 row-span-2"
//   ]
//   return layout[Math.floor(Math.random() * layout.length)]
// }

const skills =
  [
    {
      id: 1,
      name: "Frontend Mastery",
      icon: CodeBracketIcon,
      tag: [
        "vue.js",
        "react",
        "tailwind css",
        "typescript"
      ]
    }, {
      id: 2,
      name: "Backend & Cloud",
      icon: CircleStackIcon,
      tag: [
        "node.js",
        "postgressql",
        "aws",
        "docker"
      ]
    }
  ]
</script>
<template>
  <div class="px-4 sm:px-8 md:px-12 w-full py-12 gap-12 dark:bg-black">
    <div class="flex justify-center">
      <PrimaryTitle title="Core Compentencies" accent-line="-bottom-2 left-1/2 -translate-x-1/2 md:h-1 w-24 h-0.5" />
    </div>
    <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto sm:auto-rows-[200px] gap-4">
      <div v-for="skill in skills" :key="skill.id"
        :class="`p-6 rounded col-span-1 bg-gray-200/90 dark:bg-neutral-800/90 hover:scale-[1.01] hover:brightness-105 dark:hover:brightness-110  `">
        <PrimaryIconBox :icon="skill.icon" />
        <h1 class="py-1 text-sm md:text-base lg:text-lg font-bold capitalize">{{ skill.name }}</h1>
        <!-- tag sections -->
        <div class="flex flex-wrap gap-3">
          <TagBox v-for="tag in skill.tag" :key="tag" :tag="tag" />
          
        </div>
      </div>
      <div
        class=" flex flex-col justify-between p-6 bg-cyan-600/80 dark:bg-cyan-400  rounded md:row-span-1 md:col-span-2  lg:row-span-2 lg:col-span-1  hover:brightness-105 dark:hover:brightness-110">
        <div class="block">
          <CpuChipIcon class="w-6 h-6 dark:text-black text-black/90" />
          <h1 class="py-3 text-sm md:text-base lg:text-lg font-bold capitalize dark:text-black text-black/90">System
            Architecture</h1>
          <p class="text-xs md:text-sm lg:text-md dark:text-black text-black/70 brightness-70">Designing robust systems
            that handle millions of requests while
            maintaining 99.9% uptime.</p>
        </div>
        <h1 class="w-fit text-center h-fit py-2 overflow-hidden border border-black">
          <SecondaryNavigationButton title="View Study case" target="portfolio" />
        </h1>
      </div>
      <div
        class="p-6 rounded col-span-1  md:row-span-1 md:col-span-2  lg:col-span-2  bg-gray-200/90 dark:bg-neutral-800/90  hover:brightness-105 dark:hover:brightness-110">
        <PrimaryIconBox />
        <h1 class="py-1 text-sm md:text-base lg:text-lg font-bold capitalize">
          Tools & Methodologies
        </h1>
        <div class="flex flex-wrap gap-3">
          <span v-for="tag in ['agile/scrum', 'ci/cd pipelines', 'test driven dev', 'user research']" :key="tag"
            class="  text-xs md:text-sm lg:text-md  cursor-pointer text-black dark:text-white bg-white/80 dark:bg-neutral-800 uppercase px-2 py-1 border border-gray-400 dark:border-gray-200/70  ">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>