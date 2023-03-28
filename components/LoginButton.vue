<template>
  <div class="flex items-center justify-center">
    <div class="bg-blue-600 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-lg">
      <NuxtLink to="/coming-soon">
        Your bucket list!
      </NuxtLink>
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
