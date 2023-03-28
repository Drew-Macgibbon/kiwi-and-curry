<!-- components/BucketListCard.vue -->
<template>
  <div
    class="bg-white border border-gray-200 rounded shadow-md p-4 w-full flex items-center"
  >
    <div class="w-[150px] h-full border border-gray-200 rounded-md">
      <img
        class="w-full h-full object-cover rounded"
        :src="`https://nuhchyxmsixjuixlmere.supabase.co/storage/v1/object/public/public/${item.featured_image}`"
        alt="Bucket List Item"
      />
    </div>
    <div class="w-3/4 ml-4 flex flex-col gap-2">
      <NuxtLink :to="`/bucket-list/${item.id}/${item.title.replaceAll(' ', '-').toLowerCase()}`">
        <h2 class="text-lg font-semibold">{{ item.title.substring(0, 46) }}...</h2>
      </NuxtLink>
      <div>
        <span
          class="inline-block bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full"
        >
          {{ item.category.name }}
        </span>
        <span
          v-for="tag in item.tags"
          :key="tag.id"
          class="ml-2 inline-block bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded-full"
        >
          {{ tag.name }}
        </span>
      </div>
      <!-- <p
        v-if="item.body"
        class="text-gray-600 text-sm"
      >
        {{ item.body.substring(0, 160) }}...
      </p> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BucketListItem } from '~~/types'
const supabase = useSupabase()

const props = defineProps({
  item: {
    type: Object as () => BucketListItem,
    required: true
  }
})

async function editItem() {
  // Implement editing logic, either in-place or using a modal
}

async function deleteItem() {
  const { error } = await supabase
    .from('bucket_list_items')
    .delete()
    .match({ id: props.item.id })
  if (error) {
    console.error('Error deleting item:', error.message)
  } else {
    console.log('Item deleted')
    // Update the list of items or emit an event to the parent component
  }
}
</script>
