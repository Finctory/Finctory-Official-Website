# 效能優化

> 收集並整理優秀網頁設計案例中的效能優化技巧與最佳實踐

## 📑 目錄

- [載入策略](#載入策略)
- [圖片優化](#圖片優化)
- [程式碼分割](#程式碼分割)
- [動畫效能](#動畫效能)
- [資源壓縮](#資源壓縮)
- [快取策略](#快取策略)
- [效能監控](#效能監控)

---

## 載入策略

### 技術說明

優化網頁載入速度的策略，包括懶加載、預載入、關鍵資源優先等。在 Nuxt 3 中，可以使用內建的懶加載功能和資源提示來優化載入效能。

### 實現方法

#### 圖片懶加載

```vue
<template>
  <NuxtImg
    src="/image.jpg"
    loading="lazy"
    placeholder
    format="webp"
    sizes="sm:100vw md:50vw lg:33vw"
  />
</template>
```

#### 組件懶加載

```vue
<template>
  <LazyHeavyComponent v-if="shouldLoad" />
</template>

<script setup lang="ts">
const shouldLoad = ref(false)

onMounted(() => {
  // 延遲載入重型組件
  setTimeout(() => {
    shouldLoad.value = true
  }, 1000)
})
</script>
```

#### 資源預載入

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preload',
      href: '/fonts/custom-font.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
    {
      rel: 'prefetch',
      href: '/next-page',
    },
  ],
})
</script>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div>
    <!-- 關鍵內容立即載入 -->
    <section class="hero">
      <h1>關鍵內容</h1>
      <NuxtImg src="/hero-image.jpg" priority format="webp" alt="Hero Image" class="hero-image" />
    </section>

    <!-- 非關鍵內容懶加載 -->
    <section class="content">
      <div
        v-for="item in items"
        :key="item.id"
        class="lazy-item"
        v-intersect="{
          handler: onIntersect,
          options: { threshold: 0.1 },
        }"
      >
        <LazyCard :data="item" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useIntersect } from '@vueuse/core'

interface Item {
  id: number
  title: string
  image: string
}

const items = ref<Item[]>([])

// 使用 Intersection Observer 實現懶加載
const onIntersect = (isIntersecting: boolean) => {
  if (isIntersecting && items.value.length === 0) {
    // 載入更多內容
    loadMoreItems()
  }
}

const loadMoreItems = async () => {
  // 模擬 API 請求
  const response = await fetch('/api/items')
  const data = await response.json()
  items.value = data
}

// 預載入關鍵資源
useHead({
  link: [
    {
      rel: 'preload',
      href: '/fonts/main-font.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
  ],
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
}

.lazy-item {
  min-height: 200px;
  margin-bottom: 2rem;
}
</style>
```

#### Nuxt 3 路由預載入

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/products/**': { isr: 3600 }, // ISR with 1 hour revalidation
    '/admin/**': { ssr: false }, // SPA mode for admin
  },
})
```

### 參考連結

- [Web.dev - Loading Performance](https://web.dev/fast/)
- [Resource Hints](https://www.w3.org/TR/resource-hints/)
- [Nuxt 3 Image Module](https://image.nuxtjs.org/)
- [Nuxt 3 Route Rules](https://nuxt.com/docs/guide/concepts/rendering#route-rules)
- [VueUse Intersect](https://vueuse.org/core/useIntersect/)

### 適用場景

- 首屏載入優化（關鍵資源優先載入）
- 減少初始載入時間（懶加載非關鍵內容）
- 提升使用者體驗（預載入下一頁資源）
- 圖片畫廊（懶加載圖片）
- 無限滾動列表（按需載入內容）

---

## 圖片優化

### 技術說明

圖片的格式選擇、壓縮、響應式載入等優化策略。Nuxt Image 模組提供了強大的圖片優化功能，包括自動格式轉換、響應式圖片、懶加載等。

### 實現方法

#### 使用 Nuxt Image

```vue
<template>
  <NuxtImg
    src="/image.jpg"
    alt="Description"
    width="800"
    height="600"
    format="webp"
    quality="80"
    loading="lazy"
    placeholder
    sizes="sm:100vw md:50vw lg:33vw"
  />
</template>
```

#### 響應式圖片

```vue
<template>
  <NuxtPicture
    src="/hero-image.jpg"
    alt="Hero Image"
    :img-attrs="{
      class: 'hero-image',
    }"
    sizes="xs:100vw sm:100vw md:100vw lg:1920px"
    format="webp"
    quality="85"
  />
</template>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="image-gallery">
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <NuxtImg
        :src="image.src"
        :alt="image.alt"
        width="400"
        height="300"
        format="webp"
        quality="80"
        loading="lazy"
        placeholder
        sizes="sm:100vw md:50vw lg:33vw"
        class="gallery-image"
        @load="onImageLoad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Image {
  src: string
  alt: string
}

const images = ref<Image[]>([
  { src: '/images/image1.jpg', alt: 'Image 1' },
  { src: '/images/image2.jpg', alt: 'Image 2' },
  { src: '/images/image3.jpg', alt: 'Image 3' },
])

const onImageLoad = () => {
  console.log('Image loaded')
}
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}
</style>
```

#### Nuxt 3 配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    provider: 'ipx',
    ipx: {
      modifiers: {
        quality: 80,
        format: 'webp',
      },
    },
  },
})
```

### 參考連結

- [Nuxt Image Module](https://image.nuxtjs.org/)
- [Web.dev - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [WebP 格式說明](https://developers.google.com/speed/webp)
- [AVIF 格式說明](https://avif.io/)

### 適用場景

- 減少頻寬使用（自動格式轉換、壓縮）
- 提升載入速度（懶加載、預載入）
- 響應式圖片（根據設備載入合適尺寸）
- 圖片畫廊（優化大量圖片載入）
- 產品展示（高品質圖片優化）

---

## 程式碼分割

### 技術說明

將程式碼分割成多個區塊，按需載入。Nuxt 3 自動實現程式碼分割，但我們也可以手動控制分割策略以進一步優化效能。

### 實現方法

#### Nuxt 3 自動程式碼分割

Nuxt 3 會自動根據路由和組件進行程式碼分割，無需額外配置。

#### 手動動態導入

```typescript
// 動態導入組件
const HeavyComponent = defineAsyncComponent(() => import('~/components/HeavyComponent.vue'))

// 動態導入函數
const loadUtility = async () => {
  const { utilityFunction } = await import('~/utils/heavy-utility')
  return utilityFunction
}
```

#### 路由層級分割

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    '/admin/**': { ssr: false }, // SPA 模式，減少初始載入
    '/products/**': { isr: 3600 }, // ISR，按需重新生成
  },
})
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div>
    <button @click="loadHeavyComponent">載入重型組件</button>
    <Suspense v-if="shouldLoad">
      <template #default>
        <LazyHeavyComponent />
      </template>
      <template #fallback>
        <div class="loading">載入中...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const shouldLoad = ref(false)

// 動態導入組件
const HeavyComponent = defineAsyncComponent({
  loader: () => import('~/components/HeavyComponent.vue'),
  loadingComponent: () => import('~/components/Loading.vue'),
  errorComponent: () => import('~/components/Error.vue'),
  delay: 200,
  timeout: 3000,
})

const loadHeavyComponent = () => {
  shouldLoad.value = true
}

// 動態導入工具函數
const loadUtility = async () => {
  const { heavyFunction } = await import('~/utils/heavy-utility')
  return heavyFunction
}
</script>

<style scoped>
.loading {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
}
</style>
```

#### Nuxt 3 路由配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    // 靜態頁面預渲染
    '/': { prerender: true },
    '/about': { prerender: true },

    // 動態路由 ISR
    '/products/**': { isr: 3600 },

    // SPA 模式
    '/admin/**': { ssr: false },

    // 混合模式
    '/dashboard': { ssr: true, headers: { 'Cache-Control': 's-maxage=60' } },
  },
})
```

### 參考連結

- [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [Vite Code Splitting](https://vitejs.dev/guide/features.html#async-chunk-loading-optimization)
- [Nuxt 3 Route Rules](https://nuxt.com/docs/guide/concepts/rendering#route-rules)
- [Vue 3 Async Components](https://vuejs.org/guide/components/async.html)

### 適用場景

- 減少初始載入大小（分割大型組件與庫）
- 按需載入（根據使用者操作載入功能）
- 提升載入速度（優先載入關鍵程式碼）
- 路由層級優化（不同路由使用不同載入策略）

---

## 動畫效能

### 技術說明

優化動畫效能的方法，包括使用 GPU 加速、requestAnimationFrame、will-change 等。良好的動畫效能能夠確保 60fps 的流暢體驗。

### 實現方法

#### 使用 GPU 加速

```css
.animated-element {
  transform: translateZ(0); /* 觸發 GPU 加速 */
  will-change: transform; /* 提示瀏覽器優化 */
}

/* 或使用 translate3d */
.animated-element {
  transform: translate3d(0, 0, 0);
}
```

#### 使用 requestAnimationFrame

```typescript
const animate = () => {
  // 動畫邏輯
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
```

#### 避免觸發重排重繪

```css
/* ✅ 好的做法：使用 transform 和 opacity */
.animated {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ 避免：修改會觸發重排的屬性 */
.animated {
  left: 100px; /* 觸發重排 */
  width: 200px; /* 觸發重排 */
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="animation-performance-demo">
    <div ref="animatedBox" class="animated-box" :style="{ transform: `translateX(${position}px)` }">
      動畫元素
    </div>
    <button @click="startAnimation">開始動畫</button>
    <button @click="stopAnimation">停止動畫</button>
    <p>FPS: {{ fps }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const animatedBox = ref<HTMLElement | null>(null)
const position = ref(0)
const fps = ref(60)
const animationId = ref<number | null>(null)
let lastTime = 0
let frameCount = 0

const animate = (currentTime: number) => {
  if (!lastTime) lastTime = currentTime

  // 計算 FPS
  frameCount++
  if (currentTime - lastTime >= 1000) {
    fps.value = frameCount
    frameCount = 0
    lastTime = currentTime
  }

  // 更新位置（使用 transform，觸發 GPU 加速）
  position.value = (position.value + 2) % 500

  animationId.value = requestAnimationFrame(animate)
}

const startAnimation = () => {
  if (animationId.value === null) {
    animationId.value = requestAnimationFrame(animate)
  }
}

const stopAnimation = () => {
  if (animationId.value !== null) {
    cancelAnimationFrame(animationId.value)
    animationId.value = null
  }
}

onUnmounted(() => {
  stopAnimation()
})
</script>

<style scoped>
.animated-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;

  /* GPU 加速 */
  transform: translateZ(0);
  will-change: transform;

  /* 避免觸發重排 */
  position: absolute;
  left: 0;
  top: 50%;
}
</style>
```

#### CSS 動畫優化

```vue
<template>
  <div class="css-animation-demo">
    <div class="optimized-animation">優化的動畫</div>
  </div>
</template>

<style scoped>
.optimized-animation {
  width: 100px;
  height: 100px;
  background: #667eea;
  border-radius: 8px;

  /* 使用 transform 和 opacity（GPU 加速） */
  animation: slideIn 1s ease-out;

  /* 提示瀏覽器優化 */
  will-change: transform, opacity;
}

@keyframes slideIn {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 動畫結束後移除 will-change */
.optimized-animation {
  animation-fill-mode: both;
}

.optimized-animation.animation-complete {
  will-change: auto;
}
</style>
```

### 參考連結

- [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [CSS GPU Acceleration](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)
- [CSS will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
- [Web.dev - Animations](https://web.dev/animations/)

### 適用場景

- 流暢動畫（確保 60fps）
- 減少重排重繪（使用 transform 和 opacity）
- 效能優化（GPU 加速、will-change）
- 複雜動畫序列（requestAnimationFrame 控制）

---

## 資源壓縮

### 技術說明

壓縮 CSS、JavaScript、HTML 等資源以減少檔案大小。Nuxt 3 自動進行資源壓縮，但我們也可以手動配置壓縮策略。

### 實現方法

#### Nuxt 3 自動壓縮

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
})
```

#### Gzip/Brotli 壓縮

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },
})
```

#### 手動壓縮配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
```

### 程式碼範例

#### Nuxt 3 配置範例

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    // 壓縮公共資源
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    // 最小化
    minify: true,
    // 預渲染壓縮
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  vite: {
    build: {
      // 生產環境移除 console
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // 程式碼分割
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            utils: ['lodash-es'],
          },
        },
      },
    },
  },
})
```

#### 檢查壓縮效果

```typescript
// 使用 Performance API 檢查資源大小
const checkResourceSize = () => {
  const resources = performance.getEntriesByType('resource')
  resources.forEach((resource) => {
    console.log(`${resource.name}: ${resource.transferSize} bytes`)
  })
}
```

### 參考連結

- [Web.dev - Minification](https://web.dev/minify-css/)
- [Gzip Compression](https://web.dev/uses-text-compression/)
- [Nuxt Nitro Compression](https://nitro.unjs.io/config/#compresspublicassets)
- [Vite Build Options](https://vitejs.dev/config/build-options.html)

### 適用場景

- 減少檔案大小（CSS、JS、HTML 壓縮）
- 提升載入速度（Gzip/Brotli 壓縮）
- 節省頻寬（資源壓縮、圖片優化）
- 生產環境優化（移除 console、debugger）

---

## 快取策略

### 技術說明

使用瀏覽器快取和 CDN 快取提升載入速度。合理的快取策略可以大幅提升重複訪問的載入速度。

### 實現方法

#### HTTP 快取標頭

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/static/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/api/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600',
        },
      },
    },
  },
})
```

