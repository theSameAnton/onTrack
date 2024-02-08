<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icons, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 duration-150 pointer-events-none': page === currentPage }"
        @click="currentPage = page"
      >
        <component :is="icons" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
//Components
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'
import NavItem from '@/components/Navigation/NavItem.vue'

import { PAGE } from '@/constants.js'
import { ref } from 'vue'

const navItems = {
  [PAGE.TIMELINE]: ClockIcon,
  [PAGE.ACTIVITIES]: ListBulletIcon,
  [PAGE.PROGRESS]: ChartBarIcon
}

const normalizeGetPath = () => {
  const hash = window.location.hash.slice(1)

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE.TIMELINE

  return PAGE.TIMELINE
}

const currentPage = ref(normalizeGetPath())

</script>
