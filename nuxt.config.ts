// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      // link: [
      //   { rel: 'stylesheet', href: '' }
      // ],
      script: [
        // Insert your Google Tag Manager Script here
        // { src: 'https://js.stripe.com/v3/', async: true, type: 'text/partytown' },
        // { src: 'https://connect.facebook.net/en_US/sdk.js', async: true, type: 'text/partytown' }
      ]
    }
  },
  imports: {
    dirs: ['stores'],
  },
  css: ['/assets/main.css'],
  typescript: {
    shim: false,
    tsConfig: {
      exclude: ['node_modules', 'dist'],
      compilerOptions: {
        strict: true,
      },
    },
  },
  // nitro: {
  //   preset: 'render-com',
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/partytown',
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  partytown: {
    // For google analytics
    forward: ['dataLayer.push'],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      apiBase: '/api'
    }
  },
  supabase: {
    // Options: https://supabase.nuxtjs.org/get-started#options
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  // build: {
  //   transpile: ['@/vue']
  // },
  ssr: true
})
