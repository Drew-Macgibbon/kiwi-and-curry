<template>
  <div class="w-[100%] rounded-[12px] flex flex-col gap-2 font-recoleta font-semibold justify-between bg-white p-3 dark:border-[#475584] dark:bg-[#171C34]">
    <div class="bg-gray-100 rounded-sm p-2">
      <NuxtLink
        v-if="prev"
        class="flex items-center text-sm"
        :to="`/bucket-list/${prev.id}/${prev.title.replaceAll(' ', '-').toLowerCase()}`"
      >
        <Icon
          name="material-symbols:arrow-back-rounded"
          class="mr-2 h-[32px] w-[32px]"
        />
        {{ prev.title.length > 40 ? prev.title.substring(0, 40) + '...' : prev.title }}
      </NuxtLink>
      <p v-else class="text-sm flex items-center">Start...</p>
    </div>
    <div class="bg-gray-100 rounded-sm p-2">
      <NuxtLink
        v-if="next"
        class="flex items-center text-sm"
        :to="`/bucket-list/${next.id}/${next.title.replaceAll(' ', '-').toLowerCase()}`"
      >
        {{ next.title.length > 40 ? next.title.substring(0, 40) + '...' : next.title }}
        <Icon
          name="material-symbols:arrow-forward-rounded"
          class="ml-2 h-[32px] w-[32px]"
        />
      </NuxtLink>
      <p v-else class="text-sm flex items-center">End...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as t from '@/types'

defineProps({
  prev: {
    type: Object as () => t.BucketListItem | undefined,
    required: true
  },
  next: {
    type: Object as () => t.BucketListItem | undefined,
    required: true
  }
})
</script>
