<template>
  <div>
    <p>{{ categories }}</p>
  </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient()
const { data: categories } = await useAsyncData('categories', async () => {
  const { data } = await client.from('categories').select('id, name')
  return data
})

</script>
