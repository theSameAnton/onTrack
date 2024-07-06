<script setup>
import BaseSelect from '@/components/Base/BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'
import { ref } from 'vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  },
  activitySelectOptions: {
    required: true,
    type: Array
  }
})

const selectedActivityId = ref(1)
</script>

<template>
  <li
    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <TimelineHour :hour="props.timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
