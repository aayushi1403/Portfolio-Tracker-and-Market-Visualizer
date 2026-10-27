/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#0b0e14',
          800: '#151922',
          700: '#1f2430',
          600: '#2d3343'
        },
        trade: {
          buy: '#10b981',
          sell: '#ef4444',
          accent: '#3b82f6'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}