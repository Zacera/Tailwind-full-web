/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: theme => ({
      'hero-pattern': "linear-gradient(42.46deg, #ABA8BF 0%, #F5E9F3 38.5%)",
    }),
    colors: {
      'custom': '#7A9D8C',

    },
  },
  plugins: [],
}

