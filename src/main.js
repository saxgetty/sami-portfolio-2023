import { createApp } from "vue"
import { setUpAnimations } from "./animations"
import "./assets/style.css"
import App from "./App.vue"

const app = createApp(App)
const vm = app.mount("#app");

vm.$nextTick(() => {
    setUpAnimations()
    console.log("animations set up from main.js")
})
