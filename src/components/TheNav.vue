<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li v-for="(icons, page) in navItems" :key="page" class="flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" :href="`#${page}`">
          <component :is="icons" class="h-6 w-6" />
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
//Icons
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>
