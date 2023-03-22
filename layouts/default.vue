<template>
  <div class="min-h-[100vh]">
    <TheHeader />
    <TheNavbar />
    <div class=" grid grid-cols-[1fr_minmax(600px,1200px)_1fr] min-h-full">
      <div class="bg-red-200" />
      <slot class="flex justify-center items-center" />
      <div class="bg-red-200" />
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
