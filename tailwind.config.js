/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'groovy': ['abstractGroovy'],
        'shrikhand': ['Shrikhand', 'cursive'],
        'karla': ['Karla', 'sans-serif'],
      },
      colors: {
        'cool-green-opaque': '#A5CCC2',
        'cool-green': '#85A49C',
        'cool-green-dark': '#537D79',
        'cool-orange': '#F7CAC5',
        'cool-orange-dark': '#B8C2CC',
        'cool-purple': '#F18382',
        'cool-pink-opaque': '#FAE8E6',
        'cool-pink': '#F7CAC5',
        'cool-pink-muted': '#E3AEA8',
        'cool-pink-dark': '#F18382',
        'cool-yellow': '#F7BC62',
        'cool-brown': '#482B1D',
        'creamy-beige': '#F5EEDB',
      },
      screens: {
        'xs': '450px',
        'smX': '500px',
        'sm': '650px',
        'md-pad': '815px',
        'md-icon': '860px',
        'mdX': '900px',
        'project-md': '1000px',
        'lg': '1150px',
        'lgX': '1160px',
        'xlX': '1300px',
      },
    },
  },
  plugins: [],
}

