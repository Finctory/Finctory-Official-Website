# 實作範例

> 提供可直接應用的程式碼範例，適用於 Nuxt 3 + Vue 3 技術棧

## 📑 目錄

- [動畫範例](#動畫範例)
- [互動效果範例](#互動效果範例)
- [視覺效果範例](#視覺效果範例)
- [效能優化範例](#效能優化範例)
- [完整組件範例](#完整組件範例)

---

## 動畫範例

### CSS 動畫

#### 淡入淡出效果

```vue
<template>
  <div class="fade-in">
    <h1>淡入效果</h1>
  </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
```

### JavaScript 動畫

#### 使用 GSAP 實現滾動動畫

```vue
<template>
  <div ref="animatedElement" class="animated-box">滾動觸發動畫</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animatedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (animatedElement.value) {
    gsap.from(animatedElement.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: animatedElement.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }
})
</script>
```

---

## 互動效果範例

### 滑鼠追蹤效果

```vue
<template>
  <div ref="container" class="cursor-tracker" @mousemove="handleMouseMove">
    <div
      ref="cursor"
      class="custom-cursor"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref<HTMLElement | null>(null)
const cursor = ref<HTMLElement | null>(null)
const cursorX = ref(0)
const cursorY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

onMounted(() => {
  if (container.value) {
    container.value.style.cursor = 'none'
  }
})
</script>

<style scoped>
.cursor-tracker {
  position: relative;
  width: 100%;
  height: 100vh;
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 9999;
}
</style>
```

---

## 視覺效果範例

### 玻璃態效果（Glassmorphism）

```vue
<template>
  <div class="glass-card">
    <h2>玻璃態卡片</h2>
    <p>這是一個具有玻璃態效果的卡片</p>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
</style>
```

---

## 效能優化範例

### 圖片懶加載

```vue
<template>
  <NuxtImg
    :src="imageSrc"
    :alt="imageAlt"
    loading="lazy"
    format="webp"
    quality="80"
    :width="800"
    :height="600"
  />
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  imageAlt: string
}>()
</script>
```

### 滾動觸發載入

```vue
<template>
  <div ref="lazyElement" class="lazy-content">
    <div v-if="isVisible">
      <!-- 延遲載入的內容 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const lazyElement = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

onMounted(() => {
  if (lazyElement.value) {
    observer.observe(lazyElement.value)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
```

---

## 完整組件範例

### 動畫卡片組件

```vue
<template>
  <div
    ref="card"
    class="animated-card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps<{
  title: string
  description: string
}>()

const card = ref<HTMLElement | null>(null)

const handleMouseEnter = () => {
  if (card.value) {
    gsap.to(card.value, {
      scale: 1.05,
      y: -10,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
}

const handleMouseLeave = () => {
  if (card.value) {
    gsap.to(card.value, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
}
</script>

<style scoped>
.animated-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.animated-card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-content h3 {
  margin-bottom: 8px;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-content p {
  color: #666;
  line-height: 1.6;
}
</style>
```

---

## 📝 使用說明

1. **安裝依賴**：根據範例需求安裝對應的套件

   ```bash
   npm install gsap
   ```

2. **引入組件**：將範例程式碼複製到你的專案中

3. **自訂樣式**：根據專案需求調整樣式與參數

4. **效能優化**：注意動畫效能，避免過度使用

---

**最後更新**：2025-11-17
