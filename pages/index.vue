<template>
  <div ref="container" class="relative min-h-screen overflow-hidden">
    <!-- 3D Background Canvas -->
    <canvas ref="canvas" class="absolute left-0 top-0 -z-10 h-full w-full"></canvas>
    <canvas
      ref="cursorCanvas"
      class="-z-5 pointer-events-none absolute left-0 top-0 h-full w-full"
    ></canvas>
    <div
      class="relative flex min-h-screen flex-col items-center justify-between p-4 sm:p-8"
      :class="{ 'opacity-0': isLoading }"
      :style="{ transition: 'opacity 1s ease-in-out' }"
    >
      <div
        class="mb-8 mt-16 w-full max-w-4xl transform rounded-lg bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 sm:p-8"
      >
        <h1
          class="perspective-text break-words text-left text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span ref="titleText" class="block transform">{{ title }}</span>
        </h1>
        <p
          class="floating-text mt-4 break-words text-left text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex w-full max-w-4xl flex-col items-center space-y-4">
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          :class="[
            'flex w-full rounded-lg p-4 text-xl text-white shadow-lg transition',
            link.bgClass,
            'transform hover:rotate-1 hover:scale-105 hover:shadow-xl',
          ]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="flex w-full">
            <div class="ml-4 flex items-center sm:ml-8 md:ml-12">
              <NuxtImg 
                :src="link.icon" 
                alt=""
                aria-hidden="true"
                class="mr-3 animate-bounce"
                format="webp"
                quality="80"
                :width="link.name === '發票醫生' ? 18 : 24"
                :height="link.name === '發票醫生' ? 24 : 24"
                fit="cover"
                placeholder
                loading="lazy"
                style="object-fit: contain; background: transparent;"
              />
              <span>{{ link.name }}</span>
            </div>
          </div>
        </a>
      </div>

      <div
        class="mt-8 w-full transform rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105"
      >
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-900">榮譽榜</h2>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="i in 5"
            :key="i"
            class="award-container relative m-2 transform transition-all duration-300 hover:scale-110"
          >
            <NuxtImg
              :src="`/award_${i}.png`"
              :alt="`Award ${i}`"
              class="h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
              format="webp"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const title = ref('斐闊．Finctory')
const description = ref('「財務韌性，科技共行」')
const canvas = ref(null)
const titleText = ref(null)
const container = ref(null)
const isLoading = ref(true)
const cursorCanvas = ref(null)

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/finctory',
    icon: '/facebook.png',
    bgClass: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@Finctory',
    icon: '/youtube.png',
    bgClass: 'bg-red-600 hover:bg-red-700',
  },
  {
    name: 'Email',
    url: 'mailto:finctory@gmail.com',
    icon: '/email.png',
    bgClass: 'bg-orange-600 hover:bg-orange-700',  
  },
  {
    name: '發票醫生',
    url: 'https://invoice-doctor-dev.finctory.com',
    icon: '/thumbnail.png',
    bgClass: 'bg-green-600 hover:bg-green-700',  
  },
]

let scene, camera, renderer
let meteors = []
let cursorCtx
let cursorTrail = []
const TRAIL_LENGTH = 20
const METEOR_COUNT = 50
const OPENING_DURATION = 1000

useSeoMeta({
  title: '斐闊．Finctory - 專業的金融科技解決方案提供商',
  description: '斐闊科技為您提供創新的金融科技解決方案，包括發票醫生等專業服務。我們致力於透過科技提升企業財務韌性，實現數位轉型。',
  keywords: '斐闊,Finctory,金融科技,發票醫生,財務管理,數位轉型,企業解決方案',
  
  // Open Graph / Facebook
  ogTitle: '斐闊．Finctory - 專業的金融科技解決方案提供商',
  ogDescription: '斐闊科技為您提供創新的金融科技解決方案，包括發票醫生等專業服務。我們致力於透過科技提升企業財務韌性，實現數位轉型。',
  ogImage: 'https://finctory.com/og-image.jpg',
  ogType: 'website',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: '斐闊．Finctory - 專業的金融科技解決方案提供商',
  twitterDescription: '斐闊科技為您提供創新的金融科技解決方案，包括發票醫生等專業服務。',
  twitterImage: 'https://finctory.com/og-image.jpg',
})

