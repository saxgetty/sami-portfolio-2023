<script setup lang="ts">
	import About from './About.vue'
	import Experience from './Experience.vue'
	import Work from './Work.vue'
	import Contact from './Contact.vue'
	import { backgroundColors } from '../constants/backgroundColors.ts'
</script>

<template>
	<section
		id="welcome"
		class="snap-start h-screen">
		<About :background="backgroundColors.welcome" />
	</section>
	<section
		id="about"
		class="snap-start h-screen">
		<About :background="backgroundColors.about" />
	</section>
	<section
		id="experience"
		class="snap-start h-screen">
		<Experience :background="backgroundColors.experience" />
	</section>
	<section
		id="work"
		class="snap-start h-screen">
		<Work :background="backgroundColors.work" />
	</section>
	<section
		id="contact"
		class="snap-start h-screen">
		<Contact :background="backgroundColors.contact" />
	</section>
</template>
