/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens:{
      'sm': '400px',
      'md': '550px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px'
    },
    extend: {
      colors: {
      }
    },
  },
  plugins: [],
}
