import type { Config } from "tailwindcss"

const config: Config = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config