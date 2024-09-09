<script setup lang="ts">
	const props = defineProps<{
		id: string
		label: string
		required?: boolean
		rows?: number
	}>()
</script>

<template>
	<div>
		<label
			:for="props.id"
			class="block text-lg font-medium text-gray-700"
			>{{ props.label }}</label
		>
		<textarea
			:id="props.id"
			:name="props.id"
			:required="props.required"
			:rows="props.rows || 5"
			class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
	</div>
</template>
