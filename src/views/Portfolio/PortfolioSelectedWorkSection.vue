<script setup>
import TertiaryTitle from "@/components/shared/TertiaryTitle.vue";
import portfiolioSelected1 from "../../assets/image/portfolio/portfolioSelected1.jpg"
import portfiolioSelected2 from "../../assets/image/portfolio/portfolioSelected2.jpg"
import portfiolioSelected3 from "../../assets/image/portfolio/portfolioSelected3.jpg"
import portfiolioSelected4 from "../../assets/image/portfolio/portfolioSelected4.jpg"
import InfoText from "@/components/shared/InfoText.vue";
import { ArrowUpRightIcon } from "@heroicons/vue/16/solid";
import PrimaryNavigationButton from "@/components/buttons/PrimaryNavigationButton.vue";
import SecondaryNavigationButton from "@/components/buttons/SecondaryNavigationButton.vue";

const selectedWorks = [
  {
    id: 1,
    category: "WEB APPLICATION",
    title: "Quantos Finance v2",
    image: portfiolioSelected1,
    gridStyle: " row-span-1 col-span-1 md:row-span-2 md:col-span-2"
  },
  {
    id: 2,
    category: "BRAND IDENTITY",
    title: "Aura Consultancy",
    image: portfiolioSelected2,
    gridStyle: "  row-span-1 lg:row-span-2"
  },
  {
    id: 3,
    category: "UI/UX DESIGN",
    title: "Helix Home",
    image: portfiolioSelected3,
    gridStyle: "col-span-1 row-span-1"
  },
  {
    id: 4,
    category: "WEB EXPERIENCE",
    title: "Noir Archive",
    image: portfiolioSelected4,
    gridStyle: "col-span-1 row-span-1"
  },
  {
    id: 5,
    category: "Process & Strategy",
    title: "Click to view my technical methodology and workflow.",
    image: null, // Custom CTA card style
    gridStyle: "col-span-1 row-span-1"
  }
];
</script>
<template>
  <!-- later we will remove this border bottom at the end of the projects -->
  <section class="px-4 sm:px-8 md:px-12 py-12 border-b shadow-xl  border-cyan-400">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[230px] gap-12 py-8">
      <div v-for="(selectedWork) in selectedWorks" :key="selectedWork.id"
        :class="`relative ${selectedWork.gridStyle} rounded group overflow-hidden`">
        <img v-if="selectedWork.image !== null" :src="selectedWork.image" :alt="`porfolio selected 1`"
          class="w-full h-full object-cover transition-transform duration-300 dark:grayscale dark:group-hover:grayscale-0 group-hover:scale-[1.01]">
        <div v-if="selectedWork.image != null"
          class="absolute group p-4 flex flex-col justify-between  w-full h-full z-10  top-0 ">
          <div class="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRightIcon class="w-6 h-6 text-cyan-400" />
          </div>
          <div class="block">
            <TertiaryTitle :title="selectedWork.category" class=" brightness-110 dark:brightness-105" />
            <h1 class="text-sm md:text-base lg:text-lg font-bold text-white dark:text-white/90">{{ selectedWork.title }}
            </h1>
            <InfoText
              class="overflow-hidden text-white dark:text-white/90 max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out "
              text="A high-frequency trading dashboard utilizing real-time WebSockets and custom OpenGL visualizations for institutional investors." />
          </div>
        </div>
        <div v-else
          :class="`px-4 py-2 flex items-center justify-center text-center h-full rounded ${selectedWork.gridStyle} bg-gray-200/90 dark:bg-neutral-800/90`">
          <div class="space-y-3">
            <TertiaryTitle :title="selectedWork.category" class="  brightness-110 dark:brightness-105" />
            <InfoText class="text-black dark:text-white/90" :text="selectedWork.title" />
            <div>
              <SecondaryNavigationButton title="view blueprint" target="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>