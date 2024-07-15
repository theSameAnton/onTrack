<script setup>
import TheHeader from '@/components/Header/TheHeader'
import TheNav from '@/components/Navigation/TheNav'
import TheActivities from '@/pages/TheActivities'
import TheTimeline from '@/pages/TheTimeline'
import TheProgress from '@/pages/TheProgress'
import { PAGE } from '@/constants'
import { normalizeGetPath, generateTimelineItems, generateActivitySelectOptions, generateActivities } from '@/functions'
import { computed, ref } from 'vue'

const timelineItems = generateTimelineItems()

const currentPage = ref(normalizeGetPath())
const activities = ref(generateActivities())

const activitySelectOptions = computed(() => {
  return generateActivitySelectOptions(activities.value)
})

const goTo = page => {
  currentPage.value = page
}

const deleteActivity = activity => {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

const addActivity = activity => {
  if (activity.name != null && activity.name.trim() !== '') {
    activities.value.push(activity)
  }
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader
      @go-to-timeline="goTo(PAGE.TIMELINE)"
      @go-to-progress="goTo(PAGE.PROGRESS)"
    />
    <main class="flex-grow flex flex-col">
      <TheActivities
        v-show="currentPage === PAGE.ACTIVITIES"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        @delete-activity="deleteActivity"
        @add-activity="addActivity"
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
  </div>
</template>
