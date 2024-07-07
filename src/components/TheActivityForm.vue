<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/Base/BaseButton.vue'
import { ref, nextTick } from 'vue'

const emit = defineEmits(['addActivity'])

const handleSubmit = async () => {
  emit('addActivity', activity.value)
  activity.value = ''

  await nextTick()

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

const activity = ref('')
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
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
