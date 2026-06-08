import { defineStore } from "pinia";
export const useTheme = defineStore("theme", {
  // init theme with state (dark theme first)
  state: () => {
    return {
      theme: localStorage.getItem("theme") || "dark",
    };
  },
  actions: {
    initTheme() {
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },
    setTheme(theme) {
      this.theme = theme;

      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },
  },
});
