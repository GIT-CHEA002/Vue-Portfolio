import AboutView from "@/views/About/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/Home/HomeView.vue";
import PorfolioView from "@/views/PorfolioView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about-page",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact-page",
      component: ContactView,
    },
    {
      path: "/portfolio",
      name: "portfolio-page",
      component: PorfolioView,
    },
  ],
});

export default router;
