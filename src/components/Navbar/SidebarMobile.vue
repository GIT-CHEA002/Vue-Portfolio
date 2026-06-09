<script setup>
import { MapIcon, MoonIcon, ShareIcon, SunIcon, XMarkIcon } from "@heroicons/vue/16/solid";
import { defineProps } from "vue";
import SidebarNavLink from "./SidebarNavLink.vue";
defineProps({
  sidebarOpen: {
    type: Boolean,
  },
  toggleSidebarOpen: {
    type: Function,
  },
  theme: {
    type: Object,
  },
  isActiveLink: {
    type: Function
  }
});
</script>
<template>
  <Transition enter-active-class="transition-transform duration-500 ease-out" enter-from-class="translate-x-full"
    enter-to-class="translate-x-0" leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="translate-x-0" leave-to-class="translate-x-full">
    <div v-if="sidebarOpen"
      class="flex flex-col shadow-lg py-6 w-[300px] h-[100vh] absolute z-50 right-0 top-0 bg-white dark:bg-black/95">
      <div class="px-3 flex justify-between">
        <h1 class="ps-6 text-black dark:text-white cursor-pointer text-base font-extrabold">
          ELITE CRATF
        </h1>
        <button type="button" @click="toggleSidebarOpen">
          <XMarkIcon class="w-6 h-6 text-cyan-500 dark:text-white" />
        </button>
      </div>
      <div class="w-full pt-12 px-3 space-y-7">
        <SidebarNavLink v-for="value in [
          { target: '', title: 'Home' },
          { target: 'about', title: 'About' },
          { target: 'portfolio', title: 'Portfolio' },
          { target: 'contact', title: 'Contact' },
        ]" :target="value.target" :title="value.title" :toggle-sidebar-open="toggleSidebarOpen"
          :is-active-link="isActiveLink" />
      </div>
      <div class="px-6 flex-1 flex items-end justify-between">
        <div class="flex items-center ms-3 cursor-pointer">
          <button type="button" @click="theme.toggleTheme()">
            <SunIcon v-if="theme.theme === 'dark'" class="w-6 h-6 me-3 text-black dark:text-white" />
            <MoonIcon v-if="theme.theme === 'light'" class="w-6 h-6 me-3 text-black dark:text-white" />
          </button>
        </div>
        <ShareIcon class="w-6 h-6 me-3 cursor-pointer text-black dark:text-white" />
        <MapIcon class="w-6 h-6 me-3 cursor-pointer text-black dark:text-white" />
      </div>
    </div>
  </Transition>
  <div>

  </div>
</template>
