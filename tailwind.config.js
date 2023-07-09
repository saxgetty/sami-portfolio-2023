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
        'peachy-pink': '#BBCC85',
        'peachy-pink-dark': '#6A843D',
        'calm-blue': '#D1BBEA',
        'creamy-beige': '#F1E4C6',
      },
      screens: {
        'xs': '450px',
        'smX': '500px',
        'sm': '650px',
        'md-icon': '800px',
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

