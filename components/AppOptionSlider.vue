<!-- components/FilterSlider.vue -->
<template>
  <div class="flex flex-col gap-2 pb-4">
    <div class="flex items-center gap-2">
      <AppSwitch :type="filter.name" />
      <h5>{{ filter.name }}:</h5>
      <div class="w-auto flex">
        <span :class="optionTitle ? 'items-center flex justify-center rounded-full bg-red-300 px-3 py-1 text-xs leading-none font-semibold' : ''">
          {{ optionTitle }}
        </span>
      </div>
    </div>
    <div  v-if="filter.active" class="flex justify-between items-center gap-1 w-full">
      <div class="flex justify-between items-center gap-1 w-full">
        <div class="whitespace-nowrap">{{ filter.startLabel }}</div>
        <input
          v-model="filter.activeOption"
          type="range"
          min="1"
          :max="filter.options.length"
          step="1"
          class="w-full h-2 bg-gray-200 rounded-full outline-none appearance-none" />
        <div class="whitespace-nowrap">
          {{ filter.endLabel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as t from '@/types'

const pref = usePreferences()

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

await pref.loadBooleanFilter(props.type as t.BooleanFilterKey)

const filter = computed(() => pref.booleanFilters.filter((f) => props.type === f.name)[0])
const optionTitle = ref('')

watch(
  () => [filter.value.activeOption, filter.value.active],
  ([activeOption, filterActive]) => {
    const f = filter.value
    console.log('optionTitle', activeOption, filterActive)
    if (activeOption === 0) activeOption = 1
    if (f.options.length > 0 && activeOption && filterActive) optionTitle.value = f.options[activeOption - 1].name
    else optionTitle.value = ''
  },
  { immediate: true }
)

console.log('Filters', filter)
</script>
