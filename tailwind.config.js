/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens:{
      'sm': '350px',
      'md': '535px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px'
    },
    extend: {
      colors: {
        darkgray: '#0D121A',
        darkpurple: '#291E38',
        darkblue: '#0C1334',
        darkroyalblue: '#1B1A39',
        darkteal: '#051A32',
        cyan: '#339AF0',
        mediumgray: '#16202D',
        mediumteal: '#0C2038',
        bggray: '#19273D',
        bgteal: '#0F243B'
      }
    },
  },
  plugins: [],
}
