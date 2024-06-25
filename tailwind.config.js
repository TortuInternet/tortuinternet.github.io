/*** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        'redHat': ['"Red Hat Display"','sans-serif'],
        'lato': ['"Lato"','sans-serif']
      },
      colors:{
        'light-green':'#E4F3CE',
        'accent-green':'#24AB15',
        'sec-green':'#08520F',
        'negative':'#040404'
      }
    },
  },
  plugins: [],
}

