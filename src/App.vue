<script setup>
import { RouterView } from "vue-router";
import Navbar from "../src/components/navbar/Navbar.vue";
import Footer from "../src/components/footer/Footer.vue";

</script>
<template>
  <div class="w-full">
    <Navbar />
    <RouterView />
    <Footer />
  </div>

</template>
