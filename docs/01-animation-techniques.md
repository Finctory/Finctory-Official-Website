# 動畫技術

> 收集並整理優秀網頁設計案例中的動畫特效技術與實現方法

## 📑 目錄

- [CSS 動畫](#css-動畫)
- [JavaScript 動畫庫](#javascript-動畫庫)
- [WebGL / Three.js](#webgl--threejs)
- [Canvas API](#canvas-api)
- [SVG 動畫](#svg-動畫)
- [頁面轉場動畫](#頁面轉場動畫)
- [滾動觸發動畫](#滾動觸發動畫)

---

## CSS 動畫

### 技術說明

使用 CSS 實現的動畫效果，包括 `@keyframes`、`transition`、`transform` 等。CSS 動畫效能優異，適合簡單的過渡效果和不需要複雜邏輯的動畫。

### 實現方法

#### 使用 @keyframes 定義動畫

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### 使用 transition 實現過渡

```css
.element {
  transition: all 0.3s ease;
}

.element:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="animated-box" :class="{ 'is-visible': isVisible }">
    <h2>CSS 動畫範例</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.animated-box {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animated-box.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 使用 @keyframes */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animated-box h2 {
  animation: slideIn 0.8s ease-out;
}
</style>
```

#### Tailwind CSS 範例

```vue
<template>
  <div class="transition-all duration-300 hover:scale-110 hover:opacity-80">
    <h2 class="animate-pulse">動畫文字</h2>
  </div>
</template>
```

### 參考連結

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS-Tricks - A Complete Guide to CSS Animations](https://css-tricks.com/a-complete-guide-to-css-animations/)
- [Tailwind CSS Animations](https://tailwindcss.com/docs/animation)

### 適用場景

- 簡單的過渡效果（按鈕懸停、卡片展開）
- 效能要求高的動畫（首屏載入動畫）
- 不需要複雜邏輯的動畫（淡入淡出、滑動效果）
- 微互動效果（按鈕反饋、載入狀態）

---

## JavaScript 動畫庫

### 技術說明

使用 JavaScript 動畫庫實現的動畫效果，如 GSAP、Framer Motion、Lottie 等。

### GSAP（GreenSock Animation Platform）

**案例：Superpower (superpower.com)**

Superpower 網站全面使用了 GSAP 3.13.0 及其多個插件來實現複雜的動畫效果。

**技術特點：**

- 強大的動畫控制能力
- 豐富的插件生態系統
- 優異的效能表現
- 支援複雜的動畫序列

**使用的插件：**

- ScrollTrigger：滾動觸發動畫
- Flip：元素翻轉動畫
- CustomEase：自訂緩動函數
- EasePack：緩動函數包
- Observer：觀察者模式
- ScrollToPlugin：滾動到指定位置
- TextPlugin：文字動畫
- SplitText：文字分割動畫

### 實現方法

#### 安裝 GSAP

```bash
npm install gsap
```

#### 基本使用

```typescript
import { gsap } from 'gsap'

// 基本動畫
gsap.to('.element', {
  x: 100,
  duration: 1,
  ease: 'power2.out',
})
```

#### 使用 ScrollTrigger

```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.from('.element', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
})
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div>
    <div ref="animatedElement" class="animated-box">
      <h2>GSAP 動畫範例</h2>
    </div>
    <div ref="textElement" class="text-animation">
      <p>這是一段會動的文字</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const animatedElement = ref<HTMLElement | null>(null)
const textElement = ref<HTMLElement | null>(null)

onMounted(() => {
  // 基本動畫
  if (animatedElement.value) {
    gsap.from(animatedElement.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    })
  }

  // 滾動觸發動畫
  if (textElement.value) {
    gsap.to(textElement.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textElement.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.animated-box {
  opacity: 0;
  transform: translateY(50px);
}

.text-animation {
  opacity: 0;
  transform: translateY(30px);
}
</style>
```

### 參考連結

- [GSAP 官方文檔](https://greensock.com/docs/)
- [GSAP ScrollTrigger 文檔](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP 範例集合](https://greensock.com/showcase/)
- [GSAP 與 Vue 整合指南](https://greensock.com/docs/v3/Installation)

### Lottie 動畫

**案例：Kons (kons.fyi), Superpower (superpower.com), SuperHi (superhi.com)**

Kons、Superpower 和 SuperHi 都使用了 Lottie 動畫來實現互動式動畫效果。

**技術特點：**

- 使用 DotLottie 格式（.lottie），比傳統 JSON 格式更小
- 支援互動式動畫（滑鼠懸停、點擊觸發）
- 輕量級，效能優異
- 可與 Vue/React 等框架整合
- 適合角色動畫與表情動畫（SuperHi 的 Wilson 角色）

### 實現方法

#### 安裝 DotLottie Player

```bash
npm install @dotlottie/player-component
```

#### 基本使用

```vue
<template>
  <dotlottie-player
    src="/animations/button.lottie"
    autoplay
    loop
    style="width: 200px; height: 200px"
  />
</template>

<script setup lang="ts">
import '@dotlottie/player-component'
</script>
```

#### 互動式動畫

```vue
<template>
  <button @mouseenter="playAnimation" @mouseleave="stopAnimation">
    <dotlottie-player
      ref="lottiePlayer"
      src="/animations/button-hover.lottie"
      :autoplay="false"
      :loop="false"
      style="width: 100px; height: 100px"
    />
    <span>Hover Me</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '@dotlottie/player-component'

const lottiePlayer = ref<any>(null)

const playAnimation = () => {
  if (lottiePlayer.value) {
    lottiePlayer.value.play()
  }
}

const stopAnimation = () => {
  if (lottiePlayer.value) {
    lottiePlayer.value.stop()
  }
}
</script>
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="lottie-container">
    <dotlottie-player
      ref="player"
      :src="animationSrc"
      :autoplay="autoplay"
      :loop="loop"
      :speed="speed"
      :direction="direction"
      @ready="onReady"
      @complete="onComplete"
      class="lottie-player"
    />
    <button @click="togglePlay">{{ isPlaying ? '暫停' : '播放' }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '@dotlottie/player-component'

interface Props {
  animationSrc: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
  direction?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: true,
  speed: 1,
  direction: 1,
})

const player = ref<any>(null)
const isPlaying = ref(props.autoplay)

const togglePlay = () => {
  if (player.value) {
    if (isPlaying.value) {
      player.value.pause()
    } else {
      player.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const onReady = () => {
  console.log('Lottie animation ready')
}

const onComplete = () => {
  console.log('Lottie animation completed')
}
</script>

<style scoped>
.lottie-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lottie-player {
  width: 200px;
  height: 200px;
}
</style>
```

### 參考連結

- [DotLottie Player 官方文檔](https://dotlottie.github.io/player-component/)
- [LottieFiles 官方網站](https://lottiefiles.com/)
- [Lottie 動畫庫](https://airbnb.io/lottie/)
- [DotLottie 格式說明](https://dotlottie.github.io/)

### 圖片序列動畫

**案例：Limitless (limitless.ai)**

Limitless 使用多張 WebP 圖片組成動畫序列，實現流暢的產品展示效果。

**技術特點：**

- 使用多張圖片組成動畫序列
- WebP 格式優化檔案大小
- 實現流暢的產品展示動畫
- 適合產品展示與硬體展示

### 文字分割動畫

**案例：Daniel Sun (danielsun.space), SuperHi (superhi.com)**

Daniel Sun 和 SuperHi 都使用了文字分割動畫效果，每個字母或單詞都有獨立的動畫。

**技術特點：**

- 文字分割成單個字母或單詞
- 每個元素獨立的動畫效果
- 增強視覺吸引力與互動性
- 適合標題與重要文字展示

### 實現方法

#### Lottie 動畫實現

```vue
<template>
  <div class="lottie-container">
    <dotlottie-player
      src="/path/to/animation.lottie"
      background="transparent"
      speed="1"
      loop
      autoplay
      :style="{ width: '100px', height: '100px' }"
    />
  </div>
</template>

<script setup lang="ts">
import '@dotlottie/player-component'
</script>
```

#### 使用 Lottie Interactivity

```javascript
import Lottie from 'lottie-web'
import lottieInteractivity from 'lottie-interactivity'

const animation = Lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/path/to/animation.json',
})

lottieInteractivity.create({
  player: '#lottie-container',
  mode: 'cursor',
  actions: [
    {
      type: 'hover',
      forceFlag: false,
    },
  ],
})
```

### 程式碼範例

```vue
<template>
  <button class="animated-button" @mouseenter="handleHover">
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

const handleHover = () => {
  if (lottiePlayer.value) {
    lottiePlayer.value.play()
  }
}
</script>
```

### 參考連結

- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lottie Documentation](https://airbnb.io/lottie/)
- [DotLottie Player](https://dotlottie.github.io/player-component/)
- [Lottie Interactivity](https://lottiefiles.com/blog/working-with-apis/lottie-interactivity-documentation)

### 適用場景

- 複雜的動畫序列
- 需要精確控制的動畫
- 互動式動畫
- 品牌動畫與 Logo 動畫
- 微互動效果（按鈕、圖示）

---

## WebGL / Three.js

### 技術說明

使用 WebGL 或 Three.js 實現的 3D 動畫效果。Three.js 是一個強大的 3D 圖形庫，能夠創建複雜的 3D 場景、載入 3D 模型，並實現流暢的互動效果。

### 實現方法

#### 安裝 Three.js

```bash
npm install three
```

#### 基本 Three.js 場景設置

```typescript
import * as THREE from 'three'

// 創建場景
const scene = new THREE.Scene()

// 創建相機
const camera = new THREE.PerspectiveCamera(
  75, // 視角
  window.innerWidth / window.innerHeight, // 寬高比
  0.1, // 近平面
  1000, // 遠平面
)
camera.position.z = 5

// 創建渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: canvasElement,
  alpha: true, // 透明背景
  antialias: true, // 抗鋸齒
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// 添加光源
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)
```

#### 載入 3D 模型（GLTF）

```typescript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load(
  '/models/model.gltf',
  (gltf) => {
    const model = gltf.scene
    scene.add(model)
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error)
  },
)
```

### 程式碼範例

#### Vue 3 組件範例（流星效果）

```vue
<template>
  <canvas ref="canvas" class="three-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let meteors: THREE.Mesh[] = []
let animationId: number | null = null

const METEOR_COUNT = 50

function initThree() {
  if (!canvas.value) return

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)

  // 創建流星
  createMeteors()
}

function createMeteors() {
  const geometry = new THREE.SphereGeometry(0.02, 8, 8)
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.6,
    shininess: 100,
  })

  for (let i = 0; i < METEOR_COUNT; i++) {
    const meteor = new THREE.Mesh(geometry, material)
    resetMeteor(meteor)
    meteors.push(meteor)
    scene.add(meteor)
  }
}

function resetMeteor(meteor: THREE.Mesh) {
  meteor.position.x = (Math.random() - 0.5) * 20
  meteor.position.y = 10 + Math.random() * 10
  meteor.position.z = (Math.random() - 0.5) * 10
  ;(meteor as any).velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    -0.05 - Math.random() * 0.05,
    0,
  )
}

function animate() {
  animationId = requestAnimationFrame(animate)

  // 更新流星位置
  meteors.forEach((meteor) => {
    const velocity = (meteor as any).velocity
    meteor.position.add(velocity)

    // 重置超出範圍的流星
    if (meteor.position.y < -10) {
      resetMeteor(meteor)
    }
  })

  renderer.render(scene, camera)
}

function onWindowResize() {
  if (!camera || !renderer) return

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initThree()
  animate()
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', onWindowResize)

  // 清理資源
  meteors.forEach((meteor) => {
    scene.remove(meteor)
    meteor.geometry.dispose()
    ;(meteor.material as THREE.Material).dispose()
  })
  renderer.dispose()
})
</script>

<style scoped>
.three-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
```

#### 3D 模型載入範例

```vue
<template>
  <div>
    <canvas ref="canvas"></canvas>
    <div v-if="loading" class="loading">載入中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let model: THREE.Group

function init() {
  if (!canvas.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 載入模型
  const loader = new GLTFLoader()
  loader.load(
    '/models/star.gltf',
    (gltf) => {
      model = gltf.scene
      scene.add(model)
      loading.value = false
      animate()
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error)
      loading.value = false
    },
  )

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)
}

function animate() {
  requestAnimationFrame(animate)
  if (model) {
    model.rotation.y += 0.01
  }
  renderer.render(scene, camera)
}

onMounted(() => {
  init()
})
</script>
```

### 參考連結

- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Three.js Examples](https://threejs.org/examples/)
- [GLTF Format](https://www.khronos.org/gltf/)

### 適用場景

- 3D 視覺效果（產品展示、品牌視覺）
- 複雜的圖形渲染（遊戲、互動體驗）
- 需要高效能圖形處理的場景（大型 3D 場景）
- 3D 模型展示（產品、角色、環境）
- 沉浸式體驗（VR/AR 預覽）

---

## Canvas API

### 技術說明

使用 Canvas API 實現的 2D 動畫效果。Canvas 提供了強大的 2D 繪圖能力，適合實現粒子效果、自訂動畫和複雜的圖形效果。

### 實現方法

#### 基本 Canvas 設置

```typescript
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

// 設置畫布大小
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 動畫循環
function animate() {
  requestAnimationFrame(animate)

  // 清除畫布
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 繪製內容
  // ...

  ctx.fill()
}
animate()
```

#### 粒子系統

```typescript
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

const particles: Particle[] = []

function createParticle(x: number, y: number) {
  particles.push({
    x,
    y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    radius: Math.random() * 3 + 1,
    alpha: 1,
  })
}
```

### 程式碼範例

#### Vue 3 組件範例（滑鼠軌跡效果）

```vue
<template>
  <canvas ref="cursorCanvas" class="cursor-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorCanvas = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null

interface TrailPoint {
  x: number
  y: number
  alpha: number
}

const cursorTrail: TrailPoint[] = []
const TRAIL_LENGTH = 20

function updateCanvasSize() {
  if (!cursorCanvas.value) return
  cursorCanvas.value.width = window.innerWidth
  cursorCanvas.value.height = window.innerHeight
}

function onMouseMove(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY

  cursorTrail.push({ x, y, alpha: 1 })

  if (cursorTrail.length > TRAIL_LENGTH) {
    cursorTrail.shift()
  }
}

function animate() {
  if (!ctx || !cursorCanvas.value) return

  // 清除畫布（使用半透明以產生拖尾效果）
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
  ctx.fillRect(0, 0, cursorCanvas.value.width, cursorCanvas.value.height)

  // 繪製軌跡
  cursorTrail.forEach((point, index) => {
    const alpha = point.alpha * (index / cursorTrail.length)
    ctx.beginPath()
    ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`
    ctx.fill()

    // 逐漸降低透明度
    point.alpha *= 0.95
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (!cursorCanvas.value) return

  updateCanvasSize()
  ctx = cursorCanvas.value.getContext('2d')

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', updateCanvasSize)
  window.addEventListener('scroll', () => {
    cursorTrail.length = 0
  })

  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', updateCanvasSize)
})
</script>

<style scoped>
.cursor-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}
</style>
```

#### 粒子系統範例

```vue
<template>
  <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

const particles: Particle[] = []
const PARTICLE_COUNT = 100

function initParticles() {
  if (!canvas.value) return

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    })
  }
}

function updateCanvasSize() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

function animate() {
  if (!ctx || !canvas.value) return

  // 清除畫布
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // 更新並繪製粒子
  particles.forEach((particle) => {
    // 更新位置
    particle.x += particle.vx
    particle.y += particle.vy

    // 邊界反彈
    if (particle.x < 0 || particle.x > canvas.value!.width) {
      particle.vx *= -1
    }
    if (particle.y < 0 || particle.y > canvas.value!.height) {
      particle.vy *= -1
    }

    // 繪製粒子
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx.fillStyle = particle.color
    ctx.fill()
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (!canvas.value) return

  updateCanvasSize()
  ctx = canvas.value.getContext('2d')
  initParticles()

  window.addEventListener('resize', updateCanvasSize)
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', updateCanvasSize)
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
```

### 參考連結

- [MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [HTML5 Canvas Tutorial](https://www.html5canvastutorials.com/)
- [Canvas Performance](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [RequestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

### 適用場景

- 2D 圖形動畫（自訂動畫效果）
- 粒子效果（背景效果、視覺特效）
- 自訂繪圖動畫（Logo 動畫、圖示動畫）
- 滑鼠互動效果（軌跡、跟隨效果）
- 遊戲開發（2D 遊戲、小遊戲）

---

## SVG 動畫

### 技術說明

使用 SVG 實現的動畫效果，包括 SMIL 動畫、CSS 動畫、JavaScript 動畫。SVG 動畫適合向量圖形、Logo 和圖示，可以實現流暢的縮放和變形效果。

### 實現方法

#### CSS 動畫 SVG

```css
.svg-icon {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### SMIL 動畫

```html
<svg>
  <circle cx="50" cy="50" r="20">
    <animate attributeName="r" from="20" to="40" dur="2s" repeatCount="indefinite" />
  </circle>
</svg>
```

#### JavaScript 控制 SVG 動畫

```typescript
const svgElement = document.querySelector('svg')
const path = svgElement.querySelector('path')

// 使用 GSAP 動畫 SVG
gsap.to(path, {
  strokeDashoffset: 0,
  duration: 2,
  ease: 'power2.out',
})
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div class="svg-animation-demo">
    <!-- CSS 動畫 SVG -->
    <svg class="animated-icon" viewBox="0 0 24 24" width="48" height="48">
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <!-- SMIL 動畫 SVG -->
    <svg viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="20" fill="#667eea">
        <animate
          attributeName="r"
          :values="isAnimating ? '20;40;20' : '20'"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="isAnimating ? '1;0.5;1' : '1'"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    <!-- 路徑動畫 -->
    <svg viewBox="0 0 200 200" width="200" height="200">
      <path
        ref="svgPath"
        d="M 10 100 Q 100 10 190 100"
        fill="none"
        stroke="#667eea"
        stroke-width="3"
        :style="{ strokeDasharray: pathLength, strokeDashoffset: pathOffset }"
      />
    </svg>

    <button @click="toggleAnimation">切換動畫</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const svgPath = ref<SVGPathElement | null>(null)
const isAnimating = ref(true)
const pathLength = ref(0)
const pathOffset = ref(0)

onMounted(() => {
  if (svgPath.value) {
    // 計算路徑長度
    pathLength.value = svgPath.value.getTotalLength()
    pathOffset.value = pathLength.value

    // 動畫路徑
    gsap.to(
      { value: 0 },
      {
        value: pathLength.value,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          pathOffset.value = pathLength.value - this.targets()[0].value
        },
      },
    )
  }
})

const toggleAnimation = () => {
  isAnimating.value = !isAnimating.value
}
</script>

<style scoped>
.svg-animation-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.animated-icon {
  animation: rotate 3s linear infinite;
  color: #667eea;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
```

### 參考連結

- [MDN - SVG Animation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_animation)
- [SVG Animations Guide](https://css-tricks.com/guide-svg-animations-smil/)
- [GSAP SVG Animation](https://greensock.com/docs/v3/Plugins/MotionPathPlugin)
- [SVG Path Animation](https://css-tricks.com/svg-line-animation-works/)

### 適用場景

- 向量圖形動畫（Logo、圖示動畫）
- Logo 動畫（品牌展示、載入動畫）
- 圖示動畫（互動反饋、狀態指示）
- 路徑動畫（進度指示、繪製效果）

---

## 頁面轉場動畫

### 技術說明

頁面切換時的轉場動畫效果。Nuxt 3 支援 View Transitions API，可以實現流暢的頁面轉場效果。

### 實現方法

#### Nuxt 3 View Transitions

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
})
```

#### Vue Transition 組件

```vue
<Transition name="fade" mode="out-in">
  <component :is="currentComponent" />
</Transition>
```

#### CSS View Transitions

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

### 程式碼範例

#### Vue 3 組件範例

```vue
<template>
  <div>
    <!-- 使用 Vue Transition -->
    <Transition name="page" mode="out-in">
      <div :key="currentPage" class="page-content">
        <h1>{{ currentPage }}</h1>
      </div>
    </Transition>

    <button @click="nextPage">下一頁</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)

const nextPage = () => {
  currentPage.value = currentPage.value === 3 ? 1 : currentPage.value + 1
}
</script>

<style scoped>
/* 淡入淡出 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 滑動效果 */
.page-content {
  padding: 2rem;
}
</style>
```

#### Nuxt 3 頁面轉場

```vue
<!-- pages/index.vue -->
<template>
  <div class="page">
    <h1>首頁</h1>
  </div>
</template>

<style>
/* 全局轉場樣式 */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

::view-transition-old(root) {
  animation-name: slide-out;
}

::view-transition-new(root) {
  animation-name: slide-in;
}
</style>
```

#### 完整轉場組件

```vue
<template>
  <Transition name="fade-slide" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.3s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
```

### 參考連結

- [Vue Transition](https://vuejs.org/guide/built-ins/transition.html)
- [Nuxt View Transitions](https://nuxt.com/docs/getting-started/transitions)
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [CSS View Transitions](https://web.dev/view-transitions/)

### 適用場景

- 單頁應用路由轉場（SPA 頁面切換）
- 頁面載入動畫（首屏載入效果）
- 內容切換動畫（標籤切換、內容輪播）
- 模態框動畫（彈出、關閉動畫）

---

## 滾動觸發動畫

### 技術說明

基於滾動位置觸發的動畫效果。使用 Intersection Observer API 或 GSAP ScrollTrigger 可以實現元素進入視窗時的動畫效果。

### 實現方法

#### Intersection Observer API

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  },
  { threshold: 0.1 },
)

observer.observe(element)
```

#### GSAP ScrollTrigger

```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.from('.element', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
})
```

#### VueUse useIntersect

```typescript
import { useIntersect } from '@vueuse/core'

const target = ref<HTMLElement>()
const isIntersecting = useIntersect(target, {
  threshold: 0.1,
})
```

### 程式碼範例

#### Vue 3 組件範例（Intersection Observer）

```vue
<template>
  <div class="scroll-animation-demo">
    <div
      v-for="(item, index) in items"
      :key="index"
      ref="elements"
      class="scroll-item"
      :class="{ 'is-visible': visibleItems.includes(index) }"
    >
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Item {
  title: string
  description: string
}

const items = ref<Item[]>([
  { title: '項目 1', description: '描述 1' },
  { title: '項目 2', description: '描述 2' },
  { title: '項目 3', description: '描述 3' },
])

const elements = ref<HTMLElement[]>([])
const visibleItems = ref<number[]>([])
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = elements.value.indexOf(entry.target as HTMLElement)
        if (entry.isIntersecting) {
          if (!visibleItems.value.includes(index)) {
            visibleItems.value.push(index)
          }
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.scroll-item {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.scroll-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
```

#### GSAP ScrollTrigger 範例

```vue
<template>
  <div class="gsap-scroll-demo">
    <div ref="animatedSection" class="animated-section">
      <h2>滾動觸發動畫</h2>
      <p>當這個區域進入視窗時會觸發動畫</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animatedSection = ref<HTMLElement | null>(null)

onMounted(() => {
  if (animatedSection.value) {
    gsap.from(animatedSection.value, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: animatedSection.value,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
.animated-section {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}
</style>
```

#### VueUse useIntersect 範例

```vue
<template>
  <div ref="target" class="intersect-demo" :class="{ 'is-visible': isIntersecting }">
    <h2>使用 VueUse useIntersect</h2>
    <p>當元素進入視窗時會顯示</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersect } from '@vueuse/core'

const target = ref<HTMLElement>()
const isIntersecting = useIntersect(target, {
  threshold: 0.1,
})
</script>

<style scoped>
.intersect-demo {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.intersect-demo.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
```

### 參考連結

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Scroll-triggered Animations](https://css-tricks.com/scroll-triggered-animations/)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [VueUse useIntersect](https://vueuse.org/core/useIntersect/)

### 適用場景

- 滾動視差效果（不同元素不同速度）
- 元素進入視窗動畫（淡入、滑入效果）
- 滾動進度指示（進度條、百分比）
- 無限滾動載入（觸發載入更多內容）

---

## 📝 案例引用

待補充各案例網站的具體動畫技術分析...

---

**最後更新**：2025-11-17
