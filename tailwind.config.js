/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        // Other breakpoints can remain as default or be customized similarly
      },
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
