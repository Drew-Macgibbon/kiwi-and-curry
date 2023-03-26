<template>
  <HeadlessListbox v-model="selectedItems">
    <HeadlessListboxButton
      class="w-full py-2 border-gray-600 border mb-2 rounded-md flex justify-between px-4"
    >
      {{ selectedItems.name ? selectedItems.name : 'Select category' }}
      <Icon name="mdi:chevron-down" size="22px" />
    </HeadlessListboxButton>
    <HeadlessListboxOptions
      class="absolute z-10 bg-white shadow-lg rounded-md overflow-hidden flex flex-wrap gap-2 p-2 text-xs border-gray-600 border"
    >
      <HeadlessListboxOption
        v-for="item in props.items"
        :key="item.id"
        v-slot="{ active, selected }: { active: Boolean, selected: Boolean }"
        class="cursor-pointer"
        :value="item"
      >
        <li
          :class="
            selected || active
              ? 'bg-blue-500 text-white px-3 py-1 rounded-full flex justify-center items-center'
              : 'bg-gray-100 text-black px-3 py-1 rounded-full flex justify-center items-center'
          "
        >
          {{ item.name }}
        </li>
      </HeadlessListboxOption>
    </HeadlessListboxOptions>
  </HeadlessListbox>
</template>

<script setup lang="ts">
import { Category } from '@/types'

const props = defineProps({
  items: {
    type: Array as () => Category[],
    required: true
  }
})

console.log('item dropdown', props.items)

const selectedItems = ref({} as Category)
</script>
