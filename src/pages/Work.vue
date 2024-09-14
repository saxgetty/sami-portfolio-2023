<script setup lang="ts">
	const props = defineProps<{ background: string }>()
	import PrimaryButton from '../components/PrimaryButton.vue'
</script>

<template>
	<div
		:class="[
			props.background,
			'h-full flex flex-col justify-center p-8 md:p-16',
		]">
		<div
			class="w-full xl:w-1/2 mx-auto flex flex-col bg-white shadow-lg p-6 md:p-12 rounded-lg">
			<header class="mb-6 text-center">
				<h1 class="text-4xl font-bold text-black">Work</h1>
			</header>

			<div class="mb-6">
				<h2 class="text-2xl md:text-3xl font-semibold text-black mb-4">
					Programming Projects
				</h2>
				<p class="text-base md:text-lg text-gray-700 mb-4">
					Explore some of my professional work and side projects. Click the button
					below to see more details.
				</p>
				<PrimaryButton
					label="View Programming Projects"
					:classes="'bg-blue-500 hover:bg-blue-600 shadow-lg'" />
				<!-- :onClick="() => (window.location.href = '/projects')" -->
			</div>
			<div>
				<h2 class="text-2xl md:text-3xl font-semibold text-black mb-4">
					Etsy & Pinterest Creations
				</h2>
				<p class="text-base md:text-lg text-gray-700 mb-4">
					Discover my digital creations. Click the button below
					to explore my Etsy shop and Pinterest inspirations.
				</p>
				<PrimaryButton
					label="Visit Etsy & Pinterest"
					:classes="'bg-pink-500 hover:bg-pink-600 shadow-lg'" />
				<!-- :onClick="() => (window.location.href = '/etsy')" -->
			</div>
		</div>
	</div>
</template>
