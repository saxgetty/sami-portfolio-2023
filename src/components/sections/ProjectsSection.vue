<script setup lang="ts">
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<section id="work" class="md:h-full md:min-h-0 md:overflow-y-auto bg-paper relative px-6 py-12 overflow-hidden">
		<div class="max-w-5xl mx-auto relative z-10 md:h-full flex md:items-center">
			<div class="w-full">
			<!-- Header -->
			<div class="text-center mb-8">
				<div class="flex justify-center mb-4">
					<span class="w-14 h-14 rounded-full bg-sage flex items-center justify-center">
						<CodeBracketIcon class="w-7 h-7 text-ink" />
					</span>
				</div>
				<h2 class="text-5xl md:text-7xl font-bold text-ink">Code</h2>
			</div>
			
			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">E-Commerce Platform</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Full-featured e-commerce platform with Vue.js and TypeScript.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Vue.js</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">TypeScript</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Node.js</span>
						</div>
						<a href="#" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
							View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
						</a>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Portfolio Website</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Creative portfolio showcasing work and skills with animations.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Vue.js</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Tailwind</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">GSAP</span>
						</div>
						<a href="#" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
							View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
						</a>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Task Management App</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Task management with drag-and-drop functionality.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">React</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Redux</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Firebase</span>
						</div>
						<a href="#" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
							View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
						</a>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Analytics Dashboard</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Comprehensive analytics with interactive charts.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Vue.js</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Chart.js</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">API</span>
						</div>
						<a href="#" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
							View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
						</a>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Auth System</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Secure authentication system with JWT tokens.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">Node.js</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">JWT</span>
							<span class="rounded-full bg-sage text-white px-2 py-1 text-xs border border-cocoa">MongoDB</span>
						</div>
						<a href="#" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
							View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
						</a>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col items-center justify-center text-center h-full">
					<p class="text-base text-ink/70 mb-4">See more projects on GitHub</p>
					<a href="https://github.com/saxgetty" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-forest text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
						GitHub <ArrowTopRightOnSquareIcon class="w-4 h-4" />
					</a>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>
