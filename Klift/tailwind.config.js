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
      backgroundImage: {
        'coutup': 'url("./images/countup.png")',
        'interior1': 'url("./images/interior1.png")',
        'interior2': 'url("./images/interior2.png")',
        'interior3': 'url("./images/interior3.png")',
        'interior4': 'url("./images/interior4.png")',
        'img':'url("./images/img.png")',
        'entrance':'url("./images/furniture.png")'
      },
      width: {
        'slider-width': '80%',
        'icon': '100px',
      },
      height: {
        'interior':'580px',
        'entrance':'100vh',
      },
      backgroundColor: {
        'icon': 'rgb(240, 199, 197)',
        'footer':'#141313',
      },
    },
  },
  plugins: [],
}