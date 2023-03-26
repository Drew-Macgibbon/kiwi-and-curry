<template>
  <div class="container bg-white p-4 rounded-md shadow-md">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    <div class="mb-4">
      <h3 class="font-semibold mb-2">Category</h3>
      <AppSelect :items="c.categories" />
    </div>
    <div class="mb-4">
      <h3 class="font-semibold mb-2">Tags</h3>
      <AppMultiSelect :items="tag.tags" />
      <!-- <div class="flex flex-wrap gap-2">
        <div v-for="tag in tags" :key="tag.id" class="mb-2 flex justify-center items-center">
          <input
            :id="String(tag.id)"
            v-model="selectedTags"
            type="checkbox"
            :value="tag.name"
          />
          <label :for="String(tag.id)" class="ml-2">
            {{ tag.name }}
          </label>
        </div>
      </div> -->
    </div>
    <div
      v-for="option in pref.booleanFilters"
      :key="option.id"
    >
      <AppOptionSlider :type="option.name" />
    </div>
    <!-- Add more filters for time and money here -->
  </div>
</template>

<script lang="ts" setup>

const pref = usePreferences()

const c = useCategories()
c.getCategories()

const tag = useTags()
tag.getTags()

</script>
