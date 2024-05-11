<script setup>
	import { onMounted, ref } from 'vue'
	import Welcome from './pages/Welcome.vue'
	import About from './pages/About.vue'
	import { snapScroll } from './helpers/animations.js'

	const scrollContainer = ref(null)

	onMounted(() => {
		console.log('on mounted called')
		if (scrollContainer.value) {
			snapScroll(scrollContainer.value)
		}
	})
</script>

<template>
	<main>
		<div
			class="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0"
			:ref="scrollContainer"
			@scroll="handleScroll">
			<div
				class="snap-always snap-center"
				id="welcome">
				<Welcome />
			</div>
			<div
				class="snap-always snap-center"
				id="about">
				<About />
			</div>
		</div>
	</main>
</template>
