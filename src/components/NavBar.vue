<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'

defineProps<{
	sections: { id: string; label: string; icon: Component }[]
	activeSection: string
}>()

const emit = defineEmits<{
	navigate: [id: string]
}>()

const isMenuOpen = ref(false)

const handleNavigate = (id: string) => {
	emit('navigate', id)
	isMenuOpen.value = false
}
</script>

<template>
	<div class="md:hidden fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
		<button
			@click="isMenuOpen = !isMenuOpen"
			:aria-expanded="isMenuOpen"
			aria-controls="mobile-nav-menu"
			:aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
			class="w-12 h-12 rounded-full bg-paper border-2 border-cocoa shadow-lg flex items-center justify-center text-ink transition-colors cursor-pointer hover:bg-marigold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				<path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<nav
			v-if="isMenuOpen"
			id="mobile-nav-menu"
			aria-label="Section navigation"
			class="flex flex-col gap-2 items-end"
		>
			<button
				v-for="section in sections"
				:key="section.id"
				@click="handleNavigate(section.id)"
				:aria-current="activeSection === section.id ? 'page' : undefined"
				class="flex items-center gap-3 px-4 py-2 rounded-full border-2 shadow-md font-display text-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa"
				:class="
					activeSection === section.id
						? 'bg-ink border-ink text-paper font-bold'
						: 'bg-cocoa border-cocoa text-paper hover:bg-ink hover:border-ink'
				"
			>
				<span>{{ section.label }}</span>
				<component :is="section.icon" class="w-4 h-4 flex-shrink-0" aria-hidden="true" />
			</button>
		</nav>
	</div>
</template>
