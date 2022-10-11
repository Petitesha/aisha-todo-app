/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      header: {
        100: 'rgb(197, 187, 211)',
        200: '#5e19df',
        300: 'rgba(0, 0, 0, 0.1)',
      },
    },
    fontSize: {
      header: {
        small: '24px',
        big: '40px',
        biggest: '600px',
      },
    },
    extend: {},
  },
  plugins: [],
}
