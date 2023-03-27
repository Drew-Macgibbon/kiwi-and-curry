import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        recoleta: ["Recoleta", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/forms')
    // https://github.com/tailwindlabs/tailwindcss-forms
  ]
}
