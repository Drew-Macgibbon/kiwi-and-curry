<!-- components/Login.vue -->
<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-8 rounded-md shadow-md w-full max-w-md">
      <button>
        Login
      </button>
      <!-- <button v-else @click="client.auth.signOut()">Logout</button>
      <supabase-auth v-model="user" />  -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// const user = useSupabaseUser()
// const client = useSupabaseAuthClient()
// const router = useRouter()
// // Login method using providers
// const login = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
//   const { error } = await client.auth.signInWithOAuth({ provider })
//   if (error) {
//     return alert('Something went wrong !')
//   }
//   router.push('/dashboard')
// }
</script>
