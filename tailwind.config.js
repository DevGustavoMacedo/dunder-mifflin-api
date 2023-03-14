/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f0f0ff',
          400: '#adbaca',
          700: '#0a2d46',
        },
      },
      fontFamily: {
        primary: 'Anton, sans-serif',
        secondary: 'Lato, sans-serif'
      }
    },
  },
  plugins: [],
}
