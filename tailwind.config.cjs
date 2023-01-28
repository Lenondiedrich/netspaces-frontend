/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#071D49',
        'light-gray': '#E5E5E5',
        'neutral-gray': '#D6D6D6',
        'dark-description': '#0F113A',
        'subtitle-gray': '#707070',
        'light-blue': '#558EFF'
      },
      fontFamily: {
        'Manrope': 'Manrope',
        'Roboto': 'Roboto'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}