<script setup lang="ts">
	const props = defineProps<{
		id: string
		label: string
		type: string
		required?: boolean
		classes?: string
	}>()
</script>

<template>
	<div>
		<label
			:for="props.id"
			class="block text-lg font-medium text-gray-700">
			{{ props.label }}
		</label>
		<input
			:type="props.type"
			:id="props.id"
			:name="props.id"
			:required="props.required"
			:class="`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.classes}`" />
	</div>
</template>
