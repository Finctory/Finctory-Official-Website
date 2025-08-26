<template>
  <section class="mx-auto mt-[5rem] max-w-2xl justify-center px-4 py-10 text-gray-800">
    <main class="doc">
      <header>
        <h1>財伴 oSave｜隱私權政策</h1>
        <p class="meta">最後更新：{{ LAST_UPDATED }}</p>
      </header>

      <section>
        <h2>我們是誰</h2>
        <p>
          本服務由 <strong>{{ COMPANY_NAME }}</strong
          >（以下簡稱「我們」）提供。 聯絡方式：<a :href="`mailto:${CONTACT_EMAIL}`">{{
            CONTACT_EMAIL
          }}</a
          >。
        </p>
      </section>

      <section>
        <h2>我們蒐集哪些資料</h2>
        <ul>
          <li>帳號資料：姓名（或暱稱）、電子郵件、Facebook 基本公開資料（依授權同意範圍）。</li>
          <li>使用資料：裝置資訊、操作事件紀錄、錯誤日誌與分析資料（僅用於改善服務）。</li>
          <li>
            理財資料（選擇性）：你主動輸入或同意連結之交易／帳務／帳單資料，用於產生儀表板與建議。
          </li>
        </ul>
      </section>

      <section>
        <h2>資料使用目的</h2>
        <ul>
          <li>身分驗證與登入（透過 Firebase Authentication）。</li>
          <li>提供個人化儀表板與理財建議（演算法運算）。</li>
          <li>維運安全與效能監測、除錯與統計分析。</li>
          <li>經你同意的研究或新功能測試。</li>
        </ul>
      </section>

      <section>
        <h2>第三方服務</h2>
        <p>
          我們使用第三方服務（例如：Firebase、Meta/Facebook Login、{{
            THIRD_PARTIES
          }}）。各服務的資料處理方式請參考其官方說明。
        </p>
      </section>

      <section>
        <h2>資料保存與刪除</h2>
        <p>
          你可隨時要求刪除帳號與相關個資。我們將於合理期間內完成刪除（常見為 7–30
          日內），法律規範需保存者除外。 操作方式請見
          <router-link to="/osave/deletion">用戶資料刪除</router-link>。
        </p>
      </section>

      <section>
        <h2>資料安全</h2>
        <p>
          我們採取業界通行的安全措施（例如傳輸加密、存取控管）。惟任何網路服務皆無法保證 100% 安全。
        </p>
      </section>

      <section>
        <h2>未成年人</h2>
        <p>若你未達當地法定年齡，需經法定代理人同意後方可使用本服務。</p>
      </section>

      <section>
        <h2>聯絡我們</h2>
        <p>
          如對本政策有疑問，請來信 <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a
          >。
        </p>
      </section>

      <section>
        <h2>政策更新</h2>
        <p>我們可能不定期更新本政策並公告最新日期；重大變更將另行通知。</p>
      </section>

      <footer class="note">
        <p>（本頁為一般範本，僅供參考，非法律意見；正式上線可請法遵律師調整。）</p>
      </footer>
    </main>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const COMPANY_NAME = '斐闊有限公司（Finctory Ltd.）'
const CONTACT_EMAIL = 'finctory@gmail.com'
const LAST_UPDATED = '2025-08-26'
// 可用逗號分隔補充實際第三方服務名稱
const THIRD_PARTIES = 'Crashlytics／Analytics'

onMounted(() => {
  document.title = '隱私權政策｜財伴 oSave'
})
</script>

<style scoped>
.doc {
  max-width: 860px;
  margin: 40px auto;
  padding: 0 16px 64px;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    Arial,
    sans-serif;
  line-height: 1.75;
}
h1 {
  font-size: 1.9rem;
  margin: 0 0 0.25rem;
}
h2 {
  font-size: 1.35rem;
  margin: 1.75rem 0 0.5rem;
}
.meta {
  color: #666;
  margin-bottom: 1.25rem;
}
ul {
  padding-left: 1.1rem;
}
.note {
  margin-top: 2rem;
  color: #6b7280;
  font-size: 0.95rem;
}
a {
  text-decoration: underline;
}
</style>
