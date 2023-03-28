<template>
  <div class="flex flex-col max-w-[900px] mx-auto">
    <h1 class="text-[5vw] font-bold text-center pb-20">
      Our Bucket List
    </h1>
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
