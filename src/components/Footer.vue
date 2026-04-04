<script setup lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="w-full bg-cocoa text-paper font-display font-bold text-base md:text-lg py-4 flex items-center justify-center border-t-4 border-cocoa shadow-inner">
		<p class="text-center px-4">
			&copy; {{ currentYear }} Sami Saxton-Getty. All rights reserved.
		</p>
	</footer>
</template>
