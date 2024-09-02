<script setup lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
		<p>&copy; {{ currentYear }} Your Name. All rights reserved.</p>
	</footer>
</template>
