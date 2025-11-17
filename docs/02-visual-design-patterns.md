# 視覺設計模式

> 收集並整理優秀網頁設計案例中的視覺呈現方式與設計模式

## 📑 目錄

- [佈局模式](#佈局模式)
- [色彩系統](#色彩系統)
- [字體排版](#字體排版)
- [視差滾動](#視差滾動)
- [漸變與模糊效果](#漸變與模糊效果)
- [圖片與媒體處理](#圖片與媒體處理)
- [響應式設計](#響應式設計)

---

## 佈局模式

### 技術說明

網頁佈局的設計模式，包括 Grid、Flexbox、絕對定位等。現代網頁設計中，Grid 和 Flexbox 是最常用的佈局方式，能夠實現複雜且響應式的佈局結構。

### 實現方法

#### CSS Grid 佈局

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

#### Flexbox 佈局

```css
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

#### Tailwind CSS 佈局

```html
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="grid-layout">
    <header class="header">Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main-content">
      <div class="card-grid">
        <div v-for="item in items" :key="item.id" class="card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script setup lang="ts">
interface Item {
  id: number
  title: string
  description: string
}

const items = ref<Item[]>([
  { id: 1, title: 'Card 1', description: 'Description 1' },
  { id: 2, title: 'Card 2', description: 'Description 2' },
  { id: 3, title: 'Card 3', description: 'Description 3' },
])
</script>

<style scoped>
.grid-layout {
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

.header {
  grid-area: header;
  padding: 1rem;
  background: var(--color-primary);
}

.sidebar {
  grid-area: sidebar;
  padding: 1rem;
  background: var(--color-secondary);
}

.main-content {
  grid-area: main;
  padding: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.footer {
  grid-area: footer;
  padding: 1rem;
  background: var(--color-primary);
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-areas:
      'header'
      'main'
      'sidebar'
      'footer';
    grid-template-columns: 1fr;
  }
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="grid min-h-screen grid-cols-1 gap-4 p-4 md:grid-cols-12">
    <header class="rounded-lg bg-blue-500 p-4 md:col-span-12">Header</header>
    <aside class="rounded-lg bg-gray-200 p-4 md:col-span-3">Sidebar</aside>
    <main class="grid grid-cols-1 gap-4 md:col-span-9 lg:grid-cols-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
      >
        <h3 class="mb-2 text-xl font-bold">{{ item.title }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
    </main>
    <footer class="rounded-lg bg-blue-500 p-4 md:col-span-12">Footer</footer>
  </div>
</template>
```

### 參考連結

- [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN - CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-template-columns)

### 適用場景

- 複雜的多欄佈局（產品展示、文章列表）
- 響應式網格系統（卡片網格、圖片畫廊）
- 靈活的元素排列（導航欄、表單佈局）
- 全頁面佈局（Header、Sidebar、Main、Footer）

---

## 色彩系統

### 技術說明

網頁的色彩設計系統，包括主色調、輔助色、漸變色等。良好的色彩系統能夠建立品牌識別、提升視覺層次，並支援主題切換功能。

### 實現方法

#### CSS 變數定義色彩系統

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;

  /* 漸變色 */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### Tailwind CSS 色彩配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... 更多色階
          900: '#0c4a6e',
        },
      },
    },
  },
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="color-system-demo">
    <div class="color-palette">
      <div
        v-for="color in colorPalette"
        :key="color.name"
        class="color-card"
        :style="{ backgroundColor: color.value }"
      >
        <span class="color-name">{{ color.name }}</span>
        <span class="color-value">{{ color.value }}</span>
      </div>
    </div>

    <button @click="toggleTheme" class="theme-toggle" :class="{ 'dark-mode': isDark }">
      切換主題
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Color {
  name: string
  value: string
}

const colorPalette = ref<Color[]>([
  { name: 'Primary', value: 'var(--color-primary)' },
  { name: 'Secondary', value: 'var(--color-secondary)' },
  { name: 'Success', value: 'var(--color-success)' },
  { name: 'Danger', value: 'var(--color-danger)' },
])

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<style scoped>
.color-system-demo {
  padding: 2rem;
}

.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.color-card {
  padding: 1.5rem;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8">
    <h2 class="mb-4 text-2xl font-bold text-white">漸變背景</h2>
    <p class="text-white/90">使用 Tailwind CSS 漸變類別</p>
  </div>
</template>
```

### 參考連結

- [Material Design Color System](https://m2.material.io/design/color/the-color-system.html)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 適用場景

- 品牌色彩一致性（建立統一的視覺識別）
- 主題切換（深色/淺色模式）
- 視覺層次建立（使用色彩建立資訊層次）
- 漸變效果（背景、按鈕、卡片）

---

## 字體排版

### 技術說明

字體的選擇、大小、行高、字距等排版設計。良好的字體排版能夠提升可讀性、建立視覺層次，並強化品牌識別。

### 實現方法

#### CSS 字體系統定義

```css
:root {
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-heading: 'Poppins', sans-serif;
  --font-family-mono: 'Fira Code', monospace;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

#### 字體載入優化

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
})
</script>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="typography-demo">
    <h1 class="heading-1">標題 1</h1>
    <h2 class="heading-2">標題 2</h2>
    <h3 class="heading-3">標題 3</h3>
    <p class="body-text">
      這是一段正文內容，展示了字體排版的效果。良好的字體排版能夠提升可讀性，建立視覺層次。
    </p>
    <p class="caption-text">這是說明文字</p>
    <code class="code-text">const example = 'code';</code>
  </div>
</template>

<style scoped>
.typography-demo {
  font-family: var(--font-family-base);
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.heading-1 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.heading-2 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: 600;
  line-height: var(--line-height-tight);
  margin-bottom: 0.75rem;
}

.heading-3 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  line-height: var(--line-height-normal);
  margin-bottom: 0.5rem;
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  margin-bottom: 1rem;
  color: #374151;
}

.caption-text {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: #6b7280;
  margin-bottom: 1rem;
}

.code-text {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #dc2626;
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="space-y-4">
    <h1 class="font-heading text-4xl font-bold tracking-tight">標題 1</h1>
    <h2 class="font-heading text-3xl font-semibold">標題 2</h2>
    <p class="text-base leading-relaxed text-gray-700">正文內容</p>
    <p class="text-sm text-gray-500">說明文字</p>
  </div>
</template>
```

### 參考連結

- [MDN - CSS Typography](https://developer.mozilla.org/en-US/docs/Web/CSS/Typography)
- [Google Fonts](https://fonts.google.com/)
- [Font Loading Best Practices](https://web.dev/font-best-practices/)
- [Variable Fonts Guide](https://web.dev/variable-fonts/)

### 適用場景

- 提升可讀性（選擇合適的字體、大小、行高）
- 建立視覺層次（使用不同字體大小與字重）
- 品牌識別（使用自訂字體建立獨特風格）
- 響應式排版（根據螢幕尺寸調整字體大小）

---

## 視差滾動

### 技術說明

不同元素以不同速度滾動產生的視差效果。視差滾動可以增加視覺深度，創造沉浸式體驗。

### 實現方法

#### CSS Transform 實現

```css
.parallax-element {
  transform: translateZ(0);
  will-change: transform;
}

.parallax-slow {
  transform: translateY(calc(var(--scroll) * 0.5px));
}

.parallax-fast {
  transform: translateY(calc(var(--scroll) * 1.5px));
}
```

#### JavaScript 滾動監聽

```typescript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector('.parallax-element')
  const speed = 0.5

  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * speed}px)`
  }
})
```

#### GSAP ScrollTrigger

```typescript
gsap.to('.parallax-element', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
})
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="parallax-container" @scroll="handleScroll" ref="container">
    <div class="parallax-background" :style="backgroundStyle">
      <h1>背景層</h1>
    </div>
    <div class="parallax-content" :style="contentStyle">
      <h2>內容層</h2>
      <p>這是一個視差滾動效果範例</p>
    </div>
    <div class="parallax-foreground" :style="foregroundStyle">
      <h3>前景層</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref<HTMLElement | null>(null)
const scrollY = ref(0)

const backgroundStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.3}px)`,
}))

const contentStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.1}px)`,
}))

const foregroundStyle = computed(() => ({
  transform: `translateY(${scrollY.value * -0.2}px)`,
}))

const handleScroll = () => {
  if (container.value) {
    scrollY.value = container.value.scrollTop
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-container {
  height: 200vh;
  overflow-y: auto;
  position: relative;
}

.parallax-background,
.parallax-content,
.parallax-foreground {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  will-change: transform;
}

.parallax-background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 1;
}

.parallax-content {
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
  margin-top: -100vh;
}

.parallax-foreground {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 3;
  margin-top: -100vh;
}
</style>
```

#### GSAP ScrollTrigger 範例

```vue
<template>
  <div class="gsap-parallax">
    <div class="parallax-layer layer-1">層 1</div>
    <div class="parallax-layer layer-2">層 2</div>
    <div class="parallax-layer layer-3">層 3</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.layer-1', {
    y: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: '.gsap-parallax',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.to('.layer-2', {
    y: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.gsap-parallax',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.gsap-parallax {
  height: 200vh;
  position: relative;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

.layer-1 {
  background: #667eea;
  z-index: 1;
}

.layer-2 {
  background: #764ba2;
  z-index: 2;
}

.layer-3 {
  background: #f093fb;
  z-index: 3;
}
</style>
```

### 參考連結

- [Parallax Scrolling Techniques](https://css-tricks.com/parallax-scrolling-techniques/)
- [Awwwards - Parallax Examples](https://www.awwwards.com/websites/parallax/)
- [GSAP Parallax](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [CSS Parallax](https://keithclark.co.uk/articles/pure-css-parallax-websites/)

### 適用場景

- 增加視覺深度（多層次視覺效果）
- 提升使用者體驗（沉浸式體驗）
- 創意展示（作品集、品牌展示）
- 背景動畫（動態背景效果）

---

## 漸變與模糊效果

### 技術說明

使用 CSS 漸變和模糊效果創造的視覺效果。漸變和模糊可以創造現代感的設計，如玻璃態設計（Glassmorphism）和毛玻璃效果。

### 實現方法

#### CSS 漸變

```css
/* 線性漸變 */
.linear-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 徑向漸變 */
.radial-gradient {
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
}

/* 錐形漸變 */
.conic-gradient {
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea);
}
```

#### CSS 模糊效果

```css
/* 背景模糊（毛玻璃效果） */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* 圖片模糊 */
.blur-image {
  filter: blur(5px);
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="gradient-blur-demo">
    <!-- 漸變背景 -->
    <div class="gradient-card linear">
      <h3>線性漸變</h3>
    </div>

    <div class="gradient-card radial">
      <h3>徑向漸變</h3>
    </div>

    <div class="gradient-card conic">
      <h3>錐形漸變</h3>
    </div>

    <!-- 玻璃態效果 -->
    <div class="glass-card">
      <h3>玻璃態設計</h3>
      <p>使用 backdrop-filter 實現毛玻璃效果</p>
    </div>

    <!-- 模糊背景 -->
    <div class="blur-background">
      <div class="blur-content">
        <h3>模糊背景效果</h3>
        <p>背景圖片被模糊，前景內容清晰</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-blur-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.gradient-card {
  padding: 3rem;
  border-radius: 16px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.gradient-card.linear {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-card.radial {
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
}

.gradient-card.conic {
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #4facfe, #667eea);
}

.glass-card {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.blur-background {
  position: relative;
  padding: 4rem 2rem;
  border-radius: 16px;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.blur-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: blur(10px);
  z-index: 0;
}

.blur-content {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="space-y-4 p-4">
    <!-- 漸變背景 -->
    <div class="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <h2 class="text-2xl font-bold text-white">漸變背景</h2>
    </div>

    <!-- 玻璃態效果 -->
    <div class="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md">
      <h3 class="text-xl font-bold text-white">玻璃態設計</h3>
      <p class="text-white/90">使用 Tailwind CSS backdrop-blur</p>
    </div>

    <!-- 模糊效果 -->
    <div class="relative overflow-hidden rounded-lg">
      <img src="/background.jpg" alt="背景" class="h-64 w-full object-cover blur-sm" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="rounded-lg bg-white/90 p-4">
          <h3 class="text-xl font-bold">模糊背景</h3>
        </div>
      </div>
    </div>
  </div>
</template>
```

### 參考連結

- [MDN - CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [MDN - CSS Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [Glassmorphism Design](https://ui.glass/)
- [CSS Backdrop Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

### 適用場景

- 背景效果（漸變背景、模糊背景）
- 玻璃態設計（Glassmorphism，現代 UI 設計）
- 視覺層次（使用模糊區分層次）
- 卡片設計（毛玻璃卡片、漸變卡片）

---

## 圖片與媒體處理

### 技術說明

圖片的優化、載入策略、響應式處理等。使用 Nuxt Image 模組可以自動優化圖片，支援多種格式和響應式載入。

### 實現方法

#### Nuxt Image 基本使用

```vue
<NuxtImg
  src="/image.jpg"
  alt="描述"
  width="800"
  height="600"
  format="webp"
  quality="80"
  loading="lazy"
/>
```

#### 響應式圖片

```vue
<NuxtPicture
  src="/hero.jpg"
  alt="Hero Image"
  sizes="xs:100vw sm:100vw md:100vw lg:1920px"
  format="webp"
/>
```

#### 圖片預載入

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/critical-image.jpg',
    },
  ],
})
</script>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="image-media-demo">
    <!-- 基本圖片 -->
    <NuxtImg
      src="/image.jpg"
      alt="範例圖片"
      width="400"
      height="300"
      format="webp"
      quality="80"
      loading="lazy"
      placeholder
      class="demo-image"
    />

    <!-- 響應式圖片 -->
    <NuxtPicture
      src="/hero.jpg"
      alt="Hero Image"
      :img-attrs="{
        class: 'hero-image',
      }"
      sizes="xs:100vw sm:100vw md:100vw lg:1920px"
      format="webp"
      quality="85"
    />

    <!-- 圖片畫廊 -->
    <div class="image-gallery">
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        width="300"
        height="200"
        format="webp"
        quality="80"
        loading="lazy"
        placeholder
        class="gallery-image"
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
  { src: '/images/image1.jpg', alt: '圖片 1' },
  { src: '/images/image2.jpg', alt: '圖片 2' },
  { src: '/images/image3.jpg', alt: '圖片 3' },
])
</script>

<style scoped>
.image-media-demo {
  padding: 2rem;
}

.demo-image {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}
</style>
```

### 參考連結

- [Nuxt Image Module](https://image.nuxtjs.org/)
- [Web.dev - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [WebP Format](https://developers.google.com/speed/webp)

### 適用場景

- 提升載入速度（圖片優化、格式轉換）
- 節省頻寬（響應式圖片、懶加載）
- 響應式圖片（適應不同螢幕尺寸）
- 圖片畫廊（大量圖片優化載入）

---

## 響應式設計

### 技術說明

適應不同裝置和螢幕尺寸的設計方法。使用 CSS Grid、Flexbox 和媒體查詢可以實現靈活的響應式佈局。

### 實現方法

#### CSS 媒體查詢

```css
/* 行動裝置 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}

/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding: 2rem;
  }
}

/* 桌面 */
@media (min-width: 1025px) {
  .container {
    padding: 3rem;
  }
}
```

#### Tailwind CSS 響應式類別

```vue
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <!-- 內容 -->
</div>
```

#### CSS Grid 響應式

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="responsive-demo">
    <header class="header">
      <h1>響應式設計範例</h1>
      <nav class="nav">
        <a href="#" class="nav-link">首頁</a>
        <a href="#" class="nav-link">關於</a>
        <a href="#" class="nav-link">聯絡</a>
      </nav>
    </header>

    <main class="main-content">
      <div class="card-grid">
        <div v-for="i in 6" :key="i" class="card">
          <h3>卡片 {{ i }}</h3>
          <p>這是響應式卡片內容</p>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>© 2025 範例網站</p>
    </footer>
  </div>
</template>

<style scoped>
.responsive-demo {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.footer {
  padding: 2rem;
  background: #f3f4f6;
  text-align: center;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-content {
    padding: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="flex min-h-screen flex-col">
    <header class="bg-blue-500 p-4 text-white md:p-6 lg:p-8">
      <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 class="text-2xl font-bold md:text-3xl">響應式設計</h1>
        <nav class="flex flex-wrap gap-2 md:gap-4">
          <a href="#" class="rounded px-4 py-2 hover:bg-white/20">首頁</a>
          <a href="#" class="rounded px-4 py-2 hover:bg-white/20">關於</a>
          <a href="#" class="rounded px-4 py-2 hover:bg-white/20">聯絡</a>
        </nav>
      </div>
    </header>

    <main class="flex-1 p-4 md:p-6 lg:p-8">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <div
          v-for="i in 6"
          :key="i"
          class="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg md:p-6"
        >
          <h3 class="mb-2 text-lg font-bold md:text-xl">卡片 {{ i }}</h3>
          <p class="text-sm text-gray-600 md:text-base">響應式內容</p>
        </div>
      </div>
    </main>

    <footer class="bg-gray-100 p-4 text-center md:p-6">
      <p class="text-sm md:text-base">© 2025 範例網站</p>
    </footer>
  </div>
</template>
```

### 參考連結

- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### 適用場景

- 多裝置支援（手機、平板、桌面）
- 行動優先設計（Mobile First）
- 彈性佈局（Grid、Flexbox）
- 響應式圖片與媒體（適應不同螢幕）

---

## 📝 案例引用

待補充各案例網站的具體視覺設計分析...

---

**最後更新**：2025-11-17
