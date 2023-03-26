<!-- components/Navbar.vue -->
<template>
  <nav class="bg-white px-6 py-3 shadow-md w-full z-50">
    <div class="container mx-auto flex justify-between">
      <div class="flex justify-center items-center">
        <a href="/" class="font-bold text-xl">Kiwi & Curry</a>
      </div>
      <LoginButton />
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
    </div>
  </nav>
</template>

<script setup lang="ts">

const user = useSupabaseUser()

// const u = useUserStore()
// u.setUser(null)

</script>
