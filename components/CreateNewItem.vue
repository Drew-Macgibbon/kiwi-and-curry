<!-- components/NewItemForm.vue -->
<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="form.title" required />
    </div>
    <!-- Add more form fields for description, category, tags, etc. -->
    <button type="submit">Add Item</button>
  </form>
</template>

<script lang="ts" setup>
const form = ref({
  title: '',
  // Add more fields for description, category, tags, etc.
})

const submitForm = async () => {
  // Send form data to Supabase to create a new item
  const { error } = await supabase
    .from('bucket_list_items')
    .insert([form.value])
  if (error) {
    console.error('Error creating item:', error.message)
  } else {
    console.log('Item created')
    // Clear the form or close the modal
  }
}
</script>
