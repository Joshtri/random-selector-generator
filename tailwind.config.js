/** @type {import('tailwindcss').Config} */
export default {
  purge :[
    "./views/*",
    "./views/partials/*",

  ],
  darkMode : false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

