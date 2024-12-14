<template>
  <nav class="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
    <div class="flex w-full items-center justify-between px-4 py-2">
      <div class="flex items-center">
        <div class="relative h-12 w-32 md:h-14 md:w-40 lg:h-16 lg:w-48">
          <NuxtImg
            src="/finctory_LOGO.svg"
            alt="Finctory - 斐闊"
            class="absolute inset-0 h-full w-full"
            format="png"
            loading="eager"
            preload
            style="object-fit: contain; background: transparent"
            provider="ipx"
            quality="100"
          />
        </div>
      </div>
    </div>
  </nav>
  <slot />
</template>

<script setup></script>

<style scoped>
nav {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 50;
}
</style>
