import AboutView from "@/views/About/AboutView.vue";
import ContactView from "@/views/Contact/ContactView.vue";
import HomeView from "@/views/Home/HomeView.vue";
import PorfolioView from "@/views/Portfolio/PorfolioView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomeView,
      meta: {
        title: "Home - My Portfolio",
        pageLogo: "/home.png"
      }
    },
    {
      path: "/about",
      name: "about-page",
      component: AboutView,
      meta: {
        title: "About - My Works",
        pageLogo: "/about.png"
      }
    },
    {
      path: "/contact",
      name: "contact-page",
      component: ContactView,
      meta: {
        title: "Contact - Connect to Me",
        pageLogo:"/contact.png"
      }
    },
    {
      path: "/portfolio",
      name: "portfolio-page",
      component: PorfolioView,
      meta: {
        title: "Portfolio - My Carrees",
        pageLogo:"/portfolio.png"
      }
    },
  ],
}); 
router.afterEach((to) => {
  document.title = to.meta.title || "My Portfolio"
  if (to.meta.pageLogo) {
    let link = document.querySelector("link[rel~='icon")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.href = to.meta.pageLogo
  }
})

export default router;
