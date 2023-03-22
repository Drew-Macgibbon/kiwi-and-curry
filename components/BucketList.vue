<!-- components/BucketList.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <BucketListCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import BucketListCard from './BucketListCard.vue'

// const supabase = useSupabaseClient()

const props = defineProps({
  filters: {
    type: Object as () => { category: string; tags: string[] },
    required: true
  }
})

const items = ref<BucketListItem[]>([])

// const fetchItems = async () => {
//   const { data, error } = await supabase
//     .from<BucketListItem>('bucket_list_items')
//     .select('*')
//   if (error) throw error
//   items.value = data || []
// }

// fetchItems()

// Implement filtering logic here
const filteredItems = computed(() => {
  return items.value.filter((item) => {
    const categoryFilter =
      !props.filters.category || item.category === props.filters.category
    const tagFilter = props.filters.tags.every((tag) => item.tags.includes(tag))
    return categoryFilter && tagFilter
  })
})
</script>
