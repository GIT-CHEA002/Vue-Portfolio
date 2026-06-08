import "./assets/index.css";
import "@fontsource/poppins";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useTheme } from "./store/theme";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
const theme = useTheme(pinia);
theme.initTheme();
app.use(router); // use router in app
app.mount("#app"); // mount the app (render)
