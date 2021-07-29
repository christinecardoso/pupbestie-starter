const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md', './src/**/*.njk'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
