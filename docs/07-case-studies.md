# 案例研究

> 詳細分析每個優秀網頁設計案例的技術實現與設計特色

## 📑 目錄

- [Roasted](#roasted)
- [Kons](#kons)
- [UNVEIL](#unveil)
- [Superpower](#superpower)
- [Augen](#augen)
- [Notion](#notion)
- [Limitless](#limitless)
- [Daniel Sun](#daniel-sun)
- [SuperHi](#superhi)
- [Duties](#duties)
- [SavoirFaire](#savoirfaire)
- [Shuttle](#shuttle)
- [KidSuper World](#kidsuper-world)
- [Bigpicture Company](#bigpicture-company)
- [Max Yinger](#max-yinger)

---

## Roasted

### 網站資訊

- **網址**：https://roasted.design
- **類型**：設計工作室 / 效能行銷
- **研究日期**：2025-11-17
- **訪問狀態**：無法直接訪問（DNS 解析失敗）

### 技術棧

**推測技術（基於搜尋結果）：**

- 現代前端框架（可能使用 React 或 Vue.js）
- 後端 CMS（可能使用 WordPress 或 Headless CMS）
- 響應式設計框架

### 設計特色

**根據搜尋結果分析：**

**清晰的資訊架構：**

- 首頁直接呈現服務價值主張
- 明確的行動呼籲（CTA）
- 用戶見證展示增強信任度

**視覺一致性：**

- 統一的色彩和字體
- 專業且可信賴的品牌形象
- 響應式設計確保多裝置體驗

### 動畫技術

**推測技術：**

- **視差滾動效果（Parallax Scrolling）**：背景與前景元素不同滾動速度
- **CSS3 動畫**：使用 `@keyframes` 和 `transition` 實現淡入淡出、縮放效果
- **JavaScript 互動**：動態內容載入和用戶交互

### 視覺設計

**設計元素：**

- 高品質圖片展示
- 簡潔的佈局設計
- 一致的品牌色彩

### 互動設計

**互動元素：**

- 圖片滑動效果
- 按鈕點擊反應
- 動態內容載入

### 效能優化

**優化策略：**

- 響應式設計
- 圖片優化
- 動態內容載入

### 關鍵發現

1. **無法直接訪問**：網站可能已下線或域名變更
2. **設計模式**：根據搜尋結果，Roasted 展示了清晰的資訊架構和視覺一致性
3. **技術應用**：推測使用了視差滾動、CSS3 動畫等現代網頁技術
4. **使用者體驗**：強調清晰的價值主張和明確的行動呼籲

---

## Kons

### 網站資訊

- **網址**：https://kons.fyi
- **類型**：個人作品集 / 設計師網站
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- DotLottie Player (`dotlottie-player.js`)
- Lottie Interactivity (`lottie-interactivity.min.js`)
- 自訂 JavaScript (`island.js`)
- Web Font Loader (`webfont.js`)
- Inter 字體（自訂 Web Font）

**分析與監控：**

- Umami Analytics（開源分析工具）
- Cloudflare Insights（效能監控）

**架構：**

- 靜態網站生成
- Cloudflare CDN

### 設計特色

**極簡主義設計：**

- 大量留白，突出核心內容
- 簡潔的導航系統（Home、About、Links）
- 個人簡介以文字為主，強調設計理念

**視覺風格：**

- 黑白配色為主
- 使用 Lottie 動畫作為互動元素
- 清晰的層次結構

### 動畫技術

**Lottie 動畫應用：**

- 導航按鈕使用 Lottie 動畫
- 互動式動畫觸發（滑鼠懸停、點擊）
- 使用 DotLottie 格式優化檔案大小

**實現方式：**

- 每個導航按鈕都有對應的 Lottie 動畫
- 動畫檔案以 JSON 格式載入（home.json, about.json, links.json）
- 使用 `lottie-interactivity` 實現互動效果

### 視覺設計

**排版：**

- 大標題突出個人品牌（"Kons"）
- 簡潔的段落文字說明設計理念
- 清晰的連結結構

**色彩：**

- 主要使用黑白配色
- 強調內容可讀性

### 互動設計

**導航互動：**

- 按鈕使用 Lottie 動畫提供視覺反饋
- 簡潔的返回按鈕設計
- 外部連結標示（↗）

**使用者體驗：**

- 極簡的介面降低認知負擔
- 清晰的資訊架構
- 快速載入（使用靜態資源）

### 效能優化

**資源優化：**

- 使用 DotLottie 格式減少動畫檔案大小
- Web Font 優化載入
- Cloudflare CDN 加速

**監控：**

- Umami 分析使用者行為
- Cloudflare Insights 監控效能

### 關鍵發現

1. **Lottie 動畫的應用**：Kons 展示了如何將 Lottie 動畫整合到導航系統中，創造獨特的互動體驗
2. **極簡主義設計**：證明了極簡設計可以有效傳達個人品牌與設計理念
3. **效能優化**：使用現代工具（DotLottie、CDN）確保快速載入
4. **開源工具使用**：Umami 作為隱私友好的分析工具替代方案

---

## UNVEIL

### 網站資訊

- **網址**：https://unveil.fr
- **類型**：創意工作室 / 專案展示
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- 自訂字體（NB International Pro）
- 響應式設計
- 動態內容載入

**架構：**

- 專案展示系統
- 分類篩選功能（All、AI、Graphic Identity、Video、Digital Design、CGI）

### 設計特色

**極簡主義設計：**

- 大量留白
- 中央視覺焦點（眼睛圖示）
- 清晰的導航結構

**品牌識別：**

- 獨特的視覺元素（眼睛圖示）
- 一致的設計語言
- 專業的專案展示

### 動畫技術

**微互動：**

- 簡潔的過渡效果
- 分類篩選的動態更新
- 專案卡片的互動效果

### 視覺設計

**排版：**

- 清晰的導航層級
- 專案分類系統
- 一致的視覺風格

**色彩：**

- 主要使用黑白配色
- 強調內容可讀性

### 互動設計

**導航系統：**

- 主要導航：UNVEIL ® Projects、Research、Studio、Contact
- 次要導航：Overview、Index
- 分類篩選：All、AI、Graphic Identity、Video、Digital Design、CGI

**使用者體驗：**

- 清晰的資訊架構
- 易於瀏覽的專案展示
- 明確的聯絡方式

### 效能優化

**字體優化：**

- 使用 Web Font（NB International Pro）
- 字體載入優化提示

**內容管理：**

- 動態載入專案內容
- 分類篩選功能

### 關鍵發現

1. **極簡主義的視覺識別**：使用獨特的視覺元素（眼睛圖示）建立品牌識別
2. **清晰的專案分類系統**：幫助使用者快速找到感興趣的內容
3. **專業的展示方式**：適合創意工作室的專案展示需求
4. **響應式設計**：確保在不同裝置上都有良好的體驗

---

## Superpower

### 網站資訊

- **網址**：https://superpower.com
- **類型**：健康檢測服務 / SaaS
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- Webflow（網站建置平台）
- GSAP 3.13.0（動畫庫，包含多個插件）
  - ScrollTrigger（滾動觸發動畫）
  - Flip（翻轉動畫）
  - CustomEase（自訂緩動函數）
  - EasePack（緩動函數包）
  - Observer（觀察者模式）
  - ScrollToPlugin（滾動到指定位置）
  - TextPlugin（文字動畫）
  - SplitText（文字分割動畫）
- Lottie Player（動畫播放器）
- Swiper 8（輪播圖庫）
- Finsweet Components（Webflow 組件庫）
- jQuery 3.5.1
- SplitType.js（文字分割）

**字體服務：**

- Adobe Typekit（NB International Pro 字體）

**分析與監控：**

- Segment（數據分析平台）
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Klaviyo（電子郵件行銷）
- PostHog（產品分析）
- Intellimize（A/B 測試與個人化）
- Lorikeet（聊天機器人）
- Microsoft Clarity（使用者行為分析）
- TikTok Pixel
- LinkedIn Insight Tag
- Bing Ads

**其他工具：**

- Tippy.js（工具提示）
- HLS.js（影片串流）
- libphonenumber-js（電話號碼驗證）
- intl-tel-input（國際電話輸入）

### 設計特色

**視覺設計：**

- 清晰的價值主張：「Unlock your new health intelligence」
- 強調服務優勢：100+ 實驗室測試、早期檢測 1,000+ 種狀況
- 使用影片背景增強視覺吸引力
- 高品質圖片展示服務內容

**使用者體驗：**

- 清晰的導航結構（How it Works, What We Test, Reviews, FAQs）
- 明確的行動呼籲（Join Today）
- 用戶見證展示增強信任度
- 響應式設計確保多裝置體驗

### 動畫技術

**GSAP 動畫應用：**

- 使用多個 GSAP 插件實現複雜動畫效果
- ScrollTrigger 實現滾動觸發動畫
- TextPlugin 和 SplitText 實現文字動畫
- Flip 實現元素翻轉效果
- 自訂緩動函數提升動畫流暢度

**Lottie 動畫：**

- 使用 Lottie Player 播放動畫
- 增強視覺吸引力

**影片背景：**

- 使用 HTML5 video 標籤作為背景
- 優化載入策略

### 視覺設計

**排版：**

- 大標題突出核心價值
- 清晰的層次結構
- 使用圖示增強可讀性

**色彩：**

- 專業的醫療健康配色
- 強調信任與專業

### 互動設計

**導航互動：**

- 下拉選單導航
- 清晰的 CTA 按鈕
- 影片播放控制

**使用者體驗：**

- 多步驟表單（使用 multi-step.js）
- 國際電話號碼輸入
- 聊天機器人支援（Lorikeet）

### 效能優化

**資源優化：**

- 使用 CDN 加速（website-files.com, b-cdn.net）
- 圖片使用 AVIF 格式
- 程式碼分割與懶加載

**A/B 測試：**

- 使用 Intellimize 進行個人化與 A/B 測試
- 動態內容優化

**監控：**

- 多種分析工具追蹤使用者行為
- PostHog 進行產品分析
- Microsoft Clarity 進行使用者行為分析

### 關鍵發現

1. **GSAP 的全面應用**：Superpower 展示了 GSAP 多個插件的綜合應用，實現複雜的動畫效果
2. **Webflow + 自訂 JavaScript**：結合 Webflow 的視覺化編輯與自訂 JavaScript 實現複雜功能
3. **多種分析工具整合**：使用 Segment 作為數據中樞，整合多種分析工具
4. **A/B 測試與個人化**：使用 Intellimize 進行即時個人化與 A/B 測試
5. **聊天機器人整合**：使用 Lorikeet 提供即時客戶支援

---

## Augen

### 網站資訊

- **網址**：https://augen.pro
- **類型**：產品展示 / 科技產品
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- 靜態網站生成
- 極簡設計架構

**架構：**

- 產品展示系統
- 多頁面導航（A¹ Sense, B¹ Eye, A¹ Neuro, Programs, Updates）

### 設計特色

**極簡主義設計：**

- 大量留白
- 清晰的產品展示
- 簡潔的導航結構

**視覺風格：**

- 專業的產品攝影
- 清晰的產品資訊
- 一致的設計語言

### 動畫技術

**微互動：**

- 簡潔的過渡效果
- 產品卡片的互動

### 視覺設計

**排版：**

- 清晰的產品分類
- 專業的產品展示
- 一致的視覺風格

**色彩：**

- 簡潔的配色方案
- 強調產品本身

### 互動設計

**導航系統：**

- 頁面版本標示（1.0, 2.0）
- 清晰的產品連結
- 社交媒體連結

**使用者體驗：**

- 簡潔的資訊架構
- 易於瀏覽的產品展示
- 明確的聯絡方式

### 效能優化

**簡潔架構：**

- 輕量級設計
- 快速載入
- 優化的資源使用

### 關鍵發現

1. **極簡主義的產品展示**：Augen 展示了如何用極簡設計突出產品本身
2. **清晰的資訊架構**：使用版本標示（1.0, 2.0）組織內容
3. **專業的產品攝影**：高品質產品圖片增強視覺吸引力
4. **響應式設計**：確保在不同裝置上都有良好的體驗

---

## Notion

### 網站資訊

- **網址**：https://notion.so / https://www.notion.com
- **類型**：生產力工具 / SaaS
- **研究日期**：2025-11-17
- **訪問狀態**：訪問超時，基於 Network 請求分析

### 技術棧

**前端框架：**

- Next.js（React 框架，從 `_next/static` 路徑可以看出）
- React 18.2.0
- 程式碼分割與動態載入

**內容管理：**

- Contentful CMS（`images.ctfassets.net`, `videos.ctfassets.net`）
- 動態內容載入

**字體：**

- NotionInter（自訂字體，多種字重：Regular, Medium, SemiBold, Bold）
- LyonText（自訂字體）

**分析與監控：**

- Google Analytics
- Google Tag Manager
- Amplitude（產品分析）
- Sentry（錯誤追蹤）
- Hotjar（使用者行為分析）
- Metadata.io（行銷分析）
- Vercel Analytics（效能監控）
- Splunk（日誌分析）

**第三方服務：**

- Stripe（支付處理）
- YouTube（影片嵌入）
- Vimeo（影片嵌入）
- Giphy（動圖）
- Unsplash（圖片）
- Box（檔案儲存）
- Sprig（使用者研究）
- Customer.io（電子郵件行銷）
- Adora（個人化）
- Transcend（隱私管理）

**其他工具：**

- Statsig（功能標記與 A/B 測試）
- TailorHQ（個人化）
- Mux（影片串流）

### 設計特色

**視覺設計：**

- 極簡主義設計
- 清晰的價值主張：「One workspace. Zero busywork.」
- 使用插圖與動畫增強視覺吸引力
- 一致的品牌識別

**使用者體驗：**

- 清晰的導航結構
- 明確的行動呼籲（Get Notion free, Request a demo）
- 客戶見證展示（OpenAI, Figma, Vercel 等）
- 響應式設計

### 動畫技術

**影片動畫：**

- 使用 MP4 影片展示產品功能
- 優化的影片載入策略
- 使用 Contentful CDN 加速影片載入

**微互動：**

- 簡潔的過渡效果
- 產品展示的動態效果
- 互動式元素

### 視覺設計

**排版：**

- 大標題突出核心價值
- 清晰的層次結構
- 使用插圖增強視覺吸引力

**色彩：**

- 簡潔的配色方案
- 強調內容可讀性
- 一致的品牌色彩

### 互動設計

**導航系統：**

- 清晰的頂部導航
- 多層級導航結構
- 語言選擇功能

**使用者體驗：**

- 產品功能展示
- 客戶見證輪播
- 互動式計算器（節省成本計算）
- 產品下載連結

### 效能優化

**資源優化：**

- Next.js 自動程式碼分割
- 圖片優化（使用 Next.js Image 組件）
- 影片優化載入
- CDN 加速（Contentful, Vercel）

**監控：**

- 多種分析工具追蹤使用者行為
- Sentry 進行錯誤追蹤
- Vercel Analytics 進行效能監控
- Hotjar 進行使用者行為分析

**安全性：**

- 嚴格的 Content Security Policy (CSP)
- 隱私管理工具（Transcend）

### 關鍵發現

1. **Next.js 的企業級應用**：Notion 展示了 Next.js 在大型 SaaS 產品中的應用
2. **Contentful CMS 整合**：使用 Contentful 管理內容與媒體資源
3. **多種分析工具整合**：使用多種工具從不同角度分析使用者行為
4. **嚴格的 CSP 政策**：展示了大型產品的安全性最佳實踐
5. **功能標記與 A/B 測試**：使用 Statsig 進行功能標記與實驗
6. **個人化體驗**：使用 TailorHQ 和 Adora 提供個人化內容
7. **隱私管理**：使用 Transcend 管理使用者隱私與 Cookie 同意

---

## Limitless

### 網站資訊

- **網址**：https://limitless.ai / https://www.limitless.ai
- **類型**：AI 硬體產品 / SaaS
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Next.js（React 框架，從 `_next/static` 路徑可以看出）
- 程式碼分割與動態載入

**圖片與媒體：**

- WebP 格式圖片（優化載入）
- WebM 格式影片
- 圖片序列動畫（hero-sequence，使用多張 WebP 圖片組成動畫）

**分析與監控：**

- Google Tag Manager
- Google Analytics
- Fathom Analytics（隱私友好的分析工具）
- Cloudflare Insights（效能監控）

**第三方服務：**

- Stripe（支付處理）
- Shoutout.io（客戶見證展示與影片）
- Enzuzo（Cookie 同意管理與隱私合規）
- Tolt（工具提示）

**儲存：**

- Google Cloud Storage（媒體資源儲存）

### 設計特色

**視覺設計：**

- 清晰的價值主張：「Go beyond your mind's limitations」
- 強調產品特色：Personalized AI powered by what you've seen, said, and heard
- 使用產品圖片序列展示產品外觀
- 使用影片展示產品功能

**使用者體驗：**

- 清晰的導航結構（Home, Solutions, Pricing, Privacy, Developers, About）
- 明確的行動呼籲（Buy, Sign In）
- 產品特色展示（Pendant 硬體產品）
- 客戶見證展示（使用 Shoutout.io）

### 動畫技術

**圖片序列動畫：**

- 使用多張 WebP 圖片組成動畫序列（hero-sequence）
- 從 `black-pendant-updated-0001.webp` 到 `black-pendant-updated-0087.webp`
- 實現流暢的產品展示動畫

**影片動畫：**

- 使用 WebM 格式影片展示產品功能
- 優化的影片載入策略

### 視覺設計

**排版：**

- 大標題突出核心價值
- 清晰的層次結構
- 產品圖片展示

**色彩：**

- 簡潔的配色方案
- 強調產品本身
- 專業的科技感

### 互動設計

**導航系統：**

- 清晰的頂部導航
- 下拉選單（Solutions）
- 行動按鈕（Buy, Sign In）

**使用者體驗：**

- 產品展示（Pendant 硬體產品）
- 客戶見證輪播（使用 Shoutout.io）
- 產品特色說明
- 定價資訊展示

### 效能優化

**資源優化：**

- Next.js 自動程式碼分割
- WebP 格式圖片優化
- 圖片序列動畫優化載入
- CDN 加速（Google Cloud Storage）

**監控：**

- Fathom Analytics 進行隱私友好的分析
- Cloudflare Insights 進行效能監控
- Google Analytics 進行傳統分析

**隱私合規：**

- 使用 Enzuzo 管理 Cookie 同意與隱私合規
- HIPAA 合規的資料保護

### 關鍵發現

1. **圖片序列動畫**：Limitless 使用多張 WebP 圖片組成動畫序列，實現流暢的產品展示效果
2. **隱私友好的分析**：使用 Fathom Analytics 替代傳統分析工具，保護使用者隱私
3. **硬體產品展示**：展示了如何有效展示硬體產品（Pendant）的特色與功能
4. **客戶見證整合**：使用 Shoutout.io 展示客戶見證與影片
5. **隱私合規工具**：使用 Enzuzo 管理 Cookie 同意與隱私合規

---

## Daniel Sun

### 網站資訊

- **網址**：https://danielsun.space
- **類型**：個人作品集 / 設計師網站
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- 現代前端框架（推測使用 React 或 Vue）
- 文字動畫效果
- 響應式設計

**設計工具：**

- 自訂設計系統
- 創意排版

### 設計特色

**視覺設計：**

- 個人化的設計風格
- 清晰的個人介紹：「Howdy! Meet your trusted design partner, crafting strong brands for SaaS and Web3.」
- 作品集展示（Ruby, Stimulate, Caldera, Reward Point, Memex, Pix AI, Polpis Systems, Quantia, Hily, Deepengine）
- 個人故事展示

**使用者體驗：**

- 清晰的導航結構（Work, Story, Process, Connect）
- 作品集分類展示
- 個人背景介紹
- 聯絡方式展示

### 動畫技術

**文字動畫：**

- 使用文字分割動畫效果
- 例如：「I don't have dark secrets, only bright ones」每個字母都有獨立的動畫
- 「What my perfect collaboration looks like」文字動畫效果
- 增強視覺吸引力與互動性

**微互動：**

- 作品卡片互動
- 平滑的滾動效果
- 過渡動畫

### 視覺設計

**排版：**

- 創意的文字排版
- 清晰的層次結構
- 作品集網格佈局
- 個人故事展示

**色彩：**

- 簡潔的配色方案
- 強調內容可讀性
- 專業的設計風格

### 互動設計

**導航系統：**

- 清晰的頂部導航
- 錨點導航（Work, Story, Process, Connect）
- 社交媒體連結

**使用者體驗：**

- 作品集展示
- 個人故事展示
- 合作夥伴展示（Halo Lab, Heartbeat, Ooze, O0 design, Clerk）
- 聯絡方式（hello@danielsun.space）

### 效能優化

**簡潔架構：**

- 輕量級設計
- 快速載入
- 優化的資源使用

### 關鍵發現

1. **文字動畫效果**：Daniel Sun 展示了如何用文字分割動畫創造視覺吸引力
2. **個人化設計**：展示了個人作品集網站的創意設計方式
3. **作品集展示**：清晰的專案分類與展示方式
4. **個人故事整合**：將個人背景與作品集結合，增強信任度
5. **簡潔的聯絡方式**：使用簡單的郵件連結與社交媒體連結

---

## SuperHi

### 網站資訊

- **網址**：https://superhi.com / https://www.superhi.com
- **類型**：線上教育平台 / SaaS
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Next.js（React 框架，從 `_next/static` 路徑可以看出）
- 程式碼分割與動態載入
- React Server Components

**設計工具：**

- Framer（設計與原型工具）
- DotLottie Player（動畫播放器）

**影片串流：**

- Mux（影片串流與 CDN）
- HLS（HTTP Live Streaming）
- 影片縮圖與模糊處理

**分析與監控：**

- Sentry（錯誤追蹤）
- Vercel Analytics（效能監控）
- Litix（分析工具）
- Google Tag Manager
- Google Analytics
- Hotjar（使用者行為分析）
- Help Scout（客戶支援）

**第三方服務：**

- Stripe（支付處理）
- Discord（社群）
- Mailchimp（電子郵件行銷）

**部署：**

- Vercel（部署平台）

### 設計特色

**視覺設計：**

- 清晰的價值主張：「Curate your own creative career」
- 強調學習成果：50,000+ learners worldwide
- 使用插圖與動畫增強視覺吸引力
- 學生作品展示

**使用者體驗：**

- 清晰的導航結構（Catalog, About, Search, Cart, Sign in）
- 課程分類展示（Code, Design, Project management）
- 學生見證展示
- 免費課程推廣

### 動畫技術

**Lottie 動畫：**

- 使用 DotLottie Player 播放動畫
- Wilson 角色動畫（多種表情動畫）
- 增強視覺吸引力與互動性

**影片動畫：**

- 使用 Mux 進行影片串流
- HLS 格式影片
- 影片縮圖與模糊處理
- 優化的影片載入策略

**文字動畫：**

- 文字分割動畫效果
- 例如：「Curate your own creative career」每個單詞都有獨立的動畫

### 視覺設計

**排版：**

- 大標題突出核心價值
- 清晰的層次結構
- 使用插圖增強視覺吸引力
- 學生作品展示

**色彩：**

- 簡潔的配色方案
- 強調內容可讀性
- 一致的品牌色彩

### 互動設計

**導航系統：**

- 清晰的頂部導航
- 搜尋功能
- 購物車功能
- 登入功能

**使用者體驗：**

- 課程目錄展示
- 學生作品展示
- 常見問題（FAQ）手風琴式展開
- 社群連結（Discord）
- 電子報訂閱

### 效能優化

**資源優化：**

- Next.js 自動程式碼分割
- 圖片優化（使用 Next.js Image 組件）
- 影片優化載入（Mux CDN）
- 程式碼分割與懶加載

**監控：**

- Sentry 進行錯誤追蹤
- Vercel Analytics 進行效能監控
- Litix 進行分析
- Hotjar 進行使用者行為分析

**安全性：**

- Content Security Policy (CSP)
- 報告模式（report-only）的 CSP

### 關鍵發現

1. **Framer + Next.js 整合**：SuperHi 展示了如何將 Framer 設計與 Next.js 開發結合
2. **Mux 影片串流**：使用 Mux 進行高品質的影片串流與 CDN 加速
3. **DotLottie 動畫**：使用 DotLottie Player 播放角色動畫，增強互動性
4. **教育平台設計**：展示了線上教育平台的設計最佳實踐
5. **學生作品展示**：使用學生作品增強信任度與學習動機
6. **社群整合**：整合 Discord 社群，增強學習體驗
7. **影片優化**：使用 Mux 的縮圖與模糊處理，優化影片載入體驗

---

## Duties

### 網站資訊

- **網址**：https://www.duties.xyz
- **類型**：創意設計工作室 / 作品集網站
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Framer（設計與開發平台）
- React（透過 Framer）
- Framer Motion（動畫庫）
- Rolldown（滾動動畫庫）

**動畫技術：**

- DotLottie（Lottie 動畫）
- Framer Motion（動畫與過渡效果）

**分析與監控：**

- Google Tag Manager
- Google Analytics
- Framer Events（事件追蹤）

### 設計特色

**視覺設計：**

- 動態文字效果（打字機效果或文字動畫）
- 實時時間顯示（"11:45, Oslo"）
- 狀態顯示（"OFF-DUTY" / "ON-DUTY"）
- 滾動的 marquee ticker（客戶標誌展示）
- 項目卡片互動

**使用者體驗：**

- 清晰的導航結構
- 項目展示（EVS, Nuu, Figures, People Made Machines）
- 服務說明
- 聯絡方式展示

### 動畫技術

**文字動畫：**

- 動態文字效果（"BRANDA and websibsw", "for BRAVE compasepn"）
- 打字機效果或文字逐字顯示
- 增強視覺吸引力

**滾動動畫：**

- 使用 Rolldown 實現滾動觸發動畫
- 項目卡片滾動效果
- 平滑的頁面過渡

**Lottie 動畫：**

- 使用 DotLottie 播放動畫
- 增強互動性

### 視覺設計

**排版：**

- 創意的文字排版
- 清晰的層次結構
- 項目卡片網格佈局
- 動態元素展示

**色彩：**

- 簡潔的配色方案
- 強調內容可讀性
- 專業的設計風格

### 互動設計

**實時資訊顯示：**

- 實時時間顯示（"11:45, Oslo"）
- 狀態顯示（"OFF-DUTY" / "ON-DUTY"）
- 增強真實感與互動性

**滾動互動：**

- Marquee ticker（客戶標誌滾動展示）
- 項目卡片滾動效果
- 平滑的滾動體驗

**導航系統：**

- 清晰的頂部導航
- Menu 按鈕互動
- 項目連結互動

**使用者體驗：**

- 項目展示互動
- 服務說明展示
- 聯絡方式展示
- 社交媒體連結

### 效能優化

**資源優化：**

- Framer CDN 加速
- 圖片優化載入
- 程式碼分割

**監控：**

- Google Analytics 進行分析
- Framer Events 進行事件追蹤

### 關鍵發現

1. **Framer 平台應用**：Duties 展示了 Framer 作為設計與開發平台的完整應用
2. **實時資訊顯示**：使用實時時間與狀態顯示增強真實感
3. **動態文字效果**：打字機效果或文字動畫創造視覺吸引力
4. **Marquee Ticker**：滾動的客戶標誌展示增強信任度
5. **Rolldown 滾動動畫**：使用 Rolldown 實現流暢的滾動觸發動畫
6. **Framer Motion 整合**：充分利用 Framer Motion 的動畫能力

---

## SavoirFaire

### 網站資訊

- **網址**：https://savoirfaire.nyc / https://www.savoirfaire.nyc
- **類型**：創意工作室 / 作品集網站
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Nuxt 3（Vue 3 框架，從 `_nuxt/` 路徑可以看出）
- Vue 3
- 程式碼分割與動態載入

**3D 與互動：**

- Three.js / WebGL（從 `models/star2.gltf` 可以看出）
- GLTF 3D 模型載入
- 物理引擎（stickerPhysics.js）

**動畫技術：**

- Lottie（透過 Lottie.host）
- DotLottie Player
- 自訂動畫系統

**內容管理：**

- Prismic CMS（從 `images.prismic.io` 可以看出）
- 動態內容載入

**音效互動：**

- 音效檔案（hover.mp3, click.mp3, back.mp3）
- 互動音效反饋

**分析與監控：**

- Google Tag Manager
- Google Analytics

### 設計特色

**視覺設計：**

- "Click Anywhere" 互動提示
- 數字計數器動畫（"133"）
- 追蹤器顯示（"127"）
- 3D 元素（星星圖示）
- 動態背景

**使用者體驗：**

- 全頁面點擊互動
- 動態內容展示
- 作品集展示
- 創意工作室介紹

### 動畫技術

**3D 動畫：**

- 使用 Three.js / WebGL 載入 3D 模型（star2.gltf）
- 3D 元素互動
- 環境貼圖（env.jpg）

**Lottie 動畫：**

- 使用 Lottie.host 載入動畫
- DotLottie Player 播放動畫
- 增強視覺吸引力

**物理引擎：**

- 使用 stickerPhysics 實現物理效果
- 元素物理互動

**數字動畫：**

- 數字計數器動畫（"133"）
- 追蹤器數字顯示（"127"）
- 動態數字更新

### 視覺設計

**排版：**

- 創意的互動式排版
- 全頁面點擊互動
- 動態元素展示
- 3D 元素整合

**色彩：**

- 簡潔的配色方案
- 強調互動性
- 創意的視覺風格

### 互動設計

**全頁面點擊互動：**

- "Click Anywhere" 提示
- 頁面任意位置點擊觸發互動
- 增強探索性與互動性

**自訂游標：**

- 使用 cursor.svg 自訂游標
- 游標互動效果
- 增強互動反饋

**音效互動：**

- 懸停音效（hover.mp3）
- 點擊音效（click.mp3）
- 返回音效（back.mp3）
- 增強互動反饋

**3D 互動：**

- 3D 星星圖示互動
- 滑鼠追蹤效果
- 物理引擎互動

**追蹤器顯示：**

- 顯示點擊次數（"127"）
- 增強互動感與遊戲化體驗

**使用者體驗：**

- 全頁面探索式互動
- 作品集展示
- 動態內容載入
- 創意工作室介紹

### 效能優化

**資源優化：**

- Nuxt 3 自動程式碼分割
- 圖片優化（Prismic CDN）
- 影片優化載入（WebM 格式）
- 3D 模型優化載入

**監控：**

- Google Analytics 進行分析

### 關鍵發現

1. **全頁面點擊互動**：SavoirFaire 展示了如何實現全頁面點擊互動，增強探索性
2. **3D 元素整合**：使用 Three.js / WebGL 載入 3D 模型，增強視覺吸引力
3. **音效互動**：使用音效檔案提供互動反饋，增強沉浸感
4. **物理引擎**：使用 stickerPhysics 實現物理效果，增強互動真實感
5. **自訂游標**：使用自訂游標增強互動反饋
6. **追蹤器顯示**：顯示點擊次數增強互動感與遊戲化體驗
7. **Prismic CMS 整合**：使用 Prismic CMS 管理內容與媒體資源

---

## Shuttle

### 網站資訊

- **網址**：https://shuttle.zip
- **類型**：文件分享平台 / 開發工具
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Remix（React 框架，從 `build/` 路徑可以看出）
- React
- Tailwind CSS（從 `tailwind-XQPN44TE.css` 可以看出）
- 程式碼分割與動態載入

**後端技術：**

- Rocket（Rust 後端框架，從 `rocket-ac2c0b7216f8860ebd59.js` 可以看出）
- WebAssembly（從 `rocket-634f9598350bf2457c31.wasm` 可以看出）

**字體：**

- Inter（從 `rsms.me/inter` 可以看出）
- Mona Sans（從 Google Fonts 可以看出）

**分析與監控：**

- Google Tag Manager
- Google Analytics
- Sentry（錯誤追蹤）
- Cloudflare Insights（效能監控）
- ContentSquare（使用者行為分析）
- Facebook Pixel
- LinkedIn Insight Tag

**第三方服務：**

- Lemon Squeezy（支付處理）
- Cloudflare（CDN 與安全）

**儲存：**

- AWS S3（從 `*.s3.amazonaws.com` 可以看出）
- Backblaze B2（從 `*.backblazeb2.com` 可以看出）

### 設計特色

**視覺設計：**

- 簡潔的雲端主題設計
- 清晰的 Drag & Drop 區域
- 浮動的檔案類型圖示
- 雲朵背景增強主題感

**使用者體驗：**

- 清晰的 Drag & Drop 功能
- 免費方案展示（"2GB for Free"）
- 簡單的註冊流程
- 分享功能

### 動畫技術

**Drag & Drop 動畫：**

- 拖放視覺反饋
- 檔案類型圖示動畫
- 拖放區域高亮效果

**微互動：**

- 按鈕懸停效果
- 過渡動畫
- 載入動畫

### 視覺設計

**排版：**

- 簡潔的居中佈局
- 清晰的 Drag & Drop 區域
- 浮動的檔案類型圖示
- 雲朵背景主題

**色彩：**

- 簡潔的藍色系配色
- 強調功能清晰性
- 專業的開發工具風格

### 互動設計

**Drag & Drop 互動：**

- 核心互動功能
- 拖放視覺反饋
- 檔案類型圖示展示
- 拖放區域高亮

**按鈕互動：**

- Log In 按鈕
- Download 按鈕
- Share 按鈕（主要 CTA）
- Create Account 按鈕

**使用者體驗：**

- 簡單直觀的檔案上傳流程
- 清晰的免費方案展示
- 快速分享功能
- 簡潔的介面設計

### 效能優化

**資源優化：**

- Remix 自動程式碼分割
- WebAssembly 後端處理
- CDN 加速（Cloudflare）
- 圖片優化載入

**監控：**

- Sentry 進行錯誤追蹤
- Cloudflare Insights 進行效能監控
- ContentSquare 進行使用者行為分析
- Google Analytics 進行傳統分析

**安全性：**

- 嚴格的 Content Security Policy (CSP)
- Cloudflare 安全防護

### 關鍵發現

1. **Remix + Rocket 架構**：Shuttle 展示了 Remix 前端與 Rocket (Rust) 後端的現代架構
2. **WebAssembly 應用**：使用 WebAssembly 實現高效能後端處理
3. **Drag & Drop 核心互動**：展示了如何實現流暢的 Drag & Drop 互動體驗
4. **簡潔的開發工具設計**：展示了開發工具網站的簡潔設計方式
5. **多種分析工具整合**：使用多種工具從不同角度分析使用者行為
6. **嚴格的 CSP 政策**：展示了安全性最佳實踐
7. **雲端主題設計**：使用雲朵背景增強主題感與品牌識別

---

## KidSuper World

### 網站資訊

- **網址**：https://kidsuper.world
- **類型**：時尚品牌 / 電商網站
- **研究日期**：2025-11-17

### 技術棧

**前端技術：**

- 現代前端框架（推測使用 React 或 Vue）
- 載入進度顯示系統
- 實時時間顯示

**電商功能：**

- 購物車系統（Cart(0)）
- Music 播放功能
- 產品展示

### 設計特色

**視覺設計：**

- 時尚品牌風格
- 載入進度顯示（"99%"）
- 實時時間顯示（"BKLYN, 11.17.25 06:53:25 PM"）
- 簡潔的導航結構

**使用者體驗：**

- 清晰的品牌識別
- 購物車功能
- Music 播放功能
- 產品展示

### 動畫技術

**載入動畫：**

- 載入進度顯示（"99%"）
- 增強載入體驗

**實時資訊：**

- 實時時間顯示
- 增強真實感

### 視覺設計

**排版：**

- 時尚品牌風格
- 清晰的導航結構
- 產品展示

**色彩：**

- 品牌色彩方案
- 強調時尚感

### 互動設計

**實時資訊顯示：**

- 實時時間顯示（"BKLYN, 11.17.25 06:53:25 PM"）
- 增強真實感與互動性

**電商功能：**

- 購物車系統（Cart(0)）
- Music 播放功能
- 產品瀏覽

**使用者體驗：**

- 清晰的品牌識別
- 簡單的購物流程
- 音樂播放功能

### 效能優化

**載入優化：**

- 載入進度顯示
- 優化的資源載入

### 關鍵發現

1. **時尚品牌網站設計**：KidSuper World 展示了時尚品牌網站的設計方式
2. **實時資訊顯示**：使用實時時間顯示增強真實感
3. **載入進度顯示**：使用載入進度顯示增強載入體驗
4. **電商功能整合**：整合購物車與音樂播放功能

---

## Bigpicture Company

### 網站資訊

- **網址**：https://www.bpco.kr
- **類型**：創意廣告公司 / 作品集網站
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Next.js（React 框架，從 `_next/static` 路徑可以看出）
- React
- 程式碼分割與動態載入

**3D 與互動：**

- Three.js / WebGL（從 `three/envmap_3.hdr` 和 `three/model/t_*.glb` 可以看出）
- GLTF 3D 模型載入（多個模型：t_0.glb, t_1.glb, t_2.glb, t_3.glb, t_4.glb, bicpicture.glb）
- HDR 環境貼圖（envmap_3.hdr）

**內容管理：**

- Prismic CMS（從 `btco.cdn.prismic.io` 可以看出）
- 動態內容載入

**字體：**

- PPSupplyMono-Regular
- PPSupplySans-Regular
- NeueHelvetica55Roman
- Pretendard-Medium
- Rocksalt

**分析與監控：**

- Vercel Analytics（效能監控）
- Vercel Speed Insights（速度監控）

**部署：**

- Vercel（部署平台）

### 設計特色

**視覺設計：**

- 韓文與英文雙語設計
- 載入進度顯示（"LOADING 0%"）
- "PLEASE SCROLL DOWN" 提示
- 公司理念展示（Entertaining, Innovative, Memorable）
- 項目展示系統

**使用者體驗：**

- 清晰的導航結構（HOME, PROJECTS, CONTACT）
- 公司理念展示
- 項目展示
- 服務說明（OOH, POP-UP, OUTDOOR, DIGITAL, CREATIVE, EVENT, DESIGN, PLAN, PROPOSAL, PHOTO, VIDEO, LEASE, FOOD, ETC）

### 動畫技術

**3D 動畫：**

- 使用 Three.js / WebGL 載入多個 3D 模型
- HDR 環境貼圖
- 3D 元素互動

**載入動畫：**

- 載入進度顯示（"LOADING 0%"）
- 增強載入體驗

**滾動動畫：**

- "PLEASE SCROLL DOWN" 提示
- 滾動觸發動畫

### 視覺設計

**排版：**

- 韓文與英文雙語排版
- 清晰的層次結構
- 公司理念展示
- 項目展示系統

**色彩：**

- 專業的配色方案
- 強調創意感

### 互動設計

**載入互動：**

- 載入進度顯示（"LOADING 0%"）
- 增強載入體驗

**滾動互動：**

- "PLEASE SCROLL DOWN" 提示
- 滾動觸發動畫

**3D 互動：**

- 3D 模型展示
- 3D 元素互動

**使用者體驗：**

- 清晰的導航結構
- 公司理念展示
- 項目展示
- 服務說明

### 效能優化

**資源優化：**

- Next.js 自動程式碼分割
- 圖片優化（Next.js Image 組件）
- 3D 模型優化載入
- 字體優化載入

**監控：**

- Vercel Analytics 進行效能監控
- Vercel Speed Insights 進行速度監控

### 關鍵發現

1. **Next.js + Three.js 整合**：Bigpicture Company 展示了如何將 Next.js 與 Three.js 整合
2. **多個 3D 模型載入**：使用多個 GLTF 模型實現豐富的 3D 展示
3. **HDR 環境貼圖**：使用 HDR 環境貼圖增強 3D 渲染效果
4. **Prismic CMS 整合**：使用 Prismic CMS 管理內容與媒體資源
5. **雙語設計**：韓文與英文雙語設計，適合國際化
6. **載入進度顯示**：使用載入進度顯示增強載入體驗
7. **創意公司網站設計**：展示了創意廣告公司網站的設計方式

---

## Max Yinger

### 網站資訊

- **網址**：https://yinger.dev
- **類型**：個人作品集 / UI 工程師網站
- **研究日期**：2025-11-17

### 技術棧

**前端框架：**

- Next.js（React 框架，從 `_next/static` 路徑可以看出）
- React
- 程式碼分割與動態載入

**3D 與互動：**

- WebGL / Three.js（從 Console 警告可以看出）
- 實時 3D 渲染

**字體：**

- 自訂字體（多種字重）

**分析與監控：**

- Vercel Analytics（效能監控）
- Vercel Speed Insights（速度監控）

**部署：**

- Vercel（部署平台）

### 設計特色

**視覺設計：**

- 極簡主義設計
- 實時時間顯示（"Local time in Fort Collins Colorado is 04:55 am (UTC-6:00)"）
- 頁面尺寸顯示（"page dimensions are 0996 pixels wide by 1067 pixels high"）
- FPS 顯示（"Page is currently running at 000 frames per second"）
- 個人介紹與社交連結

**使用者體驗：**

- 清晰的個人介紹
- 實時效能指標顯示
- 社交媒體連結（Github, LinkedIn, Twitter/X, Email）

### 動畫技術

**3D 動畫：**

- 使用 WebGL / Three.js 實現實時 3D 渲染
- 實時效能監控

**實時資訊：**

- 實時時間顯示
- 頁面尺寸顯示
- FPS 顯示

### 視覺設計

**排版：**

- 極簡主義排版
- 清晰的個人介紹
- 實時效能指標顯示
- 社交媒體連結

**色彩：**

- 簡潔的配色方案
- 強調技術感

### 互動設計

**實時資訊顯示：**

- 實時時間顯示（"Local time in Fort Collins Colorado is 04:55 am (UTC-6:00)"）
- 頁面尺寸顯示（"page dimensions are 0996 pixels wide by 1067 pixels high"）
- FPS 顯示（"Page is currently running at 000 frames per second"）
- 增強技術感與互動性

**使用者體驗：**

- 清晰的個人介紹
- 實時效能指標顯示
- 社交媒體連結
- 個人作品展示

### 效能優化

**資源優化：**

- Next.js 自動程式碼分割
- 字體優化載入
- 3D 渲染優化

**監控：**

- Vercel Analytics 進行效能監控
- Vercel Speed Insights 進行速度監控
- 實時 FPS 監控

### 關鍵發現

1. **Next.js + WebGL 整合**：Max Yinger 展示了如何將 Next.js 與 WebGL/Three.js 整合
2. **實時效能監控**：使用實時 FPS 顯示展示效能優化能力
3. **實時資訊顯示**：使用實時時間、頁面尺寸、FPS 顯示增強技術感
4. **極簡主義設計**：展示了極簡主義個人作品集網站的設計方式
5. **技術展示**：通過實時效能指標展示技術能力
6. **個人品牌建立**：展示了如何建立個人品牌與作品集網站

---

## 📊 總結

### 研究範圍

本研究深入分析了 **15 個優秀設計案例網站**，涵蓋多種網站類型與技術實現方式，包括作品集網站、設計工作室、SaaS/工具、教育平台、產品展示與時尚品牌等。

### 技術發現統計

#### 前端框架使用情況

- **Next.js**：6 個網站（Notion、Limitless、SuperHi、Bigpicture Company、Max Yinger、Notion）
- **Nuxt 3**：2 個網站（SavoirFaire、UNVEIL）
- **Remix**：1 個網站（Shuttle）
- **Framer**：2 個網站（Duties、SuperHi）
- **Webflow**：1 個網站（Superpower）

#### 動畫技術使用情況

- **GSAP**：2 個網站（Superpower、SavoirFaire）
- **Lottie/DotLottie**：5 個網站（Kons、Superpower、SuperHi、Duties、SavoirFaire）
- **Three.js/WebGL**：4 個網站（SavoirFaire、Bigpicture Company、Max Yinger、Shuttle）
- **文字動畫**：3 個網站（Daniel Sun、SuperHi、Duties）
- **圖片序列動畫**：1 個網站（Limitless）

#### 互動設計特色

- **實時資訊顯示**：5 個網站（Duties、KidSuper World、Max Yinger、Limitless、Notion）
- **全頁面點擊互動**：1 個網站（SavoirFaire）
- **音效互動**：1 個網站（SavoirFaire）
- **Drag & Drop**：1 個網站（Shuttle）
- **自訂游標**：1 個網站（SavoirFaire）
- **追蹤器顯示**：1 個網站（SavoirFaire）

#### CMS 使用情況

- **Prismic CMS**：2 個網站（SavoirFaire、Bigpicture Company）
- **Contentful CMS**：1 個網站（Notion）

#### 分析工具使用情況

- **Vercel Analytics**：4 個網站（SuperHi、Bigpicture Company、Max Yinger、Shuttle）
- **Fathom Analytics**：1 個網站（Limitless）
- **Umami Analytics**：1 個網站（Kons）
- **Cloudflare Insights**：3 個網站（Kons、Limitless、Shuttle）

### 設計趨勢總結

1. **極簡主義設計**：多個網站採用極簡主義設計，強調內容本身
2. **響應式設計標準化**：所有網站都實現了響應式設計
3. **3D 元素應用**：越來越多的網站使用 3D 元素增強視覺吸引力
4. **實時資訊顯示**：多個網站使用實時資訊顯示增強真實感
5. **互動體驗增強**：全頁面點擊、音效互動等創新互動方式

### 技術選型建議

#### 前端框架

- **Next.js**：適合企業級應用、需要 SSR/SSG 的場景
- **Nuxt 3**：適合 Vue 生態系統、內容驅動的網站
- **Remix**：適合需要高效能 SSR 的應用
- **Framer**：適合設計與開發整合、快速原型

#### 動畫庫

- **GSAP**：適合複雜動畫、需要精細控制的場景
- **Lottie/DotLottie**：適合角色動畫、表情動畫、輕量級需求
- **Three.js/WebGL**：適合 3D 互動、沉浸式體驗

#### CMS

- **Prismic CMS**：適合內容驅動的網站、需要靈活內容管理
- **Contentful CMS**：適合企業級應用、多語言支援

#### 分析工具

- **Vercel Analytics**：適合 Next.js/Nuxt 專案、效能監控
- **Fathom Analytics**：適合隱私友好的分析需求
- **Umami Analytics**：適合開源、隱私友好的分析需求

### 最佳實踐總結

1. **效能優化**：使用圖片優化、程式碼分割、懶加載等策略
2. **互動設計**：實時資訊顯示、音效互動、全頁面點擊等創新方式
3. **視覺設計**：極簡主義、響應式設計、自訂字體等
4. **技術選型**：根據專案需求選擇合適的框架與工具
5. **監控與分析**：使用多種工具從不同角度分析使用者行為

---

**最後更新**：2025-11-17
