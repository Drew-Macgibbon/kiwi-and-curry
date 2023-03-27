import type { Config } from "tailwindcss"
const goldenRatio = 1.618;
const baseFontSize = 16; // In pixels

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
      fontSize: {
        'xs': `${baseFontSize / goldenRatio}px`,
        'sm': `${baseFontSize / goldenRatio**0.5}px`,
        'base': `${baseFontSize}px`,
        'lg': `${baseFontSize * goldenRatio**0.5}px`,
        'xl': `${baseFontSize * goldenRatio}px`,
        '2xl': `${baseFontSize * goldenRatio**1.5}px`,
        '3xl': `${baseFontSize * goldenRatio**2}px`,
        '4xl': `${baseFontSize * goldenRatio**2.5}px`,
      },
      colors: {
        'primary': '#ff9800',
        'secondary': '#8bc34a',
        'accent': '#ffc107',
        'background': '#ffffff',
        'text': '#424242',
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        'tight': '-0.05em',
        'normal': '0em',
        'wide': '0.05em',
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
