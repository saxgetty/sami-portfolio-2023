<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import Navbar from './components/Navbar.vue'
	import Home from './pages/Home.vue'
	import Footer from './components/Footer.vue'

	const scrollContainer = ref<HTMLElement | null>(null)

	onMounted(() => {
		if (scrollContainer.value) {
			// temp
		}
	})
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<main
			ref="scrollContainer"
			class="snap-y snap-mandatory overflow-y-scroll h-screen">
			<Navbar />
			<Home />
			<Footer />
		</main>
	</div>
</template>
