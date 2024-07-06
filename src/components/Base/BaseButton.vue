<script>
import { BUTTON_TYPE } from '@/constants'

const typeClasses = {
  [BUTTON_TYPE.DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE.DEFAULT]: 'bg-gray-100 enabled:hover:bg-gray-200'
}
</script>

<script setup>
import { BUTTON_TYPE } from '@/constants'

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE.DEFAULT
  }
})
</script>

<template>
  <button :class="`rounded p-3 disabled:cursor-not-allowed disabled:opacity-50 ${typeClasses[type]}`">
    <slot />
  </button>
</template>
