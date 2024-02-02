import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/" ),
  },
  css: ['~/assets/main.scss'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})

