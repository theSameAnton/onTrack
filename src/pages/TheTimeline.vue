<script setup>
import TimelineItem from '@/components/TimelineItem'

const props = defineProps({
  timelineItems: {
    type: Array,
    required: true
  },
  activitySelectOptions: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in props.timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="props.activitySelectOptions"
      />
    </ul>
  </div>
</template>
