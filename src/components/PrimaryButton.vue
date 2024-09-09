<script setup lang="ts">
	const props = defineProps<{
		label: string
		onClick?: () => void
	}>()
	const handleClick = () => {
		if (props.onClick) {
			props.onClick()
		}
	}
</script>

<template>
	<button
		@click="handleClick"
		class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
		{{ label }}
	</button>
</template>
