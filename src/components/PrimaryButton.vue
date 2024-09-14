<script setup lang="ts">
	const props = defineProps<{
		label: string
		onClick?: () => void
		classes?: string
		icon?: string
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
		:class="`bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border-4 border-double ${props.classes}`">
		<span class="flex items-center justify-center">
			<slot name="icon"></slot>
			<span>{{ label }}</span>
		</span>
	</button>
</template>
