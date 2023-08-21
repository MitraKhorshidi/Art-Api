import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      //text
      'primary':'#FFFFFF',
      'default': '#636366',
      'secondary':'#C4C4C4',

      //button
      'bg-secondary': '#262626',
      'bg-primary':'#1D1D1D',

      // background
      'btn-primary':'#E10856',

    },
    extend: {
      width: {
        '1408': '1408px',
      }
    },
  },
  plugins: [],
}
export default config
