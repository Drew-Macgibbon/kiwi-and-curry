<template>
  <div class="min-h-[100vh]">
    <!-- <TheHeader /> -->
    <TheNavbar class="fixed top-0 left-0 " />
    <div class="grid grid-cols-[1fr_minmax(600px,1200px)_1fr] min-h-full mt-[60px] relative">
      <div class="bg-gray-100" />
      <div class="py-6 px-4">
        <slot />
      </div>
      <div class="bg-gray-100" />
    </div>
  </div>
</template>

<script>

</script>

<style>
/*
Layout transition animation
https://nuxt.com/docs/getting-started/transitions
*/
.layout-enter-active,
.layout-leave-active {
transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
