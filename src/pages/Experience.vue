<script setup lang="ts">
	import { defineProps } from 'vue'
	const props = defineProps<{ background: string }>()
</script>

<template>
	<div :class="[props.background, 'h-full flex items-center justify-center']">
		<h1 class="text-4xl font-bold text-black">Experience</h1>
	</div>
</template>