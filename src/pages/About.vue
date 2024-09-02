<script setup lang="ts">
	import { defineProps } from 'vue'
	const props = defineProps<{ background: string }>()
</script>

<template>
	<div
		:style="{ backgroundColor: props.background }"
		class="h-full flex items-center justify-center">
		<h1 class="text-4xl font-bold text-black">About</h1>
	</div>
</template>
