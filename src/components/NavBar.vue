<script setup lang="ts">
	import { ref } from 'vue'

	const navbarItems = ref([
		{ id: 'welcome', label: 'Welcome' },
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'work', label: 'Work' },
		{ id: 'contact', label: 'Contact' },
	])
</script>

<template>
	<nav class="bg-primary p-4">
		<ul class="flex justify-around">
			<li
				v-for="item in navbarItems"
				:key="item.id">
				<a
					:href="'#' + item.id"
					class="text-black hover:text-secondary">
					{{ item.label }}
				</a>
			</li>
		</ul>
	</nav>
</template>
