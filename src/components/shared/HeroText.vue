<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: "Building digital excellence through practise engineering."
  },
  hightlightText: {
    type: String,
    default: "excellence"
  },
  defaultText: {
    type: String,
    default: "text-4xl md:text-5xl lg:text-6xl"
  }
})
const titleParts = computed(() => {
  if (!props.title) {
    return []
  }
  if (!props.hightlightText) {
    return [props.title];
  }
  // regex to cut the string 
  const regex = new RegExp(`(${props.hightlightText})`, 'gi');
  return props.title.split(regex)
})
</script>
<template>
  <div>
    <h1
      :class="`capitalize leading-tight  ${defaultText} tracking-widest line-clamp-3 font-extrabold text-black dark:text-white`">

      <template v-for="(part, index) in titleParts" :key="index">
        <span v-if="part.toLowerCase() === props.hightlightText.toLowerCase()"
          class="dark:text-cyan-400 text-cyan-600 drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]">
          {{ part }}
        </span>
        <span v-else>
          {{ part }}
        </span>
      </template>

    </h1>
  </div>
</template>