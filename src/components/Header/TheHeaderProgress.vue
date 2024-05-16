<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid/index.js'
import { PAGE } from '@/constants.js'
</script>

<template>
  <a :href="`#${PAGE.PROGRESS}`">
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
</template>
