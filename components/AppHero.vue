<template>
  <div class="container mx-auto max-w-[600px] lg:max-w-[900px] flex flex-col items-center">
    <div>
      <div class="flex flex-col justify-center items-center py-10 w-full mx-auto">
        <h2 class="text-xl lg:text-3xl font-bold">Welcome to</h2>
        <!-- <h3 class="text-[2vw] font-thin">to</h3> -->
        <h1 class="text-3xl lg:text-5xl font-bold">Kiwi & Curry</h1>
        <p class="font-normal text-sm lg:text-base leading-6 mx-auto lg:w-8/12 xl:w-6/12 mt-6 text-center">
          Join us, Mac & Shweta from Kiwi & Curry, as we embark on a bucket list odyssey!
          Together, we'll cross off our dreams and take you along for the ride, inspiring you to chase your own unforgettable adventures.
        </p>
      </div>
    </div>

    <div
      class="p-6 lg:p-44 lg:px-24 w-full rounded-lg object-contain object-center"
    >
      <AppUser />
    </div>

    <div class="mx-auto lg:py-16 md:py-12 py-9 flex flex-col items-center">
      <div class="flex flex-col justify-center items-center w-full mx-auto">
        <h2 class="text-xl lg:text-3xl font-bold">Adventure Awaits</h2>
        <h1 class="text-3xl lg:text-5xl font-bold">Embrace it!</h1>
        <p class="font-normal text-sm lg:text-base leading-6 mx-auto lg:w-8/12 xl:w-6/12 mt-6 text-center">
          These handpicked adventures and cultural experiences will inspire your own unforgettable journeys.
          Discover our bucket list and let the world captivate you!
        </p>
        <div class="bg-blue-600 text-white font-semibold text-sm px-6 py-2 mt-8 rounded-md shadow-lg">
          <NuxtLink to="/bucket-list">
            Our Bucket List
          </NuxtLink>
          <!-- <button v-else @click="client.auth.signOut()">Logout</button>
          <supabase-auth v-model="user" />  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// const images = import.meta.glob('@/assets/images/*.jpg')
// const underStars = images['/assets/images/under-stars.jpg']

// console.log('underStars', images, underStars)

</script>

<style></style>
