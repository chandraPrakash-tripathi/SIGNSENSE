/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom-1': '7px 2px 28px 11px rgba(34, 37, 67, 0.82)',
      }
    },
  },
  plugins: [],
}