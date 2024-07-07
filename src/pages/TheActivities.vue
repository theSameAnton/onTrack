<script setup>
import { defineProps, ref } from 'vue'
import ActivityItem from '@/components/ActivityItem.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  activities: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['addActivity', 'deleteActivity'])

const newActivity = ref(null)

const handleSubmit = () => {
  emit('addActivity', newActivity.value)
  newActivity.value = null
}
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="(activity, index) in props.activities"
        :key="index"
        :activity="activity"
        @delete-activity="emit('deleteActivity', activity)"
      />
    </ul>
    <form
      @submit.prevent="handleSubmit"
      class="sticky bottom-[57px] flex gap-2 bg-white p-4 border-t"
    >
      <input
        type="text"
        placeholder="Add an activity"
        class="w-full rounded border text-xl px-4"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
