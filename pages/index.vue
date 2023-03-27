<template>
  <div class="mx-auto flex flex-col gap-4">
    <div class="flex justify-center items-center py-10">
      <h1 class="text-[5vw] font-bold"> Kiwi & Curry</h1>
    </div>
    <AppHero />
    <!-- <button
      class="bg-blue-500 p-6 rounded-md shadow-md mt-4"
      @click="d.bulkInsertItems()"
    >
      upload bucket list items
    </button> -->
    <div class="flex flex-col-reverse md:flex-row gap-4 h-full">
      <div class="w-full md:w-2/3">
        <BucketList />
      </div>
      <div class="flex flex-col w-full md:w-1/3 min-h-full relative">
        <Filters
          class="sticky top-[84px] border border-gray-200"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const d = useBucketList()
d.getBucketList()

</script>
