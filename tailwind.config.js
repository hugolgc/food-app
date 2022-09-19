/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
