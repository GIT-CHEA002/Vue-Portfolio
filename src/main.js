import "./assets/index.css";
import "@fontsource/poppins";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import { useTheme } from "@/store/theme";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Toast);
const theme = useTheme(pinia);
theme.initTheme();
app.use(router);

app.mount("#app"); 
