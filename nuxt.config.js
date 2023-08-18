// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    meta: [
      {
        name: 'p:domain_verify',
        content: 'd00a4330ea1e6735fb7debdafca1670c' // Pinterest HTML tag
      }
    ],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})