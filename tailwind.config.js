const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter var'],
        },
        colors: {
            sky: colors.sky,
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
