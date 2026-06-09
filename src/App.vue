<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";

</script>
<template>
  <div class="w-full">
    <Navbar />
    <RouterView />
  </div>

</template>
