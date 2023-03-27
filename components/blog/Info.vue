<template>
  <div class="mt-10 sm:mt-20 flex justify-between items-center flex-row">
    <div class="flex">
      <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">Written by</div>
        <div class="flex items-center">
          <div>
            <!-- <img class="w-5 h-5 mr-2 rounded-full" src="/img/my_logo.png" alt="" /> -->
          </div>
          <div>
            <p class="text-[14px]">Mac & Shweta</p>
          </div>
        </div>
      </div>

      <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">Added to Bucket List</div>
        <span class="text-[14px]">{{ published.day }} {{ published.month }} {{ published.year }}</span>
      </div>

      <!-- <div class="mr-4">
        <div class="text-[11px] mb-1 text-[#6f6f6f] dark:text-[#9ba1a6]">Reading time</div>
        <span class="text-[14px]">{{ props.readingTime }}</span>
      </div> -->
    </div>

    <div class="hidden sm:flex">
      <button
        @click="shareOnTwitter"
        class="h-[36px] mr-3 flex justify-center items-center bg-[#E8E8E8] w-[36px] rounded-full dark:bg-[#232425]"
      >
        <Icon
          name="mdi:twitter"
          class="w-4"
        />
      </button>

      <button
        @click="copyLink"
        class="h-[36px] flex justify-center items-center bg-[#E8E8E8] w-[36px] rounded-full dark:bg-[#232425]"
      >
        <Icon
          name="material-symbols:content-copy"
          class="w-4"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  publishDate: {
    type: String,
    required: true
  }
})

const utils = useUtils()
const published = utils.time.format(props.publishDate)

const shareOnTwitter = () => {
  window.open(
    'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.href.replace(/([^#]*)#.+/, '$1')),
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600'
  )
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href.replace(/([^#]*)#.+/, '$1'))
}
</script>
