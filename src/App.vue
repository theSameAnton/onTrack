<script setup>
//Component
import { CheckCircleIcon } from '@heroicons/vue/24/solid/index.js'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#1">
      <img alt="OnTrack logo" src="@/assets/img/logo.png" class="h-9" />
    </a>
    <a href="#2">
      <div v-if="true" class="flex items-center gap-1">
        Day completed!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>
          Progress:
          <span class="font-mono">20%</span>
        </div>
        <div class="h-3 w-3 right-full bg-red-500 rounded-2xl"></div>
      </div>
    </a>
  </header>
  <main></main>
</template>

<style scoped></style>
