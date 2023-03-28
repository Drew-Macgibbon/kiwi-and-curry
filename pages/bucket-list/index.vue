<template>
  <div class="flex flex-col max-w-[900px] mx-auto">
    <div class="bg-gradient-to-bl from-emerald-500 to-emerald-900 rounded-xl shadow-xl flex justify-center items-center py-8 px-4 mb-8">
      <h1 class="text-lg md:text-2xl text-white font-bold text-center">
        Kiwi & Curry Bucket List
      </h1>
    </div>
    <div class="flex flex-col-reverse md:flex-row gap-4 h-full">
      <div class="w-full md:w-2/3">
        <BucketList />
      </div>
      <div class="flex flex-col w-full md:w-1/3 min-h-full relative">
        <Filters class="sticky top-[84px] border border-gray-200" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const d = useBucketList()
d.getBucketList()

</script>

<style scoped></style>
