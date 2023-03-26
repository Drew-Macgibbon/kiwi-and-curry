<!-- components/BucketList.vue -->
<template>
  <div class="grid grid-cols-1 gap-4">
    <BucketListCard v-for="item in d.items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import BucketListCard from './BucketListCard.vue'
// import { BucketListItem, Tag } from '@/types'

const d = useData()

// Implement filtering logic here
// const filteredItems = computed(() => {
//   return d.items.filter((item: BucketListItem) => {
//     const categoryFilter = !props.filters.category || item.category.name === props.filters.category
//     const tagFilter = props.filters.tags.every((tag: Tag) => item.tags.includes(tag))
//     return categoryFilter && tagFilter
//   })
// })
</script>
