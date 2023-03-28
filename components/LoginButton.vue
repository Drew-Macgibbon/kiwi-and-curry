<template>
  <div class="flex items-center justify-center">
    <div class="bg-blue-600 text-white font-semibold text-sm rounded-md shadow-lg">
      <NuxtLink to="/coming-soon" class="flex justify-center items-center">
        <p class="hidden lg:flex px-6 py-2">
          Your List!
        </p>
        <span class="text-white m-1 lg:pr-4">
          <Icon
            name="material-symbols:add-rounded"
            class="flex w-[30px] h-[30px]"
          />
        </span>
      </NuxtLink>
      <!-- <button v-else @click="client.auth.signOut()">Logout</button>
      <supabase-auth v-model="user" />  -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FxemojiHeavyplussign'
}
</script>

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
