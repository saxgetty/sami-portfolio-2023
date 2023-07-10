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
        // 'peachy-pink': '#DF8A86',
        // 'peachy-pink-dark': '#CA3C35',
        // 'calm-blue': '#9DC4B5',
        // 'creamy-beige': '#F1E4C6',
        'cool-green': '#B7CC87',
        'cool-green-dark': '#6B874D',
        'cool-purple': '#D1BBEA',
        'cool-pink': '#EEAFC2',
        'cool-pink-dark': '#A86177',
        'cool-yellow': '#F7C32F',
        'creamy-beige': '#F5EEDC',
      },
      screens: {
        'xs': '450px',
        'smX': '500px',
        'sm': '650px',
        'md-icon': '815px',
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

