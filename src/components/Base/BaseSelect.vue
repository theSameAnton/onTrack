<script setup>
import BaseButton from '@/components/Base/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { BUTTON_TYPE } from '@/constants'
import { normalizeSelectValue } from '@/functions'

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
    type: [Number, String]
  }
})

const emit = defineEmits(['select'])

const select = value => {
  emit('select', normalizeSelectValue(value))
}

const isNotSelected = computed(() => {
  return props.selected === null || props.selected === undefined
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton
      :type="BUTTON_TYPE.REGULAR"
      @click="select(null)"
    >
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event.target.value)"
    >
      <option
        :selected="isNotSelected"
        disabled
        value=""
      >
        {{ props.placeholder }}
      </option>
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
