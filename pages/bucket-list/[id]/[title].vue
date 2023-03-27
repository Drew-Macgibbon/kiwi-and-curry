<template>
  <div class="max-w-[900px] mx-auto">
    <div class="sm:hidden fixed left-0 dark:bg-[#232425] py-2 border-t dark:border-[#34343a] bottom-0 bg-white flex w-full shadow-md z-10">
      <div class="w-1/4 border-r dark:border-[#34343a]">
        <button
          @click="copyLink"
          class="py-3 w-full flex align-center text-center h-full"
        >
          <Icon
            name="material-symbols:content-copy"
            class="w-4 mx-auto"
          />
        </button>
      </div>
      <div class="w-1/4 border-r dark:border-[#34343a]">
        <button
          @click="shareOnTwitter"
          class="py-3 w-full flex align-center text-center h-full"
        >
          <Icon
            name="mdi:twitter"
            class="w-4 mx-auto"
          />
        </button>
      </div>
      <div
        v-if="prev"
        class="w-1/4 border-r dark:border-[#34343a]"
      >
        <NuxtLink
          :to="prev"
          class="py-3 w-full flex align-center text-center h-full"
        >
          <Icon
            name="material-symbols:arrow-back-rounded"
            class="w-5 mx-auto"
          />
        </NuxtLink>
      </div>
      <div
        v-if="next"
        class="w-1/4 border-r dark:border-[#34343a]"
      >
        <NuxtLink
          :to="next"
          class="py-3 w-full flex align-center text-center h-full"
        >
          <Icon
            name="material-symbols:arrow-forward-rounded"
            class="w-5 mx-auto"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-8">
      <NuxtLink to="/">
        <button class="button-more">Back to list</button>
      </NuxtLink>
      <div
        v-if="bucketListItem?.title"
        class="pt-10 col-span-8 pb-4 border-[#c7c7c7] border-dashed border-b dark:border-[#34343a]"
      >
        <div class="flex items-end mb-4">
          <div class="mr-2 last:mr-0">
            <div class="category bg-blue-800 text-white">
              {{ utils.string.capitalizeAll(bucketListItem.category.name) }}
            </div>
          </div>
          <div
            v-for="tag in bucketListItem.tags"
            :key="tag.id"
            class="mr-2 last:mr-0"
          >
            <div class="tag bg-purple-800 text-white">{{ utils.string.capitalizeAll(tag.name) }}</div>
          </div>
        </div>
        <h1 class="text-4xl sm:text-6xl mb-5 font-recoleta font-semibold">
          {{ bucketListItem.title }}
        </h1>
        <div class="w-full h-auto mb-4">
          <img
            class="w-full h-full object-cover rounded aspect-auto"
            :src="`https://nuhchyxmsixjuixlmere.supabase.co/storage/v1/object/public/public/${bucketListItem.featured_image}`"
            alt="Bucket List Item"
            width="100%"
          />
        </div>
        <BlogInfo
          v-if="bucketListItem.title"
          :publish-date="bucketListItem.created_at"
        />
      </div>

      <!-- <article :class="[bucketListItem?.body.toc.links.length <= 0 ? 'col-span-8' : 'col-span-8  sm:col-span-6']" class="pr-4 pb-6">
      </article> -->
      <div class="col-span-8 sm:col-span-6 pr-4 pb-6 prose">
        <p class="text-left mt-6">🤷🏼‍♂️ {{ bucketListItem.body }}</p>
      </div>
      <div
        v-if="prevItem?.id !== 7"
        class="hidden sm:block col-span-2 pl-6"
      >
        <aside class="sticky top-10 mt-[3rem] h-[auto]">
          <BlogPrevLink
            v-if="prevItem"
            class="hidden sm:flex"
            :prev="prevItem"
            :next="nextItem"
          />
        </aside>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as t from '@/types'

const supabase = useSupabase()
const router = useRouter()
const utils = useUtils()

const bucketListItem = ref({} as t.BucketListItem)
const error = ref(null)

const itemId = Number(router.currentRoute.value.params.id)

async function fetchBucketListItem(id: number) {
  const { data, error } = await supabase.rpc('get_single_item', { itemid: id })
  console.log('gotPost', data, error)
  if (error) {
    throw error
  }
  if (!data) {
    throw new Error('No data')
  }
  return data[0] as t.BucketListItem
}

const prevItem = await fetchBucketListItem(itemId !== 7 ? itemId - 1 : 7)
const nextItem = await fetchBucketListItem(itemId + 1)
const prev = `/bucket-list/${itemId - 1}/${prevItem?.title}`
const next = `/bucket-list/${itemId + 1}/${nextItem?.title}`

useAsyncData(async () => {
  const id = router.currentRoute.value.params.id
  const title = router.currentRoute.value.params.title
  console.log('routerParams', id, title)
  try {
    bucketListItem.value = await fetchBucketListItem(Number(id))
  } catch (err) {
    error.value = err.message
  }
})

const shareOnTwitter = () => {
  window.open(
    'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.href.replace(/([^#]*)#.+/, '$1')),
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600'
  )
}

const copyLink = () => navigator.clipboard.writeText(window.location.href.replace(/([^#]*)#.+/, '$1'))

useHead({
  title: bucketListItem.value?.title,
  meta: [
    {
      name: 'twitter:image',
      content: `https://tihunov.com${bucketListItem.value?.cover_image}`
    },
    {
      name: 'twitter:title',
      content: bucketListItem.value?.title
    },
    {
      name: 'twitter:description',
      content: bucketListItem.value.body!
    },
    {
      name: 'description',
      content: bucketListItem.value.body!
    },
    {
      name: 'og:title',
      content: bucketListItem.value?.title
    },
    {
      name: 'og:description',
      content: bucketListItem.value.body!
    }
  ]
})
</script>

<style scoped>
h2 a {
  @apply font-recoleta;
}
</style>
