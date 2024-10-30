// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  devtools: { enabled: false },
  css: ['./assets/main.css'],
  buildAssetsDir: '/static/',
})
