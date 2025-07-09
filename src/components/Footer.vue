<script setup lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="w-full bg-secondary text-secondary-content font-fredoka font-extrabold text-lg md:text-xl py-6 flex items-center justify-center shadow-lg glass">
		<p class="text-center px-4">
			&copy; {{ currentYear }} Sami Saxton-Getty. All rights reserved.
		</p>
	</footer>
</template>
