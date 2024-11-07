import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'page': '#f8fafc',
      },
      colors: {
        primary: '#2563eb', // blue-600
      },
    },
  },
  plugins: [],
}

export default config