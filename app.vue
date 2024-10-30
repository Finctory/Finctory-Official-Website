<template>
  <div class="flex h-full w-full flex-col">
    <NuxtLayout name="navbar">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Finctory - 斐闊',
  meta: [
    {
      name: 'description',
      content: '我們是斐闊，Finctory，致力於利用人工智慧技術，協助個人達成金錢控管的目標。',
    },
    {
      name: 'keywords',
      content: 'Finctory, 存錢, 儲蓄, 建議, 財務, AI',
    },
    {
      name: 'author',
      content: 'Finctory',
    },
    {
      property: 'og:title',
      content: 'Finctory - 斐闊',
    },
    {
      property: 'og:description',
      content: '我們是斐闊，Finctory，致力於利用人工智慧技術，協助個人達成金錢控管的目標。',
    },
    {
      property: 'og:url',
      content: 'https://www.finctory.com',
    },
  ],
  link: [
    {
      rel: 'icon',
      href: '/thumbnail.svg',
    },
  ],
  htmlAttrs: {
    lang: 'zh-TW',
  },
})
</script>

<style scoped></style>
