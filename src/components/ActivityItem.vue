<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { BUTTON_TYPE } from '@/constants'
import { ref } from 'vue'
import { PERIOD_SELECT_OPTIONS } from '@/constants'

defineProps({
  activity: {
    type: Object,
    required: true
  }
})

defineEmits(['deleteActivity'])

const secondsToComplete = ref(0)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton
        :type="BUTTON_TYPE.DANGER"
        @click="$emit('deleteActivity')"
      >
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-2xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
        class="font-mono"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
