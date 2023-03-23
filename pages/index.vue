<template>
  <div class="container mx-auto p-4">
    <DataTest />
    <button
      class="bg-blue-500 p-6 rounded-md shadow-md mt-4"
      @click="d.fetchData()"
    >
      get bucket list items
    </button>
    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-2/3">
        <BucketList :filters="filters" />
      </div>
      <div class="w-full md:w-1/3">
        <Filters
          :categories="categories"
          :tags="tags"
          @update-filters="updateFilters"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const d = useData()

const filters = ref({ category: '', tags: [] })

const categories = ['Adventure', 'Culture', 'Nature']
const tags = ['Hiking', 'Food', 'Beaches']

const updateFilters = (newFilters) => {
  filters.value = newFilters
}
</script>
