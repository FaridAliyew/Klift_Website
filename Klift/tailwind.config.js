/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pt-Sans': ['PT Sans', 'sans-serif']
      },
      backgroundImage:{
        'coutup':'url("./images/countup.png")'
      },
      width: {
        'slider-width': '80%',
        'icon':'100px'
      },
      backgroundColor:{
        'icon':'rgb(240, 199, 197)'
      }
    },
  },
  plugins: [],
}