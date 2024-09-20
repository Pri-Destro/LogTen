/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'blue-800' : '#272932',
        'black' : '#172121',
        'yellow-100' : '#E9B44C'
      }
    },
  },
  plugins: [],
}
