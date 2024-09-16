import { createRouter, createWebHistory } from 'vue-router'
import { backgroundColors } from '../constants/backgroundColors.ts'
import Home from '../views/Home.vue'
import Development from '../views/Development.vue'
import Design from '../views/Design.vue'

const routes = [
	{ path: '/', name: 'home', component: Home },
	{
		path: '/development',
		name: 'development',
		component: Development,
		props: { background: backgroundColors.development },
	},
	{
		path: '/design',
		name: 'design',
		component: Design,
		props: { background: backgroundColors.design },
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
