<template>
  <div class="container mx-auto p-4">
    <DataTest />
    <!-- <div class="flex flex-col md:flex-row gap-4">
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
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// import BucketList from '~/components/BucketList.vue'
// import Filters from '~/components/Filters.vue'

// const filters = ref({ category: '', tags: [] })

// const categories = ['Adventure', 'Culture', 'Nature']
// const tags = ['Hiking', 'Food', 'Beaches']

// const updateFilters = (newFilters) => {
//   filters.value = newFilters
// }
</script>
