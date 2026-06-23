/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: '#0d1116',
        surface: '#14181f',
        accent: '#00df8f',
        'accent-dark': '#00b373',
      },
    },
  },
  plugins: [],
}
