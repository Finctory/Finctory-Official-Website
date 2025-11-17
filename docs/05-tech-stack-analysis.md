# 技術棧分析

> 分析優秀網頁設計案例中使用的技術棧、框架、庫與工具

## 📑 目錄

- [前端框架](#前端框架)
- [動畫庫](#動畫庫)
- [UI 框架與組件庫](#ui-框架與組件庫)
- [建置工具](#建置工具)
- [部署與主機](#部署與主機)
- [其他工具與服務](#其他工具與服務)

---

## 前端框架

### 技術說明

各網站使用的前端框架，如 React、Vue、Next.js、Nuxt 等。

### 實現方法

待補充...

### 程式碼範例

```javascript
// 待補充範例
```

### 參考連結

- [React Documentation](https://react.dev/)
- [Vue.js Documentation](https://vuejs.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Nuxt Documentation](https://nuxt.com/docs)

### 適用場景

- 單頁應用
- 伺服器端渲染
- 靜態網站生成

---

## 動畫庫

### 技術說明

各網站使用的動畫庫，如 GSAP、Framer Motion、Lottie 等。

### GSAP（GreenSock Animation Platform）

**案例：Superpower (superpower.com)**

Superpower 網站全面使用了 GSAP 3.13.0 及其多個插件。

**技術特點：**

- 強大的動畫控制能力
- 豐富的插件生態系統
- 優異的效能表現
- 支援複雜的動畫序列

**使用的插件：**

- ScrollTrigger、Flip、CustomEase、EasePack、Observer、ScrollToPlugin、TextPlugin、SplitText

### Lottie / DotLottie

**案例：Kons (kons.fyi), Superpower (superpower.com), SuperHi (superhi.com)**

Kons、Superpower 和 SuperHi 都使用了 Lottie 動畫來實現互動式動畫效果。

**技術特點：**

- DotLottie 格式（.lottie）比傳統 JSON 格式更小
- 支援互動式動畫（滑鼠懸停、點擊觸發）
- 輕量級，效能優異
- 可與 Vue/React 等框架整合
- 適合角色動畫與表情動畫

**使用的庫：**

- `dotlottie-player.js` - DotLottie 播放器
- `lottie-interactivity.min.js` - Lottie 互動功能
- `@lottiefiles/lottie-player` - Lottie 播放器（Superpower）
- Framer DotLottie Player（SuperHi）

### Mux（影片串流）

**案例：SuperHi (superhi.com)**

SuperHi 使用 Mux 進行高品質的影片串流與 CDN 加速。

**技術特點：**

- HLS（HTTP Live Streaming）格式
- 自動縮圖生成
- 影片模糊處理
- CDN 加速
- 適合教育平台與影片內容

### Fathom Analytics（隱私友好的分析）

**案例：Limitless (limitless.ai)**

Limitless 使用 Fathom Analytics 進行隱私友好的網站分析。

**技術特點：**

- 隱私友好的分析工具
- 不追蹤個人資料
- GDPR 合規
- 適合重視隱私的網站

### Framer（設計與開發平台）

**案例：Duties (duties.xyz), SuperHi (superhi.com)**

Duties 和 SuperHi 都使用 Framer 作為設計與開發平台。

**技術特點：**

- 視覺化設計工具
- React 組件生成
- Framer Motion 動畫整合
- 適合設計師與開發者協作

### Nuxt 3（Vue 框架）

**案例：SavoirFaire (savoirfaire.nyc)**

SavoirFaire 使用 Nuxt 3 作為前端框架。

**技術特點：**

- Vue 3 框架
- 自動程式碼分割
- SSR / SSG 支援
- 適合內容驅動的網站

### Remix（React 框架）

**案例：Shuttle (shuttle.zip)**

Shuttle 使用 Remix 作為前端框架。

**技術特點：**

- React 框架
- 服務端渲染
- 自動程式碼分割
- 適合需要 SSR 的應用

### Rocket（Rust 後端）

**案例：Shuttle (shuttle.zip)**

Shuttle 使用 Rocket (Rust) 作為後端框架。

**技術特點：**

- Rust 後端框架
- WebAssembly 支援
- 高效能處理
- 適合需要高效能的應用

### Three.js / WebGL（3D 渲染）

**案例：SavoirFaire (savoirfaire.nyc), Bigpicture Company (www.bpco.kr), Max Yinger (yinger.dev)**

多個網站都使用了 Three.js / WebGL 實現 3D 元素互動。

**技術特點：**

- 3D 模型載入（GLTF）
- 3D 元素互動
- 物理引擎整合（SavoirFaire）
- HDR 環境貼圖（Bigpicture Company）
- 多個 3D 模型載入（Bigpicture Company）
- 實時 3D 渲染（Max Yinger）
- 適合需要 3D 互動的網站

### Prismic CMS（內容管理）

**案例：SavoirFaire (savoirfaire.nyc), Bigpicture Company (www.bpco.kr)**

SavoirFaire 和 Bigpicture Company 都使用 Prismic CMS 管理內容與媒體資源。

**技術特點：**

- Headless CMS
- 動態內容載入
- 圖片與影片優化
- 適合內容驅動的網站

### 實現方法

```vue
<template>
  <dotlottie-player
    src="/animations/button.lottie"
    background="transparent"
    speed="1"
    loop
    autoplay
  />
</template>

<script setup lang="ts">
import '@dotlottie/player-component'
</script>
```

### 程式碼範例

```javascript
// Lottie Interactivity 設定
import lottieInteractivity from 'lottie-interactivity'

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

### 參考連結

- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lottie Documentation](https://airbnb.io/lottie/)
- [DotLottie Player](https://dotlottie.github.io/player-component/)
- [Lottie Interactivity](https://lottiefiles.com/blog/working-with-apis/lottie-interactivity-documentation)

### 適用場景

- 複雜動畫序列
- 互動式動畫
- 品牌動畫
- 微互動效果（按鈕、圖示）

---

## UI 框架與組件庫

### 技術說明

各網站使用的 UI 框架與組件庫，如 Tailwind CSS、Material-UI、Chakra UI 等。

### 實現方法

待補充...

### 程式碼範例

```css
/* 待補充範例 */
```

### 參考連結

- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)
- [Chakra UI](https://chakra-ui.com/)

### 適用場景

- 快速開發
- 一致性設計
- 響應式佈局

---

## 建置工具

### 技術說明

各網站使用的建置工具，如 Vite、Webpack、Parcel 等。

### 實現方法

待補充...

### 程式碼範例

```javascript
// 待補充範例
```

### 參考連結

- [Vite Documentation](https://vitejs.dev/)
- [Webpack Documentation](https://webpack.js.org/)
- [Parcel Documentation](https://parceljs.org/)

### 適用場景

- 開發環境
- 生產建置
- 模組打包

---

## 部署與主機

### 技術說明

各網站使用的部署平台與主機服務，如 Vercel、Netlify、AWS 等。

### 實現方法

待補充...

### 程式碼範例

```yaml
# 待補充範例
```

### 參考連結

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS Documentation](https://aws.amazon.com/documentation/)

### 適用場景

- 靜態網站部署
- 伺服器端渲染
- CDN 分發

---

## 其他工具與服務

### 技術說明

其他使用的工具與服務，如分析工具、字體服務、圖片 CDN 等。

### 分析工具

**Umami Analytics（案例：Kons）**

Umami 是一個開源、隱私友好的網站分析工具，作為 Google Analytics 的替代方案。

**特點：**

- 開源且免費
- 隱私友好（符合 GDPR）
- 輕量級
- 無 Cookie 追蹤

**使用方式：**

```html
<script async src="https://cloud.umami.is/script.js" data-website-id="your-id"></script>
```

### 效能監控

**Cloudflare Insights（案例：Kons）**

Cloudflare 提供的效能監控工具，用於追蹤網站效能指標。

### 字體服務

**Web Font Loader（案例：Kons）**

使用 `webfont.js` 來優化字體載入，確保字體正確載入並提供回退機制。

**案例：UNVEIL**

- 使用自訂字體：NB International Pro
- Web Font 優化載入

### 實現方法

```javascript
// Web Font Loader 設定
WebFont.load({
  custom: {
    families: ['Inter'],
    urls: ['/fonts/inter.css'],
  },
})
```

### 程式碼範例

```javascript
// Umami 分析整合
// 在 nuxt.config.ts 中
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          async: true,
          'data-website-id': 'your-website-id',
        },
      ],
    },
  },
})
```

### 參考連結

- [Google Analytics](https://analytics.google.com/)
- [Umami Analytics](https://umami.is/)
- [Google Fonts](https://fonts.google.com/)
- [Web Font Loader](https://github.com/typekit/webfontloader)
- [Cloudflare Insights](https://developers.cloudflare.com/analytics/web-analytics/)
- [Cloudinary](https://cloudinary.com/)

### 適用場景

- 數據分析（隱私友好）
- 字體載入優化
- 效能監控
- 圖片優化

---

## 📝 案例引用

待補充各案例網站的具體技術棧分析...

---

**最後更新**：2025-11-17
