<script setup lang="ts">
import cartoonSami from '@/assets/images/Cartoon_Sam_V3_Pride.png'
</script>

<template>
	<section id="welcome" class="md:h-full md:min-h-0 md:overflow-y-auto bg-paper relative px-6 py-12 overflow-hidden">
		<div class="max-w-5xl mx-auto relative z-10 md:h-full flex md:items-center">
			<div class="grid lg:grid-cols-2 gap-8 items-center w-full">
				<!-- Polaroid style image -->
				<div class="relative order-2 lg:order-1">
					<div class="w-full max-w-sm mx-auto bg-paper rounded-2xl border-4 border-cocoa shadow-xl rotate-[-2deg] p-3 pb-12">
						<img :src="cartoonSami" alt="Cartoon illustration of Sami" class="w-full aspect-square object-cover rounded-lg" />
					</div>
					<div class="absolute -top-2 -right-2 w-full max-w-sm mx-auto aspect-[1/1.15] bg-paper rounded-2xl border-4 border-cocoa shadow-lg rotate-[2deg] z-[-1]"></div>
				</div>
				
				<!-- Content -->
				<div class="space-y-6 order-1 lg:order-2 text-center lg:text-left">
					<h1 class="text-6xl md:text-8xl font-bold text-ink">Sami Saxton-Getty</h1>
					<p class="text-xl md:text-2xl text-ink/80 font-medium">Frontend & Quality Engineer</p>
					<div class="flex flex-wrap gap-2 justify-center lg:justify-start">
						<span class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa shadow-sm">Frontend Developer</span>
						<span class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa shadow-sm">UI/UX Designer</span>
						<span class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa shadow-sm">Quality Engineer</span>
						<span class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa shadow-sm">AuDHD</span>
						<span class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa shadow-sm">Queer</span>
					</div>
					<div class="flex flex-wrap gap-5 justify-center lg:justify-start">
						<a href="https://www.linkedin.com/in/sami-saxton-getty/" target="_blank" rel="noopener noreferrer" class="text-cocoa text-base font-display border-b-2 border-cocoa hover:text-terracotta hover:border-terracotta transition-colors">LinkedIn</a>
						<a href="https://github.com/saxgetty" target="_blank" rel="noopener noreferrer" class="text-cocoa text-base font-display border-b-2 border-cocoa hover:text-terracotta hover:border-terracotta transition-colors">GitHub</a>
						<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="text-cocoa text-base font-display border-b-2 border-cocoa hover:text-terracotta hover:border-terracotta transition-colors">Etsy</a>
						<a href="https://www.pinterest.com/saxfreelances/" target="_blank" rel="noopener noreferrer" class="text-cocoa text-base font-display border-b-2 border-cocoa hover:text-terracotta hover:border-terracotta transition-colors">Pinterest</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
