/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans' : 'Outfit',
    },

    fontSize: {
      sm: ['15px', '20px'],
      base: ['16px', '24px'],
      lg: ['22px', '28px'],
      xl: ['24px', '32px'],
    },

    extend: {
      colors: {
        'dark-blue' : 'hsl(218, 44%, 22%)',
        'light-gray' : 'hsl(212, 45%, 89%)',
        'grayish-blue' : 'hsl(220, 15%, 55%)'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}