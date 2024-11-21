<template>
  <div
    class="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-green-100 to-white p-4 sm:p-8"
  >
    <div class="mb-8 mt-16 w-full max-w-4xl rounded-lg bg-white bg-opacity-95 p-4 shadow-lg sm:p-8">
      <h1
        class="break-words text-left text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <span
          v-for="(char, index) in title"
          :key="index"
          class="animate-fade-in-char inline-block"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <template v-if="char === ' '">&nbsp;</template>
          <template v-else>{{ char }}</template>
        </span>
      </h1>
      <p
        class="mt-4 break-words text-left text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl"
      >
        <span
          v-for="(char, index) in description"
          :key="index"
          class="animate-fade-in-char inline-block"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <template v-if="char === ' '">&nbsp;</template>
          <template v-else>{{ char }}</template>
        </span>
      </p>
    </div>
    <div class="flex w-full max-w-4xl flex-col items-center space-y-4">
      <a
        href="https://www.facebook.com/finctory"
        target="_blank"
        class="flex w-full items-center justify-center rounded-lg bg-blue-600 p-4 text-center text-xl text-white shadow-lg transition hover:bg-blue-700"
      >
        <img src="/facebook.png" alt="Facebook" class="mr-2 h-6 w-6" />
        Facebook
      </a>
      <a
        href="https://www.youtube.com/@Finctory"
        target="_blank"
        class="flex w-full items-center justify-center rounded-lg bg-red-600 p-4 text-center text-xl text-white shadow-lg transition hover:bg-red-700"
      >
        <img src="/youtube.png" alt="Youtube" class="mr-2 h-6 w-6" />
        Youtube
      </a>
      <a
        href="mailto:finctory@gmail.com"
        target="_blank"
        class="flex w-full items-center justify-center rounded-lg bg-orange-400 p-4 text-center text-xl text-white shadow-lg transition hover:bg-orange-600"
      >
        <img src="/email.png" alt="Email" class="mr-2 h-6 w-6" />
        Email
      </a>
      <a
        href="https://invoice-doctor-dev.finctory.com"
        target="_blank"
        class="flex w-full items-center justify-center rounded-lg bg-green-400 p-4 text-center text-xl text-white shadow-lg transition hover:bg-green-500"
      >
        <img src="/thumbnail.png" alt="發票醫生" class="mr-2 h-6 w-6" />
        發票醫生
      </a>
    </div>
    <div class="mt-8 w-full rounded-lg bg-gray-100 p-8 shadow-lg">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-900">榮譽榜</h2>
      <div class="flex flex-wrap justify-center">
        <img
          src="/award_1.png"
          alt="Award 1"
          class="m-2 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
        />
        <img
          src="/award_2.png"
          alt="Award 2"
          class="m-2 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
        />
        <img
          src="/award_3.png"
          alt="Award 3"
          class="m-2 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
        />
        <img
          src="/award_4.png"
          alt="Award 4"
          class="m-2 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
        />
        <img
          src="/award_5.png"
          alt="Award 5"
          class="m-2 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('斐闊．Finctory')
const description = ref('「財務韌性，科技共行」')
</script>

<style scoped>
@keyframes fadeInChar {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-char {
  animation: fadeInChar 0.5s forwards;
}
</style>
