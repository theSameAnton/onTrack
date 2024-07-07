<script setup>
import { defineProps } from 'vue'
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'

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
        @delete-activity="$emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityForm @add-activity="$emit('addActivity', $event)" />
  </div>
</template>
