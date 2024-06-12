<script setup lang="ts">
	import { onMounted, ref, Ref } from 'vue'
	import Welcome from './pages/Welcome.vue'
	import About from './pages/About.vue'
	import { snapScroll } from './helpers/animations'

	const scrollContainer: Ref<HTMLElement | null> = ref(null)

	onMounted(() => {
		console.log('on mounted called')
		if (scrollContainer.value) {
			snapScroll(scrollContainer)
		}
	})

	function handleScroll(): void {
		// Handle the scroll event here if needed
	}
</script>

<template>
	<main>
		<div
			class="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0"
			ref="scrollContainer"
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
