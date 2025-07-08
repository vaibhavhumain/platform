/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  extend: {
    backdropBlur: {
      xs: '2px',
    },
    colors: {
      glass: 'rgba(255,255,255,0.2)',
    },
  },
},
  plugins: [],
}
