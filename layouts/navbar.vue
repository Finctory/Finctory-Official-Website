<template>
  <nav class="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
    <div class="flex w-full items-center justify-between p-4">
      <img class="w-24 md:w-32 lg:w-40" src="/finctory_LOGO.svg" alt="Finctory - 斐闊" />
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
