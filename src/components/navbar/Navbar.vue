  <script setup>
  import { Bars3Icon, BriefcaseIcon, EnvelopeIcon, HomeIcon, MapIcon, MoonIcon, ShareIcon, SunIcon, UserIcon, XMarkIcon, } from "@heroicons/vue/16/solid";
  import { useRoute } from "vue-router";
  import { ref } from "vue";
  import { useTheme } from "@/store/theme";
  import SidebarMobile from "./SidebarMobile.vue";
  import HireLink from "./HireLink.vue";
  import NavigationLink from "./NavigationLink.vue";
  const isActiveLink = (path) => {
    const route = useRoute(); // get the route paths 
    return route.path === path;
  }
  const sidebarOpen = ref(false);
  const toggleSidebarOpen = () => {
    sidebarOpen.value = !sidebarOpen.value;
  }
  const theme = useTheme();
</script>
  <template>
    <nav
      class="sticky top-0 z-[999] max-w-7xl px-4 sm:px-8 md:px-12  py-4 md:py-6 bg-white dark:bg-black dark:shadow-cyan-400 shadow-md flex items-center">
      <!-- navigation link -->
      <NavigationLink :is-active-link="isActiveLink" />
      <!-- hire link -->
      <HireLink />
      <!-- setction sidebar mobile -->
      <SidebarMobile :sidebar-open="sidebarOpen" :toggle-sidebar-open="toggleSidebarOpen" :theme="theme"
        :is-active-link="isActiveLink" />
      <!-- toggle sidebar and themes buttons -->
      <div class="flex items-center ms-3 cursor-pointer">
        <button type="button" @click="theme.toggleTheme()">
          <SunIcon v-if="theme.theme === 'dark'" class="w-6 h-6  text-black dark:text-white" />
          <MoonIcon v-if="theme.theme === 'light'" class="w-6 h-6  text-black dark:text-white " />
        </button>
      </div>
      <div class="block md:hidden ms-3">
        <Bars3Icon @click="toggleSidebarOpen" class="w-6 h-6 text-black dark:text-white" />
      </div>
    </nav>
  </template>