#### Service Worker 快取

```typescript
// 使用 @vite-pwa/nuxt
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    strategies: 'generateSW',
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
          },
        },
      ],
    },
  },
})
```

#### 瀏覽器快取 API

```typescript
// 使用 Cache API
const cacheName = 'app-cache-v1'
const cache = await caches.open(cacheName)
await cache.add('/static/logo.png')
```

### 程式碼範例

#### Nuxt 3 快取配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      // 靜態資源長期快取
      '/static/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      // API 快取
      '/api/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
      },
      // HTML 快取
      '/': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
      },
    },
  },
})
```

#### Service Worker 快取範例

```typescript
// sw.js
const CACHE_NAME = 'app-cache-v1'
const urlsToCache = ['/', '/static/logo.png', '/static/main.css', '/static/main.js']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})
```

### 參考連結

- [MDN - HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [Web.dev - HTTP Caching](https://web.dev/http-cache/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

### 適用場景

- 重複訪問優化（瀏覽器快取、CDN 快取）
- 減少伺服器負載（靜態資源快取）
- 提升載入速度（快取策略優化）
- 離線支援（Service Worker 快取）

---

## 效能監控

### 技術說明

監控網頁效能指標，包括 Core Web Vitals、載入時間等。使用 Performance API 和 Web Vitals 可以追蹤關鍵效能指標。

### 實現方法

#### Web Vitals 監控

```typescript
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

