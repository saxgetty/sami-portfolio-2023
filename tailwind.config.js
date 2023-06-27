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
        'fascinateInline': ['Fascinate Inline', 'cursive']
      },
      colors: {
        'peachy-pink': '#DF8A86',
        'calm-blue': '#9DC4B5',
        'creamy-beige': '#F1E4C6',
      },
    },
  },
  plugins: [],
}

