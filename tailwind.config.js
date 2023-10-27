/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['diatype', 'sans-serif'],
      },
      backgroundColor: {
        'custom-color': '#DBD9C9', // Define a custom color with a name
      },
    },
  },
  plugins: [],
}
