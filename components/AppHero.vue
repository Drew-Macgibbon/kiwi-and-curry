<template>
  <div>
    <div
      class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
    >
      <div class="relative">
        <div class="absolute top-0 left-0 w-full h-full">
          <div
            class="w-full h-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-70 text-white sm:px-12 px-6 border rounded-md"
          >
            <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">
              All About Us
            </h2>
            <p
              class="font-normal text-base leading-6 text-gray-300 mx-auto lg:w-8/12 xl:w-6/12 mt-6 text-center"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have grante d to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire,
            </p>
          </div>
        </div>
        <div>
          <img
            class="lg:block hidden w-full border rounded-md"
            src="https://i.ibb.co/VCGbH9S/12.png"
            alt="people discussing something"
          />
          <img
            class="lg:hidden sm:block hidden w-full border rounded-md"
            src="https://i.ibb.co/2yvrWVN/Rectangle-122-1.png"
            alt="people discussing something"
          />
          <img
            class="sm:hidden block w-full border rounded-md"
            src="https://i.ibb.co/sWmx8k6/Rectangle-122.png"
            alt="people discussing something"
          />
        </div>
      </div>

      <div class="lg:mt-14 sm:mt-7 mt-14">
        <div class="flex lg:flex-row flex-col sm:gap-10 gap-8">
          <div class="w-full lg:w-7/12">
            <h2
              class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 text-left"
            >
              Our Story
            </h2>
            <p
              class="font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12 text-left"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
            <p
              class="font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-10 text-left"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div
            class="relative cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8"
          >
            <AppUser />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>

</style>
