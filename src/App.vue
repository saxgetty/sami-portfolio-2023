<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import { useMediaQuery } from '@vueuse/core'
	import {
		HomeIcon,
		BriefcaseIcon,
		CodeBracketIcon,
		PaintBrushIcon,
		EnvelopeIcon,
	} from '@heroicons/vue/24/outline'
	import WelcomeSection from './components/sections/WelcomeSection.vue'
	import ExperienceSection from './components/sections/ExperienceSection.vue'
	import ProjectsSection from './components/sections/ProjectsSection.vue'
	import ShopSection from './components/sections/ShopSection.vue'
	import ContactSection from './components/sections/ContactSection.vue'
	import DaisyThemeProvider from './components/DaisyThemeProvider.vue'
	import Footer from './components/Footer.vue'
	import NavBar from './components/NavBar.vue'

	const activeSection = ref('welcome')
	const isMobile = useMediaQuery('(max-width: 767px)')

	const sections = [
		{ id: 'welcome', label: 'About', icon: HomeIcon },
		{ id: 'experience', label: 'Experience', icon: BriefcaseIcon },
		{ id: 'work', label: 'Code', icon: CodeBracketIcon },
		{ id: 'design', label: 'Design', icon: PaintBrushIcon },
		{ id: 'contact', label: 'Contact', icon: EnvelopeIcon },
	]

	const setActiveSection = (sectionId: string) => {
		activeSection.value = sectionId
	}

	const shouldShowSection = (sectionId: string) => {
		return isMobile.value || activeSection.value === sectionId
	}

	const scrollContainerRef = ref<HTMLElement | null>(null)
	const activeMobileSection = ref('welcome')
	let observer: IntersectionObserver | null = null

	onMounted(() => {
		if (!scrollContainerRef.value) return
		observer = new IntersectionObserver(
			(entries) => {
				const best = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
				if (best) activeMobileSection.value = best.target.id
			},
			{ root: scrollContainerRef.value, threshold: [0.3, 0.5] },
		)
		scrollContainerRef.value
			.querySelectorAll('section[id]')
			.forEach((el) => observer!.observe(el))
	})

	onUnmounted(() => observer?.disconnect())

	const scrollToSection = (id: string) => {
		activeMobileSection.value = id
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<template>
	<DaisyThemeProvider>
		<NavBar
			:sections="sections"
			:active-section="activeMobileSection"
			@navigate="scrollToSection"
		/>
		<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] h-screen">
			<aside class="hidden md:block w-64 p-8 bg-paper shadow-lg border-r-4 border-cocoa">
				<nav class="flex flex-col gap-3" role="navigation" aria-label="Main navigation">
					<button
						v-for="section in sections"
						:key="section.id"
						@click="setActiveSection(section.id)"
						class="flex items-center justify-start gap-3 px-4 py-3 transition-all rounded-2xl text-ink bg-transparent hover:bg-marigold/20 hover:shadow-sm border-2 border-transparent hover:border-cocoa"
						:class="{
							'!bg-marigold/20 shadow-sm font-bold !border-cocoa': activeSection === section.id,
						}"
						:aria-current="activeSection === section.id ? 'page' : undefined"
					>
						<component :is="section.icon" class="w-6 h-6 text-ink flex-shrink-0" />
						<span class="text-lg text-ink font-display">{{ section.label }}</span>
					</button>
				</nav>
			</aside>

			<main class="bg-paper grid grid-rows-[1fr_auto] min-h-0 h-full">
				<div ref="scrollContainerRef" class="overflow-y-auto md:overflow-hidden min-h-0">
					<WelcomeSection v-show="shouldShowSection('welcome')" />
					<ExperienceSection v-show="shouldShowSection('experience')" />
					<ProjectsSection v-show="shouldShowSection('work')" />
					<ShopSection v-show="shouldShowSection('design')" />
					<ContactSection v-show="shouldShowSection('contact')" />
				</div>
				<Footer />
			</main>
		</div>
	</DaisyThemeProvider>
</template>
