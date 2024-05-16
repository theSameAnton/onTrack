<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icons, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 duration-150 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icons" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
//Components
import NavItem from '@/components/Navigation/NavItem.vue'
import { PAGE } from '@/constants.js'
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

const props = defineProps(['currentPage'])

const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE.TIMELINE]: ClockIcon,
  [PAGE.ACTIVITIES]: ListBulletIcon,
  [PAGE.PROGRESS]: ChartBarIcon
}

defineExpose([props, navItems])
</script>
