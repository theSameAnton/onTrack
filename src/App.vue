<script setup>
import TheHeader from '@/components/Header/TheHeader.vue'
import TheNav from '@/components/Navigation/TheNav.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheProgress from '@/pages/TheProgress.vue'
import { PAGE } from '@/constants.js'
import { normalizeGetPath } from '@/functions'
import { ref } from 'vue'

const currentPage = ref(normalizeGetPath())

const goTo = page => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-timeline="goTo(PAGE.TIMELINE)" @go-to-progress="goTo(PAGE.PROGRESS)" />
  <main class="flex-grow flex-col">
    <TheActivities v-show="currentPage === PAGE.ACTIVITIES" />
    <TheTimeline v-show="currentPage === PAGE.TIMELINE" />
    <TheProgress v-show="currentPage === PAGE.PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
