<script setup lang="ts">
	import NavBar from './components/NavBar.vue'
	import Footer from './components/Footer.vue'
	import WelcomeSection from './components/sections/WelcomeSection.vue'
	import AboutSection from './components/sections/AboutSection.vue'
	import ExperienceSection from './components/sections/ExperienceSection.vue'
	import ProjectsSection from './components/sections/ProjectsSection.vue'
	import ShopSection from './components/sections/ShopSection.vue'
	import ContactSection from './components/sections/ContactSection.vue'
	import DaisyThemeProvider from './components/DaisyThemeProvider.vue'

	const sections = [
		{ id: 'welcome', label: 'Welcome' },
		{ id: 'about', label: 'About' },
		{ id: 'shop', label: 'Shop' },
		{ id: 'contact', label: 'Contact' },
	]
</script>

<template>
	<DaisyThemeProvider>
		<div class="flex flex-col min-h-screen">
			<NavBar :sections="sections"/>

			<main>
				<WelcomeSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection />
				<ShopSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	</DaisyThemeProvider>
</template>
