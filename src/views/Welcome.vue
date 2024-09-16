<script setup lang="ts">
	const props = defineProps<{ background: string }>()
	import { scrollToSection } from '../utils/smoothScrollIntoView'
	import PrimaryButton from '../components/PrimaryButton.vue'
</script>

<template>
	<div
		:class="[
			props.background,
			'h-screen flex flex-col items-center justify-center text-center relative overflow-hidden',
		]">
		<div class="relative z-10 px-6 py-8">
			<h1 class="text-5xl md:text-6xl font-bold text-earth-tone-800 mb-6">
				Welcome to My Creative Space
			</h1>
			<p class="text-base md:text-lg text-earth-tone-700 mb-8">
				Step into a world of innovation, digital art, and development. Join me on
				this creative journey!
			</p>
			<PrimaryButton
				label="Explore My Work"
				:classes="'bg-pink-500 hover:bg-pink-600 shadow-lg'"
				:onClick="() => scrollToSection('work')" />
		</div>
	</div>
</template>
