<script setup>
import { defineProps } from 'vue'
import ActivityItem from '@/components/ActivityItem.vue'

const props = defineProps({
  activities: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="(activity, index) in props.activities"
        :key="index"
        :activity="activity"
      />
    </ul>
  </div>
</template>
