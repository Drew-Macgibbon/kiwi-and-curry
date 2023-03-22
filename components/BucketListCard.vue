<!-- components/BucketListCard.vue -->
<template>
  <div class="bg-white p-4 rounded-md shadow-md relative">
    <h2 class="text-xl font-bold">{{ props.item.title }}</h2>
    <p class="text-gray-600">{{ props.item.description }}</p>
    <div class="flex mt-2">
      <span class="mr-2">{{ props.item.category }}</span>
      <span v-for="tag in props.item.tags" :key="tag" class="mr-1">{{
        tag
      }}</span>
    </div>
    <button @click="editItem" class="absolute top-2 right-2">Edit</button>
    <button @click="deleteItem" class="absolute top-2 right-10">Delete</button>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()

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
