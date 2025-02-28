// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots', // 使用官方的robots模組
    '@nuxtjs/sitemap', // 添加 sitemap 模組
  ],
  site: {
    url: 'https://www.finctory.com',
    name: '斐闊．Finctory',
    description: '「財務韌性，科技共行」- 專業的金融科技解決方案提供商',
    defaultLocale: 'zh-TW',
  },
  sitemap: {
    hostname: 'https://www.finctory.com',
    gzip: true,
    exclude: ['/404', '/private/**'],
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    },
    urls: [
      {
        loc: '/', // 修正屬性名稱
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
        img: [
          {
            url: 'https://www.finctory.com/finctory_LOGO.svg',
            caption: '斐闊．Finctory Logo',
          },
        ],
      },
      {
        loc: '/invoice-doctor',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date(),
        img: [
          {
            url: 'https://www.finctory.com/thumbnail.png',
            caption: '發票醫生 - AI智能記帳系統',
          },
        ],
      },
    ],
    sitemaps: {
      enabled: true,
      path: '/sitemaps/',
    },
    xslUrl: '/sitemap.xsl',
    xmlNs:
      'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"',
  },
  i18n: {
    locales: ['zh-TW'],
    defaultLocale: 'zh-TW',
    vueI18n: {
      fallbackLocale: 'zh-TW',
      messages: {
        'zh-TW': {
          welcome: '歡迎來到斐闊．Finctory',
        },
      },
    },
  },
  robots: {
    userAgent: '*', // 修正大小寫
    allow: '/',
    sitemap: 'https://www.finctory.com/sitemap.xml',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/invoice-doctor'], // 添加所有重要路徑
      ignore: ['/robots.txt'],
    },
    compressPublicAssets: true, // 啟用資源壓縮
    minify: true, // 啟用程式碼壓縮
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
        svg: false, // 禁用SVG優化
      },
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    domains: ['finctory.com'],
    quality: 80,
  },
})
