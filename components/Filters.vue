<!-- components/Filters.vue -->
<template>
  <div class="bg-white p-4 rounded-md shadow-md">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    <div class="mb-4">
      <h3 class="font-semibold mb-2">Category</h3>
      <select v-model="selectedCategory" class="w-full">
        <option value="">All</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <h3 class="font-semibold mb-2">Tags</h3>
      <div v-for="tag in tags" :key="tag" class="mb-2">
        <input type="checkbox" :id="tag" :value="tag" v-model="selectedTags" />
        <label :for="tag">{{ tag }}</label>
      </div>
    </div>
    <!-- Add more filters for time and money here -->
  </div>
</template>

<script lang="ts" setup>

defineProps({
  categories: {
    type: Array as () => string[],
    required: true
  },
  tags: {
    type: Array as () => string[],
    required: true
  }
})

const selectedCategory = ref('')
const selectedTags = ref<string[]>([])

function setCategory() {
  $emit('update-filters', {
    category: selectedCategory.value,
    tags: selectedTags.value
  })
}
function setTags() {
  $emit('update-filters', {
    category: selectedCategory.value,
    tags: selectedTags.value
  })
}
</script>
