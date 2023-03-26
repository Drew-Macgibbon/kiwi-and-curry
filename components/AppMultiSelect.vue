<template>
  <div>
    <HeadlessListbox
      v-model="selectedItems"
      multiple
      default-value="Select tags"
    >
      <HeadlessListboxButton
        class="w-full py-2 border-gray-600 border mb-2 rounded-md flex justify-between px-4"
      >
        Select tags
        <Icon name="mdi:chevron-down" size="22px" />
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        class="absolute z-10 bg-white shadow-lg rounded-md overflow-hidden flex flex-wrap gap-2 p-2 text-xs border-gray-600 border"
      >
        <HeadlessListboxOption
          v-for="item in props.items"
          :key="item.id"
          v-slot="{ active, selected }: { active: Boolean, selected: Boolean }"
          :value="item"
          class="cursor-pointer"
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
    <div class="flex flex-wrap gap-2 items-center text-xs">
      <span
        v-for="item in selectedItems"
        :key="item.id"
        class="bg-blue-500 text-white px-3 py-1 rounded-full flex justify-center items-center"
      >
        {{ item.name }}
        <Icon
          name="material-symbols:close-sharp"
          class="ml-1 cursor-pointer origin-center hover:scale-125"
          @click="selectedItems = selectedItems.filter((i) => i.id !== item.id)"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@/types'

const props = defineProps({
  items: {
    type: Array as () => Tag[],
    required: true
  }
})

console.log('item dropdown', props.items)

const selectedItems = ref([] as Tag[])
</script>
