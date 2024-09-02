<script setup lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="bg-primary p-4 text-center text-black">
		<p>&copy; {{ currentYear }} Your Name. All rights reserved.</p>
	</footer>
</template>
