<script setup lang="ts">
	const props = defineProps<{ background: string }>()
	import { scrollToSection } from '../utils/smoothScrollIntoView'
	import PrimaryButton from '../components/PrimaryButton.vue'
</script>

<template>
	<div
		:class="[
			props.background,
			'h-full flex flex-col justify-center p-8 md:p-16',
		]">
		<div
			class="w-full xl:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-lg p-6 md:p-12 rounded-lg">
			<div class="w-full md:w-1/3 mb-6 md:mb-0">
				<img
					src="../images/Cartoon_Sam_V3_Pride.png"
					alt="digital-art-sami-portrait"
					class="rounded-full mx-auto w-48 h-48 object-cover shadow-md" />
			</div>
			<div class="w-full md:w-2/3 md:pl-8">
				<header class="mb-6">
					<h1 class="text-4xl font-bold text-black text-center md:text-left">
						About Me
					</h1>
				</header>

				<div class="mb-6">
					<p class="text-base md:text-lg text-gray-700 mb-4">
						Greetings! I'm Sami Saxton-Getty, a passionate quality engineer, freelance
						digital artist, and creative web designer. Over the years, I've worked on
						many projects, including website revamps for finance tech companies like
						Binance.us and Allocate.
					</p>
					<p class="text-base md:text-lg text-gray-700">
						I love bringing ideas to life through digital art, coding, and quality.
						Feel free to explore more about my work and how we can collaborate!
					</p>
				</div>
				<div class="flex justify-center md:justify-start space-x-4">
					<PrimaryButton
						label="View My Work"
						:classes="'bg-blue-500 hover:bg-blue-600 shadow-lg'"
						:onClick="() => scrollToSection('work')" />

					<PrimaryButton
						label="Contact Me"
						:classes="'bg-green-500 hover:bg-green-600 shadow-lg'"
						:onClick="() => scrollToSection('contact')" />
				</div>
			</div>
		</div>
	</div>
</template>
