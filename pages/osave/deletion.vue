<template>
  <section class="mx-auto mt-[5rem] max-w-2xl justify-center px-4 py-10 text-gray-800">
    <main class="doc">
      <header>
        <h1>用戶資料刪除指示</h1>
        <p class="meta">適用於以 Facebook 登入之使用者</p>
      </header>

      <section>
        <h2>方法 A：App 內刪除</h2>
        <ol>
          <li>開啟財伴 oSave App → 設定 → 帳號與隱私 → <strong>刪除帳號</strong>。</li>
          <li>完成身分驗證後，系統將刪除你的帳號與關聯資料。</li>
        </ol>
      </section>

      <section>
        <h2>方法 B：提交刪除申請</h2>
        <p>
          寄送郵件至
          <a :href="`mailto:${PRIVACY_EMAIL}`">{{ PRIVACY_EMAIL }}</a
          >， 信件主旨請寫「資料刪除申請」，並附上：
        </p>
        <ul>
          <li>你的登入 Email（或 Facebook UID）。</li>
          <li>同意刪除之確認聲明。</li>
        </ul>
        <p>我們將於合理期間內（通常 7–30 日內）完成刪除，法令要求需保留之資料除外。</p>
      </section>

      <section>
        <h2>Facebook 取消授權（Deauthorization）</h2>
        <p>
          若你在 Facebook 設定中對本 App 取消授權，Facebook 可能傳送刪除請求至我們的伺服器回呼端點；
          我們將依請求刪除相關資料。若需更多資訊，請參考
          <router-link to="/osave/privacy">隱私權政策</router-link>。
        </p>
      </section>

      <section>
        <h2>聯絡我們</h2>
        <p>
          如對資料刪除流程有任何疑問，請來信
          <a :href="`mailto:${PRIVACY_EMAIL}`">{{ PRIVACY_EMAIL }}</a
          >。
        </p>
      </section>

      <footer class="note">
        <p>（此頁面提供 Facebook 審查所需之資料刪除指示 URL。）</p>
      </footer>
    </main>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const PRIVACY_EMAIL = 'osave@finctory.com'

onMounted(() => {
  document.title = '用戶資料刪除｜財伴 oSave'
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
ul,
ol {
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
