<script setup>
import PrimaryTitle from '@/components/shared/PrimaryTitle.vue';
import featureProject1 from '../../assets/image/featuredProject1.png'
import featureProject2 from '../../assets/image/featuredProject2.png'
import featureProject3 from '../../assets/image/featuredProject3.png'
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
const cards = [
  {
    id: 1,
    image: featureProject1,
    type: "Fintech Solution",
    name: "Obsidian ledger"
  }, {
    id: 2,
    image:
      featureProject2,
    type: "Architecture",
    name: "Nova Core"
  }, {
    id: 3,
    image: featureProject3,
    type: "Interface design",
    name: "Vertext UI"
  }
]

</script>
<template>
  <section class="min-h-[100vh] w-full px-4 sm:px-8 md:px-12 border-t-2 border-black dark:bg-black py-8">
    <PrimaryTitle />
    <div class="py-8 mt-6 grid md:odd:grid-cols-[3fr_4fr] md:even:grid-cols-[4fr_3fr] gap-12">
      <div v-for="(card) in cards" :key="card.id"
        class="relative bg-neutral-900/80 h-fit border rounded border-cyan-600 dark:border-gray-100/60 overflow-hidden">
        <div class="sm:h-[280px] md:h[300px] lg:h-[350px]">
          <img :src="card.image" :alt="`card image id = ${card.id}`"
            class="w-full h-full  object-cover transition ease-in-out grayscale hover:grayscale-0  hover:scale-[1.02] duration-300">
        </div>
        <div
          class="absolute px-4 bottom-0 border-t-[0.5px] border-blue-100/60 bg-white/60 dark:bg-neutral-900/80 backdrop-blur-sm w-full py-6 flex justify-between">
          <div>
            <h1
              class="uppercase text-cyan-600 text-xs md:text-sm dark:text-cyan-400 tracking-wide leading-normal font-light">
              {{ card.type }}
            </h1>
            <span class="capitalize mt-0.5 text-sm md:text-base lg:text-lg" font-semibold dark:text-white ">
              {{ card.name }}
            </span>
          </div>
          <button>
            <ArrowRightIcon class=" w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </button>
          </div>
        </div>
        <div
          class="w-full space-y-4 h-[350px] px-4 md:px-8 lg:px-16 flex flex-col  justify-center  border rounded border-cyan-600 dark:border-cyan-400 bg-gray-200/90 backdrop-blur-md dark:bg-neutral-900/80 ">
          <h1 class="font-bold text-black dark:text-white text-lg md:text-xl lg:text-2xl">See the complete archives
            of
            excellence.</h1>
          <p class="text-sm md:text-base lg:text-lg brightness-90">
            Every pixel is placed with intention. Every line of code is optimized for the hightest high-performance
            standards
          </p>
          <h1
            class="flex items-center tracking-wider text-sm cursor-pointer md:text-base text-cyan-600 dark:text-cyan-400 hover:drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]">
            Explore
            Full
            Portfolio
            <ArrowRightIcon class="w-4 h-4 ms-2" />
          </h1>
        </div>
      </div>
  </section>
</template>