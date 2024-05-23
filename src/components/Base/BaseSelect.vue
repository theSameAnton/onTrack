<script setup>
import BaseButton from '@/components/Base/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  options: {
    required: true,
    type: Array
  },
  placeholder: {
    type: String,
    required: true
  },
  selected: {
    type: Number
  }
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ props.placeholder }}</option>
      <option
        v-for="{ value, label } in props.options"
        :key="value"
        :value="value"
        :selected="value === props.selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
