<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { ref } from 'vue'

const periodSelectOptions = [
  { value: 15, label: '0:15' },
  { value: 30, label: '0:30' },
  { value: 45, label: '0:45' }
]

defineProps({
  activity: {
    type: String,
    required: true
  }
})

const secondsToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton>
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-2xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="h:mm"
        :options="periodSelectOptions"
        class="font-mono"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
