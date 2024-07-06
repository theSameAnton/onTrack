<script setup>
import TheHeader from '@/components/Header/TheHeader'
import TheNav from '@/components/Navigation/TheNav'
import TheActivities from '@/pages/TheActivities'
import TheTimeline from '@/pages/TheTimeline'
import TheProgress from '@/pages/TheProgress'
import { PAGE } from '@/constants'
import { normalizeGetPath, generateTimelineItems, generateActivitySelectOptions } from '@/functions'
import { ref } from 'vue'

const timelineItems = generateTimelineItems()

const currentPage = ref(normalizeGetPath())
const activities = ['Coding', 'Reading', 'Training']

const activitySelectOptions = generateActivitySelectOptions(activities)

const goTo = page => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader
    @go-to-timeline="goTo(PAGE.TIMELINE)"
    @go-to-progress="goTo(PAGE.PROGRESS)"
  />
  <main class="flex-grow flex-col">
    <TheActivities
      v-show="currentPage === PAGE.ACTIVITIES"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
    />
    <TheTimeline
      v-show="currentPage === PAGE.TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheProgress v-show="currentPage === PAGE.PROGRESS" />
  </main>
  <TheNav
    :current-page="currentPage"
    @navigate="goTo($event)"
  />
</template>
