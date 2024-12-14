// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://finctory.com',
    name: '斐闊．Finctory',
    description: '「財務韌性，科技共行」- 專業的金融科技解決方案提供商',
    defaultLocale: 'zh-TW'
  },
  robots: {
    enabled: true,
    sitemap: true,
    indexable: true,
  },
  ogImage: {
    enabled: true,
  },
  linkChecker: {
    enabled: true,
  },
  ssr: true, // 啟用服務器端渲染以提升SEO
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  devtools: { enabled: false },
  css: ['./assets/main.css'],
  buildAssetsDir: '/static/',
  image: {
    format: ['webp', 'avif'],
    provider: 'ipx',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
  }
})
