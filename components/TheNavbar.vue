<!-- components/Navbar.vue -->
<template>
  <nav class="bg-white grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] justify-center items-center w-full z-50 shadow-md h-[60px] fixed">
    <div class="flex justify-center items-center">
      <NuxtLink to="/">
        <p class="font-bold text-lg">Kiwi & Curry</p>
      </NuxtLink>
    </div>
    <div class="flex items-center gap-4">
      <p> | </p>
      <NuxtLink to="/bucket-list">
        <p class="text-sm">Bucket list</p>
      </NuxtLink>
    </div>
    <div>
      <LoginButton />
    </div>
    <!-- <div class="flex justify-between">
      <div
        v-if="user"
        class="flex items-center"
      >
        <img
          :src="user?.avatar"
          alt="Avatar"
          class="w-8 h-8 rounded-full mr-4"
        >
        <span>{{ user?.username || user?.email }}</span>
      </div>
    </div> -->
  </nav>
</template>

<script setup lang="ts">

const user = useSupabaseUser()

// const u = useUserStore()
// u.setUser(null)

</script>
