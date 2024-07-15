<script setup>
import { defineProps } from 'vue'
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivityEmpty from '@/components/TheActivityEmpty.vue'

const props = defineProps({
  activities: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col h-full">
    <ul
      v-if="activities.length"
      class="grow divide-y overflow-auto"
    >
      <ActivityItem
        v-for="activity in props.activities"
        :key="activity.id"
        :activity="activity"
        @delete-activity="$emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityEmpty v-else />
    <TheActivityForm @add-activity="$emit('addActivity', $event)" />
  </div>
</template>
