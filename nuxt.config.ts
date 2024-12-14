// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots'  // 使用官方的robots模組
  ],
  site: {
    url: 'https://finctory.com',
    name: '斐闊．Finctory',
    description: '「財務韌性，科技共行」- 專業的金融科技解決方案提供商',
    defaultLocale: 'zh-TW'
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://finctory.com/sitemap.xml'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/robots.txt']  // 忽略robots.txt的預渲染
    }
  },
  ogImage: {
    enabled: true,
  },
  linkChecker: {
    enabled: true,
  },
  ssr: true,
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  devtools: { enabled: false },
  css: ['./assets/main.css'],
  buildAssetsDir: '/static/',
  image: {
    format: ['webp', 'png'],
    provider: 'ipx',
    ipx: {
      optimizers: {
        svg: false // 禁用SVG優化
      }
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
    domains: ['finctory.com'],
    quality: 80
  }
})
