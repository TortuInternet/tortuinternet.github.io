/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['"Red Hat Display"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
      },
      colors: {
        "accent-green": "#24AB15",
        "sec-green": "#08520F",
        "light-green": "#E4F3CE",
        negative: "#040404",
        positive: "#f3f3f3",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
