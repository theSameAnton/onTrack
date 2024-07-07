<script setup>
import NavItem from '@/components/Navigation/NavItem'
import { navItems } from '@/constants'

const props = defineProps({
  currentPage: {
    type: String,
    required: true
  }
})

defineEmits(['navigate'])

defineExpose([props, navItems])
</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icons, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 duration-150 pointer-events-none': page === currentPage }"
        @click="$emit('navigate', page)"
      >
        <component
          :is="icons"
          class="h-6 w-6"
        />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
