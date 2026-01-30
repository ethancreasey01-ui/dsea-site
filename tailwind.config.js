/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand-inspired palette (approx from current dsea.com.au look)
        ink: {
          950: '#05070b',
          900: '#070b12',
          800: '#0b1220',
          700: '#0f172a',
        },
        brand: {
          primary: '#11c5ff', // electric blue
          primary2: '#0ea5ff',
          glow: '#2dd4ff',
          gold: '#f6c948',
        },
      },
    },
  },
  plugins: [],
}
