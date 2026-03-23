import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071e3',
          gray: '#f5f5f7',
          darkgray: '#1d1d1f',
          midgray: '#6e6e73',
          lightgray: '#fbfbfd',
          border: '#d2d2d7',
        },
      },
    },
  },
  plugins: [],
}

export default config
