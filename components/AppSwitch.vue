<template>
  <HeadlessSwitch
    :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
    class="relative inline-flex h-[19px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    @update:model-value="updateFilter"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="enabled ? 'translate-x-[17px]' : 'translate-x-0'"
      class="pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
    />
  </HeadlessSwitch>
</template>

<script setup lang="ts">

import * as t from '@/types'

const pref = usePreferences()

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value: string): boolean => {
      const allowedTypes: t.BooleanFilterKey[] = ['cost', 'difficulty', 'time', 'status']
      return allowedTypes.includes(value as t.BooleanFilterKey)
    }
  }
})

const enabled = computed(() => pref.isBooleanFilterActive(props.type as t.BooleanFilterKey))

const updateFilter = (newValue: boolean) => {
  pref.setBooleanFilter(newValue, props.type as t.BooleanFilterKey)
}

</script>
