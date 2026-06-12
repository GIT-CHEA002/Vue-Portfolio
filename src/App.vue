<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

</script>
<template>
  <div class="w-full">
    <Navbar />
    <RouterView />
    <Footer />
  </div>

</template>
