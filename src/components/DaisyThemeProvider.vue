<script setup lang="ts">
	import { ref, provide, onMounted } from 'vue'

	// Single customizable theme
	const availableThemes = [
		{ name: 'Sami Portfolio', value: 'sami', category: 'Theme' },
	]

	// Current theme state
	const currentTheme = ref('sami')

	// Provide theme to child components
	provide('daisyTheme', {
		currentTheme,
		availableThemes,
		setTheme: (theme: string) => {
			currentTheme.value = theme
			applyTheme(theme)
		},
	})

	// Apply theme to document
	const applyTheme = (theme: string) => {
		const html = document.documentElement
		html.setAttribute('data-theme', theme)

		// Store in localStorage
		localStorage.setItem('daisy-theme', theme)
	}

	// Load saved theme on mount
	onMounted(() => {
		const savedTheme = localStorage.getItem('daisy-theme')
		if (savedTheme && availableThemes.some((t) => t.value === savedTheme)) {
			currentTheme.value = savedTheme
		}
		applyTheme(currentTheme.value)
	})

	// Expose theme switching function
	const setTheme = (theme: string) => {
		if (availableThemes.some((t) => t.value === theme)) {
			currentTheme.value = theme
			applyTheme(theme)
		}
	}

	defineExpose({
		setTheme,
		currentTheme,
		availableThemes,
	})
</script>

<template>
	<div class="min-h-screen bg-paper">
		<slot />
	</div>
</template>
