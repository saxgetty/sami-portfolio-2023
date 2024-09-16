<script setup lang="ts">
	import PrimaryButton from '../components/PrimaryButton.vue'
	const props = defineProps<{ background: string }>()
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
				<h1 class="text-4xl font-bold text-black">Development Projects</h1>
			</header>

			<div class="mb-6">
				<p class="text-base md:text-lg text-gray-700 mb-4">
					This page will showcase some of my professional and personal programming
					projects. More details will be added soon.
				</p>
			</div>
			<div class="mt-4">
				<PrimaryButton
					label="Go Back"
					:route="'/'"
					:section="'#work'"
					:classes="'bg-gray-500 hover:bg-gray-600'" />
			</div>
		</div>
	</div>
</template>
