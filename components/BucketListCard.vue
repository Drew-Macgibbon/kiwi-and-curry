<!-- components/BucketListCard.vue -->
<template>
   <div class="bg-white border border-gray-200 rounded shadow-md p-4 max-w-md mx-auto">
    <div class="flex">
      <div class="w-1/4">
        <img class="w-full h-24 object-cover rounded" src="https://via.placeholder.com/150" alt="Bucket List Item" />
      </div>
      <div class="w-3/4 ml-4">
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-600 text-sm">{{ item.created_at | formatDate }}</p>
        <div class="mt-2">
          <span class="inline-block bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{{ item.category.name }}</span>
          <span v-for="tag in item.tags" :key="tag.id" class="ml-2 inline-block bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{{ tag.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
