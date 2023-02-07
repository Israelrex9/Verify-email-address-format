/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pm-blue': '#121725',
        'green': '#54E6AF',
        'blue1': '#2C344B',
        'blue2': '#5A668A',
        'blue3': '#C2CBE5',
        'white': '#FFFFFF'
      },
      fontFamily: {
        chivo: ['chivo']
      }
    },
  },
  plugins: [],
}
