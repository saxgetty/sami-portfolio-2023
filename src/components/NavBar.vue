<script setup lang="ts">
	import { ref } from 'vue'

	defineProps<{
		sections: { id: string; label: string }[],
	}>()

	const isMenuOpen = ref(false)
</script>

<template>
	<nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full shadow-lg px-6 py-2 w-auto max-w-[95vw] flex items-center justify-between gap-6">
		<!-- Desktop Navigation -->
		<ul class="hidden md:flex items-center gap-6 ml-4">
			<li v-for="section in sections" :key="section.id">
				<a 
					:href="`#${section.id}`"
					class="font-fredoka font-bold text-base-content px-4 py-2 rounded-full hover:bg-primary hover:text-primary-content focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
				>
					{{ section.label }}
				</a>
			</li>
		</ul>
		
		<!-- Mobile Menu Button -->
		<button 
			@click="isMenuOpen = !isMenuOpen"
			class="md:hidden text-base-content focus:outline-none ml-2"
			aria-label="Toggle menu"
		>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				class="h-8 w-8" 
				fill="none" 
				viewBox="0 0 24 24" 
				stroke="currentColor"
			>
				<path 
					v-if="!isMenuOpen" 
					stroke-linecap="round" 
					stroke-linejoin="round" 
					stroke-width="2" 
					d="M4 6h16M4 12h16M4 18h16" 
				/>
				<path 
					v-else 
					stroke-linecap="round" 
					stroke-linejoin="round" 
					stroke-width="2" 
					d="M6 18L18 6M6 6l12 12" 
				/>
			</svg>
		</button>
		
		<!-- Mobile Navigation -->
		<div 
			v-if="isMenuOpen" 
			class="absolute top-full left-0 w-full glass rounded-b-2xl shadow-lg py-4 flex flex-col items-center gap-4 mt-2"
		>
			<a 
				v-for="section in sections" 
				:key="section.id"
				:href="`#${section.id}`"
				class="font-fredoka font-bold text-base-content px-4 py-2 rounded-full hover:bg-primary hover:text-primary-content focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
				@click="isMenuOpen = false"
			>
				{{ section.label }}
			</a>
		</div>
	</nav>
</template>
