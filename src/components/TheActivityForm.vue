<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/Base/BaseButton.vue'
import { ref, nextTick } from 'vue'
import { id } from '@/functions.js'

const emit = defineEmits(['addActivity'])

const handleSubmit = async () => {
  emit('addActivity', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''

  await nextTick()

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

const name = ref('')
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="sticky bottom-[57px] flex gap-2 bg-white p-4 border-t"
  >
    <input
      type="text"
      placeholder="Add an activity"
      class="w-full rounded border text-xl px-4"
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