onCLS(console.log)
onFID(console.log)
onFCP(console.log)
onLCP(console.log)
onTTFB(console.log)
```

#### Performance API

```typescript
// 測量載入時間
const perfData = performance.getEntriesByType('navigation')[0]
const loadTime = perfData.loadEventEnd - perfData.loadEventStart
console.log(`頁面載入時間: ${loadTime}ms`)
```

#### Nuxt 3 效能監控

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=GA_ID',
          async: true,
        },
      ],
    },
  },
})
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="performance-monitor">
    <div class="metrics">
      <div class="metric">
        <span class="label">FCP:</span>
        <span class="value">{{ metrics.fcp }}ms</span>
      </div>
      <div class="metric">
        <span class="label">LCP:</span>
        <span class="value">{{ metrics.lcp }}ms</span>
      </div>
      <div class="metric">
        <span class="label">CLS:</span>
        <span class="value">{{ metrics.cls }}</span>
      </div>
      <div class="metric">
        <span class="label">FID:</span>
        <span class="value">{{ metrics.fid }}ms</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

interface Metrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

const metrics = ref<Metrics>({
  fcp: null,
  lcp: null,
  cls: null,
  fid: null,
  ttfb: null,
})

const sendToAnalytics = (metric: any) => {
  // 發送到分析服務
  console.log(metric)

  // 更新本地指標
  switch (metric.name) {
    case 'FCP':
      metrics.value.fcp = metric.value
      break
    case 'LCP':
      metrics.value.lcp = metric.value
      break
    case 'CLS':
      metrics.value.cls = metric.value
      break
    case 'FID':
      metrics.value.fid = metric.value
      break
    case 'TTFB':
      metrics.value.ttfb = metric.value
      break
  }
}

onMounted(() => {
  onCLS(sendToAnalytics)
  onFID(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)

  // 使用 Performance API
  const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (perfData) {
    console.log('DNS 查詢時間:', perfData.domainLookupEnd - perfData.domainLookupStart, 'ms')
    console.log('TCP 連接時間:', perfData.connectEnd - perfData.connectStart, 'ms')
    console.log('請求響應時間:', perfData.responseEnd - perfData.requestStart, 'ms')
    console.log('DOM 解析時間:', perfData.domInteractive - perfData.responseEnd, 'ms')
    console.log('頁面載入時間:', perfData.loadEventEnd - perfData.loadEventStart, 'ms')
  }
})
</script>

<style scoped>
.performance-monitor {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  z-index: 9999;
}

.metrics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.label {
  font-weight: bold;
}

.value {
  color: #4ade80;
}
</style>
```

#### Nuxt 3 效能監控插件

```typescript
// plugins/performance.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      const sendToAnalytics = (metric: any) => {
        // 發送到 Vercel Analytics 或其他服務
        if (window.gtag) {
          window.gtag('event', metric.name, {
            value: Math.round(metric.value),
            event_category: 'Web Vitals',
            event_label: metric.id,
            non_interaction: true,
          })
        }
      }

      onCLS(sendToAnalytics)
      onFID(sendToAnalytics)
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    })
  }
})
```

### 參考連結

- [Web Vitals](https://web.dev/vitals/)
- [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com/)

### 適用場景

- 效能分析（追蹤關鍵指標）
- 優化指標追蹤（Core Web Vitals）
- 使用者體驗監控（真實使用者監控）
- 效能優化決策（基於數據優化）

---

## 📝 案例引用

待補充各案例網站的具體效能優化分析...

---

**最後更新**：2025-11-17
