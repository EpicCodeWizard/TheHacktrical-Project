const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}


