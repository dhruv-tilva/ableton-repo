/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  screens: {
    'mo': '325px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

