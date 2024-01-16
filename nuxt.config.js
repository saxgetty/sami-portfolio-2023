// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['@vueuse/motion/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  layouts: {
    default: "~/layouts/default.vue",
  },
  runtimeConfig: {
    public: {
      motion: {
      }
    }
  },
})
