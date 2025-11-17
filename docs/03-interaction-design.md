# 互動設計

> 收集並整理優秀網頁設計案例中的互動設計技巧與實現方法

## 📑 目錄

- [滑鼠追蹤效果](#滑鼠追蹤效果)
- [滾動觸發互動](#滾動觸發互動)
- [懸停效果](#懸停效果)
- [頁面轉場](#頁面轉場)
- [微互動](#微互動)
- [手勢支援](#手勢支援)
- [鍵盤導航](#鍵盤導航)

---

## 滑鼠追蹤效果

### 技術說明

根據滑鼠位置觸發的互動效果，如游標跟隨、元素反應等。

### 自訂游標

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 使用自訂游標（cursor.svg）增強互動反饋，游標會根據互動元素改變樣式。

**技術特點：**

- 使用 SVG 自訂游標
- 游標樣式根據互動元素動態改變
- 增強互動反饋與視覺吸引力

### 3D 元素滑鼠追蹤

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 使用 Three.js / WebGL 實現 3D 元素的滑鼠追蹤效果，3D 星星圖示會跟隨滑鼠移動。

**技術特點：**

- 使用 Three.js / WebGL 載入 3D 模型
- 3D 元素跟隨滑鼠位置
- 物理引擎互動（stickerPhysics）
- 增強沉浸感與互動性

### 實現方法

#### 自訂游標實現

```vue
<template>
  <div class="cursor-container">
    <div class="custom-cursor" ref="cursor">
      <img src="/cursor.svg" alt="cursor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (cursor.value) {
    cursor.value.style.left = `${e.clientX}px`
    cursor.value.style.top = `${e.clientY}px`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
}
</style>
```

### 程式碼範例

```javascript
// 3D 元素滑鼠追蹤
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true })

// 載入 3D 模型
const loader = new THREE.GLTFLoader()
loader.load('/models/star.gltf', (gltf) => {
  const star = gltf.scene
  scene.add(star)

  // 滑鼠追蹤
  document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1

    star.rotation.x = mouseY * 0.5
    star.rotation.y = mouseX * 0.5
  })
})
```

### 參考連結

- [MDN - MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [Cursor Effects Examples](https://codepen.io/tag/cursor-effect)
- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

### 適用場景

- 增加互動趣味性
- 引導使用者注意力
- 創意展示
- 3D 互動體驗

---

## 滾動觸發互動

### 技術說明

基於滾動位置觸發的互動效果。

### Marquee Ticker（滾動展示）

**案例：Duties (duties.xyz)**

Duties 使用 Marquee Ticker 實現客戶標誌的無限滾動展示，增強視覺吸引力與信任度。

**技術特點：**

- 無限滾動的客戶標誌展示
- 平滑的滾動動畫
- 增強品牌信任度

### Rolldown 滾動動畫

**案例：Duties (duties.xyz)**

Duties 使用 Rolldown 庫實現滾動觸發動畫，項目卡片在滾動時會有動態效果。

**技術特點：**

- 使用 Rolldown 庫實現滾動動畫
- 項目卡片滾動觸發效果
- 平滑的頁面過渡

### 實現方法

#### Marquee Ticker 實現

```vue
<template>
  <div class="marquee-container">
    <div class="marquee-track" ref="track">
      <div class="marquee-content" v-for="(item, index) in items" :key="index">
        <img :src="item.logo" :alt="item.name" />
      </div>
      <!-- 重複內容以實現無限滾動 -->
      <div class="marquee-content" v-for="(item, index) in items" :key="`duplicate-${index}`">
        <img :src="item.logo" :alt="item.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const track = ref<HTMLElement | null>(null)

onMounted(() => {
  if (track.value) {
    // 使用 CSS 動畫或 JavaScript 實現滾動
    track.value.style.animation = 'marquee 20s linear infinite'
  }
})
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
```

### 程式碼範例

```javascript
// Rolldown 滾動動畫
import { Rolldown } from 'rolldown'

const rolldown = new Rolldown({
  targets: '.project-card',
  from: { opacity: 0, y: 50 },
  to: { opacity: 1, y: 0 },
  duration: 1000,
  easing: 'easeOut',
})

// 滾動觸發
window.addEventListener('scroll', () => {
  rolldown.update()
})
```

### 參考連結

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Scroll-triggered Interactions](https://css-tricks.com/scroll-triggered-animations/)
- [Rolldown Library](https://github.com/rolldown/rolldown)

### 適用場景

- 滾動視差
- 元素進入動畫
- 進度指示
- 客戶標誌展示
- 項目卡片動畫

---

## 懸停效果

### 技術說明

滑鼠懸停時觸發的視覺反饋效果。

### Lottie 動畫懸停效果

**案例：Kons (kons.fyi)**

Kons 網站使用 Lottie 動畫來實現按鈕懸停效果，每個導航按鈕都有對應的 Lottie 動畫。

**技術特點：**

- 使用 Lottie Interactivity 實現互動
- 滑鼠懸停時觸發動畫播放
- 提供流暢的視覺反饋

### 實現方法

#### CSS 懸停效果

```css
.button {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

#### Lottie 懸停動畫

```vue
<template>
  <button class="lottie-button" @mouseenter="playAnimation">
    <dotlottie-player
      ref="lottiePlayer"
      src="/animations/button-hover.lottie"
      :autoplay="false"
      :loop="false"
    />
    <span>Hover Me</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '@dotlottie/player-component'

const lottiePlayer = ref()

const playAnimation = () => {
  if (lottiePlayer.value) {
    lottiePlayer.value.play()
  }
}
</script>
```

### 程式碼範例

```vue
<template>
  <div class="hover-card" @mouseenter="handleHover" @mouseleave="handleLeave">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)

const handleHover = () => {
  isHovered.value = true
}

const handleLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
.hover-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
```

### 參考連結

- [MDN - :hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [CSS Hover Effects](https://css-tricks.com/hover-effects/)
- [Lottie Interactivity](https://lottiefiles.com/blog/working-with-apis/lottie-interactivity-documentation)

### 適用場景

- 按鈕互動
- 卡片效果
- 導航反饋
- 品牌動畫觸發

---

## 頁面轉場

### 技術說明

頁面切換時的轉場效果與互動。

### 實現方法

待補充...

### 程式碼範例

```vue
<!-- 待補充範例 -->
```

### 參考連結

- [Vue Transition](https://vuejs.org/guide/built-ins/transition.html)
- [Nuxt View Transitions](https://nuxt.com/docs/getting-started/transitions)

### 適用場景

- 單頁應用路由
- 內容切換
- 載入狀態

---

## 微互動

### 技術說明

細微的互動反饋，提升使用者體驗。

### 音效互動

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 使用音效檔案提供互動反饋，包括懸停音效（hover.mp3）、點擊音效（click.mp3）和返回音效（back.mp3）。

**技術特點：**

- 使用音效檔案增強互動反饋
- 懸停、點擊、返回等不同動作對應不同音效
- 增強沉浸感與互動體驗

### 實時資訊顯示

**案例：Duties (duties.xyz), KidSuper World (kidsuper.world), Max Yinger (yinger.dev)**

多個網站都使用了實時資訊顯示來增強真實感與互動性。

**技術特點：**

- 實時時間更新（Duties, KidSuper World, Max Yinger）
- 狀態動態顯示（Duties）
- 頁面尺寸顯示（Max Yinger）
- FPS 顯示（Max Yinger）
- 增強真實感與互動性

### 追蹤器顯示

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 使用追蹤器顯示點擊次數（"127"），增強互動感與遊戲化體驗。

**技術特點：**

- 顯示使用者互動次數
- 增強互動感與遊戲化體驗
- 鼓勵使用者探索

### 實現方法

#### 音效互動實現

```vue
<template>
  <button @mouseenter="playHoverSound" @click="playClickSound" class="interactive-button">
    Click Me
  </button>
</template>

<script setup lang="ts">
const hoverSound = new Audio('/sounds/hover.mp3')
const clickSound = new Audio('/sounds/click.mp3')

const playHoverSound = () => {
  hoverSound.currentTime = 0
  hoverSound.play().catch(() => {
    // 處理音效播放錯誤
  })
}

const playClickSound = () => {
  clickSound.currentTime = 0
  clickSound.play().catch(() => {
    // 處理音效播放錯誤
  })
}
</script>
```

#### 實時資訊顯示實現

```vue
<template>
  <div class="status-display">
    <div class="status">
      <span>currently:</span>
      <span :class="{ 'on-duty': isOnDuty, 'off-duty': !isOnDuty }">
        {{ isOnDuty ? 'ON-DUTY' : 'OFF-DUTY' }}
      </span>
    </div>
    <div class="time">
      <span>{{ currentTime }}</span>
      <span>, {{ location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOnDuty = ref(false)
const currentTime = ref('')
const location = ref('Oslo')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

onMounted(() => {
  updateTime()
  const interval = setInterval(updateTime, 1000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>
```

#### 追蹤器顯示實現

```vue
<template>
  <div class="tracker">
    <img src="/tracker.svg" alt="tracker" />
    <span class="count">{{ clickCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
  // 可選：儲存到 localStorage 或後端
  localStorage.setItem('clickCount', clickCount.value.toString())
}

onMounted(() => {
  // 從 localStorage 讀取
  const saved = localStorage.getItem('clickCount')
  if (saved) {
    clickCount.value = parseInt(saved, 10)
  }

  document.addEventListener('click', handleClick)

  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
})
</script>
```

### 程式碼範例

```javascript
// 音效互動
const sounds = {
  hover: new Audio('/sounds/hover.mp3'),
  click: new Audio('/sounds/click.mp3'),
  back: new Audio('/sounds/back.mp3'),
}

document.querySelectorAll('.interactive-element').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    sounds.hover.currentTime = 0
    sounds.hover.play()
  })

  element.addEventListener('click', () => {
    sounds.click.currentTime = 0
    sounds.click.play()
  })
})
```

### 參考連結

- [Micro-interactions Guide](https://uxdesign.cc/micro-interactions-the-secret-to-great-ux-design-4c3dc3b5b5e0)
- [Micro-interactions Examples](https://dribbble.com/tags/microinteraction)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

### 適用場景

- 表單驗證
- 按鈕反饋
- 載入狀態
- 互動音效反饋
- 實時資訊顯示
- 遊戲化體驗
- 按鈕反饋
- 狀態提示

---

## 全頁面點擊互動

### 技術說明

頁面任意位置點擊都能觸發互動效果，增強探索性與互動性。

### 全頁面點擊互動

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 實現了全頁面點擊互動，頁面任意位置點擊都會觸發內容變化，並顯示 "Click Anywhere" 提示。

**技術特點：**

- 頁面任意位置點擊觸發互動
- "Click Anywhere" 提示引導使用者
- 增強探索性與互動性
- 動態內容展示

### 實現方法

```vue
<template>
  <div class="click-anywhere-container" @click="handleClick">
    <div class="hint" v-if="showHint">Click Anywhere</div>
    <div class="content" :key="currentIndex">
      {{ content[currentIndex] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showHint = ref(true)
const currentIndex = ref(0)
const content = ref([
  'Content 1',
  'Content 2',
  'Content 3',
  // ... 更多內容
])

const handleClick = (e: MouseEvent) => {
  // 隱藏提示
  showHint.value = false

  // 切換內容
  currentIndex.value = (currentIndex.value + 1) % content.value.length

  // 可選：播放音效
  playClickSound()
}

const playClickSound = () => {
  const sound = new Audio('/sounds/click.mp3')
  sound.currentTime = 0
  sound.play().catch(() => {
    // 處理音效播放錯誤
  })
}

onMounted(() => {
  // 3 秒後隱藏提示
  setTimeout(() => {
    showHint.value = false
  }, 3000)
})
</script>
```

### 參考連結

- [MDN - Click Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- [Event Handling in Vue](https://vuejs.org/guide/essentials/event-handling.html)

### 適用場景

- 創意展示網站
- 作品集網站
- 探索式互動
- 遊戲化體驗

---

## Drag & Drop 互動

### 技術說明

拖放功能實現的互動效果，用於檔案上傳、內容排序等場景。

### Drag & Drop 檔案上傳

**案例：Shuttle (shuttle.zip)**

Shuttle 實現了流暢的 Drag & Drop 檔案上傳功能，具有清晰的視覺反饋和檔案類型圖示展示。

**技術特點：**

- 拖放區域高亮效果
- 檔案類型圖示展示
- 拖放視覺反饋
- 簡單直觀的使用體驗

### 實現方法

```vue
<template>
  <div
    class="drop-zone"
    :class="{ 'drag-over': isDragOver }"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <div class="drop-zone-content">
      <div class="file-icons">
        <img src="/icons/music.svg" alt="audio" />
        <img src="/icons/video.svg" alt="video" />
        <img src="/icons/document.svg" alt="document" />
      </div>
      <p class="instruction">Drag & Drop</p>
      <p class="subtitle">2GB for Free</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDragOver = ref(false)

const handleDragOver = (e: DragEvent) => {
  isDragOver.value = true
  e.dataTransfer!.dropEffect = 'copy'
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const handleDrop = (e: DragEvent) => {
  isDragOver.value = false

  const files = Array.from(e.dataTransfer?.files || [])

  // 處理檔案上傳
  files.forEach((file) => {
    uploadFile(file)
  })
}

const uploadFile = async (file: File) => {
  // 實現檔案上傳邏輯
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    // 處理上傳結果
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.drop-zone.drag-over {
  border-color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}
</style>
```

### 程式碼範例

```javascript
// Drag & Drop 基本實現
const dropZone = document.querySelector('.drop-zone')

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault()
  dropZone.classList.add('drag-over')
})

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over')
})

dropZone.addEventListener('drop', (e) => {
  e.preventDefault()
  dropZone.classList.remove('drag-over')

  const files = Array.from(e.dataTransfer.files)
  files.forEach((file) => {
    console.log('Dropped file:', file.name)
    // 處理檔案
  })
})
```

### 參考連結

- [MDN - Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [File API](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [Drag and Drop Examples](https://codepen.io/tag/drag-drop)

### 適用場景

- 檔案上傳
- 內容排序
- 圖片上傳
- 文件管理
- 開發工具

---

## 手勢支援

### 技術說明

支援觸控手勢的互動設計。

### 實現方法

待補充...

### 程式碼範例

```javascript
// 待補充範例
```

### 參考連結

- [MDN - Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Hammer.js](http://hammerjs.github.io/)

### 適用場景

- 行動裝置
- 觸控互動
- 手勢操作

---

## 鍵盤導航

### 技術說明

支援鍵盤操作的導航與互動。

### 實現方法

待補充...

### 程式碼範例

```javascript
// 待補充範例
```

### 參考連結

- [MDN - KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [Web Accessibility - Keyboard Navigation](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)

### 適用場景

- 無障礙設計
- 快捷操作
- 鍵盤導航

---

## 📝 案例引用

待補充各案例網站的具體互動設計分析...

---

**最後更新**：2025-11-17
