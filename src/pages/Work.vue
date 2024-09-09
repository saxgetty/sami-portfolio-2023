<script setup lang="ts">
	const props = defineProps<{ background: string }>()
</script>

<template>
	<div :class="[props.background, 'h-full flex flex-col justify-center p-8 md:p-16 md:flex-row md:justify-center md:items-center']">
		<div class="w-full md:w-3/4 lg:w-1/2">
			<header class="mb-8 text-center">
				<h1 class="text-4xl font-bold text-black">Work</h1>
			</header>

			<div class="mb-12">
				<h2 class="text-2xl md:text-3xl font-semibold text-black mb-4">Programming Projects</h2>
				<p class="text-base md:text-lg text-gray-700 mb-6">
					Explore some of my professional work and side projects. Click the link below to see more details.
				</p>
				<a href="/projects" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
					View Programming Projects
				</a>
			</div>
			<div>
				<h2 class="text-2xl md:text-3xl font-semibold text-black mb-4">Etsy & Pinterest Creations</h2>
				<p class="text-base md:text-lg text-gray-700 mb-6">
					Discover my handmade crafts and digital creations. Click below to explore my Etsy shop and Pinterest inspirations.
				</p>
				<a href="/etsy" class="inline-block bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
					Visit Etsy & Pinterest
				</a>
			</div>
		</div>
	</div>
</template>