// 添加結構化數據
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '斐闊．Finctory',
        description: '專業的金融科技解決方案提供商',
        url: 'https://finctory.com',
        logo: 'https://finctory.com/finctory_LOGO.svg',
        sameAs: [
          'https://www.facebook.com/finctory',
          'https://www.youtube.com/@Finctory'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'finctory@gmail.com',
          contactType: 'customer service'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '斐闊．Finctory',
        url: 'https://finctory.com'
      })
    }
  ]
})

useServerSeoMeta({
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  formatDetection: { telephone: 'no' },
  themeColor: '#ffffff',
  charset: 'utf-8',
  'format-detection': 'telephone=no'
})

onMounted(() => {
  try {
    initThree()
    initCursorTrail()
    createMeteors()
    animate()

    setTimeout(() => {
      isLoading.value = false
    }, OPENING_DURATION)
  } catch (error) {
    console.error('Error during setup:', error)
  }
})

onUnmounted(() => {
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.clear()
  }
})

function initCursorTrail() {
  const updateCanvasSize = () => {
    cursorCanvas.value.width = window.innerWidth
    cursorCanvas.value.height = window.innerHeight
    cursorCanvas.value.style.width = `${window.innerWidth}px`
    cursorCanvas.value.style.height = `${window.innerHeight}px`
  }

  updateCanvasSize()
  cursorCtx = cursorCanvas.value.getContext('2d')

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', () => {
    updateCanvasSize()
    onWindowResize()
  })
  window.addEventListener('scroll', () => {
    cursorTrail.length = 0
  })
}

function onMouseMove(event) {
  const x = event.clientX
  const y = event.clientY

  cursorTrail.push({
    x: x,
    y: y,
    alpha: 1,
  })

  if (cursorTrail.length > TRAIL_LENGTH) {
    cursorTrail.shift()
  }
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

function resetMeteor(meteor) {
  meteor.position.x = (Math.random() - 0.5) * 20
  meteor.position.y = 10 + Math.random() * 10
  meteor.position.z = (Math.random() - 0.5) * 10

  meteor.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.02, -0.05 - Math.random() * 0.05, 0)
}

function initThree() {
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

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)

  cursorCanvas.value.width = window.innerWidth
  cursorCanvas.value.height = window.innerHeight
}

function animate() {
  requestAnimationFrame(animate)

  meteors.forEach((meteor) => {
    meteor.position.add(meteor.velocity)

    if (meteor.position.y < -10) {
      resetMeteor(meteor)
    }
  })

  cursorCtx.clearRect(0, 0, cursorCanvas.value.width, cursorCanvas.value.height)

  if (cursorTrail.length >= 2) {
    for (let i = 0; i < cursorTrail.length - 1; i++) {
      const gradient = cursorCtx.createLinearGradient(
        cursorTrail[i].x,
        cursorTrail[i].y,
        cursorTrail[i + 1].x,
        cursorTrail[i + 1].y,
      )

      const alpha = cursorTrail[i].alpha * 0.3
      gradient.addColorStop(0, `rgba(0, 255, 0, ${alpha})`)
      gradient.addColorStop(1, `rgba(0, 255, 0, ${alpha * 0.5})`)

      cursorCtx.beginPath()
      cursorCtx.strokeStyle = gradient
      cursorCtx.lineWidth = 8 - (i / cursorTrail.length) * 6
      cursorCtx.lineCap = 'round'
      cursorCtx.moveTo(cursorTrail[i].x, cursorTrail[i].y)
      cursorCtx.lineTo(cursorTrail[i + 1].x, cursorTrail[i + 1].y)
      cursorCtx.stroke()
    }
  }

  cursorTrail.forEach((point) => {
    point.alpha *= 0.95
  })

  renderer.render(scene, camera)
}
</script>

<style scoped>
.perspective-text {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.floating-text {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
