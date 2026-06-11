<script setup>
import { CpuChipIcon, SparklesIcon, SquaresPlusIcon } from "@heroicons/vue/16/solid";
import philosophy from "../../assets/image/philosophy.png"
import PrimaryIconBox from "@/components/shared/PrimaryIconBox.vue";
const designPrinciples = [
  {
    id: 1,
    title: "Extreme Precision",
    icon: CpuChipIcon,
    description: "We don't settle for \"good enough.\" Every interaction is tuned for fluid, tactile feedback and mathematical accuracy."
  },
  {
    id: 2,
    title: "Clean Architecture",
    icon: SquaresPlusIcon,
    description: "The beauty of a product is as deep as its source code. We build scalable, bulletproof foundations that last."
  },
  {
    id: 3,
    title: "User Resonance",
    icon: SparklesIcon,
    description: "Minimalism isn't just about less; it's about making sure everything that remains is incredibly impactful."
  }
]
</script>
<template>
  <div class=" px-4 sm:px-8 md:px-12 py-8 overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
      <div>
        <h1 class="capitalize text-lg md:text-2xl lg:text-3xl font-semibold">The Philosophy of
          <span class="text-cyan-400 ">Quite Confidence</span>
          .
        </h1>
        <div v-for="item in designPrinciples" :key="item.id" class="flex py-6 space-x-3 md:space-x-4 lg:space-x-6">
          <primary-icon-box :component="item.icon" />
          <!-- description -->
          <div class="block space-y-2">
            <h1 class=" uppercase font-bold tracking-wider brightness-110 leading-normal">
              {{ item.title }}
            </h1>
            <p class="lg:text-base brightness-75">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="sm:h-[280px] md:h-[300px] lg:h-[350px]">
        <img :src="philosophy" alt=""
          class="h-full w-full object-cover rounded border border-cyan-600 dark:border-cyan-400">
      </div>
    </div>
  </div>
</template>