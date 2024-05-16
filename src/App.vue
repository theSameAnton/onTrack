<script setup>
//Components
import TheHeader from '@/components/Header/TheHeader.vue'
import TheNav from '@/components/Navigation/TheNav.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheProgress from '@/pages/TheProgress.vue'

//Constants
import { PAGE } from '@/constants.js'
import navItems from '@/components/Navigation/TheNav.vue'

import { ref } from 'vue'

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

<template>
  <TheHeader />
  <main class="flex-grow flex-col">
    <TheActivities v-show="currentPage === PAGE.ACTIVITIES" />
    <TheTimeline v-show="currentPage === PAGE.TIMELINE" />
    <TheProgress v-show="currentPage === PAGE.PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="currentPage = $event" />
</template>

<style scoped></style>
