<script setup lang="ts">
	import { ref } from 'vue'
	import { RouterView, useRoute } from 'vue-router'
	import Navbar from './components/Navbar.vue'
	import Footer from './components/Footer.vue'

	const scrollContainer = ref<HTMLElement | null>(null)
	const route = useRoute()
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<Navbar v-if="!['/development', '/design'].includes(route.path)" />

		<main
			ref="scrollContainer"
			class="snap-y snap-mandatory overflow-y-scroll h-screen">
			<RouterView />
		</main>

		<Footer />
	</div>
</template>
