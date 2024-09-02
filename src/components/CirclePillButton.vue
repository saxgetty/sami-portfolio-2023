<script lang="ts">
	import { defineComponent, computed } from 'vue'

	export default defineComponent({
		name: 'CirclePillButton',
		props: {
			routeName: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const firstLetter = computed(() => props.routeName.charAt(0))
			const restOfWord = computed(() => props.routeName.slice(1))

			return {
				firstLetter,
				restOfWord,
			}
		},
	})
</script>

<template>
	<button
		class="group relative inline-flex items-center justify-start h-12 w-12 overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32">
		<div class="absolute left-3.5 flex items-center">
			<div>{{ firstLetter }}</div>
			<div
				class="ml-2 inline-flex whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
				{{ restOfWord }}
			</div>
		</div>
	</button>
</template>
