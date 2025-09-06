/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{razor,html,js}",
    "./Pages/**/*.razor",
    "./Layout/**/*.razor",
    "./Components/**/*.razor",
    "./wwwroot/**/*.html",
    "../**/*.{razor,html,js}"
  ],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
}
