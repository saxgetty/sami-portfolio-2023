<script setup lang="ts">
import { BriefcaseIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<section id="experience" class="md:h-full md:min-h-0 md:overflow-y-auto bg-paper relative px-6 py-12 overflow-hidden">
		<div class="max-w-5xl mx-auto relative z-10 md:h-full flex md:items-center">
			<div class="w-full">
				<!-- Header -->
				<div class="text-center mb-10">
					<div class="flex justify-center mb-4">
						<span class="w-14 h-14 rounded-full bg-marigold flex items-center justify-center">
							<BriefcaseIcon class="w-7 h-7 text-ink" />
						</span>
					</div>
					<h2 class="text-5xl md:text-7xl font-bold text-ink">Experience</h2>
				</div>
				
				<div class="flex justify-center">
				<div class="inline-flex flex-col lg:flex-row gap-12 lg:gap-16">
					<!-- Timeline -->
					<div>
						<div class="flex items-center gap-3 mb-6">
							<span class="w-8 h-8 rounded-full bg-marigold flex items-center justify-center flex-shrink-0">
								<BriefcaseIcon class="w-4 h-4 text-ink" />
							</span>
							<h3 class="text-xl font-bold text-ink">Work History</h3>
						</div>
						
						<div class="pl-11 space-y-4">
							<div class="flex gap-4 items-start">
								<div class="w-3 h-3 rounded-full bg-forest border-2 border-cocoa mt-1.5 flex-shrink-0"></div>
								<div>
									<div class="text-lg font-bold text-ink">Senior Quality Engineer I</div>
									<div class="text-base text-ink/80">Allocate</div>
									<div class="text-xs text-ink/60">2024 – Present</div>
								</div>
							</div>
							<div class="flex gap-4 items-start">
								<div class="w-3 h-3 rounded-full bg-cocoa border-2 border-cocoa mt-1.5 flex-shrink-0"></div>
								<div>
									<div class="text-lg font-bold text-ink">QA Engineer</div>
									<div class="text-base text-ink/80">Binance.US</div>
									<div class="text-xs text-ink/60">2022 – 2023</div>
								</div>
							</div>
							<div class="flex gap-4 items-start">
								<div class="w-3 h-3 rounded-full bg-cocoa border-2 border-cocoa mt-1.5 flex-shrink-0"></div>
								<div>
									<div class="text-lg font-bold text-ink">QC Specialist</div>
									<div class="text-base text-ink/80">Freedom Forever</div>
									<div class="text-xs text-ink/60">2019 – 2022</div>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Skills -->
					<div>
						<div class="flex items-center gap-3 mb-6">
							<span class="w-8 h-8 rounded-full bg-marigold flex items-center justify-center flex-shrink-0">
								<WrenchScrewdriverIcon class="w-4 h-4 text-ink" />
							</span>
							<h3 class="text-xl font-bold text-ink">Skills & Tools</h3>
						</div>
						
						<div class="space-y-6 pl-11">
							<div>
								<h4 class="text-sm font-bold text-ink/60 uppercase tracking-wide mb-3">Languages</h4>
								<div class="flex flex-wrap gap-2">
									<span class="badge badge-lg rounded-full bg-forest text-white border-2 border-cocoa px-4 py-3">JavaScript</span>
									<span class="badge badge-lg rounded-full bg-forest text-white border-2 border-cocoa px-4 py-3">TypeScript</span>
									<span class="badge badge-lg rounded-full bg-forest text-white border-2 border-cocoa px-4 py-3">Python</span>
									<span class="badge badge-lg rounded-full bg-forest text-white border-2 border-cocoa px-4 py-3">HTML/CSS</span>
								</div>
							</div>
							
							<div>
								<h4 class="text-sm font-bold text-ink/60 uppercase tracking-wide mb-3">Frameworks</h4>
								<div class="flex flex-wrap gap-2">
									<span class="badge badge-lg rounded-full bg-sky text-white border-2 border-cocoa px-4 py-3">Vue.js</span>
									<span class="badge badge-lg rounded-full bg-sky text-white border-2 border-cocoa px-4 py-3">React</span>
									<span class="badge badge-lg rounded-full bg-sky text-white border-2 border-cocoa px-4 py-3">Node.js</span>
									<span class="badge badge-lg rounded-full bg-sky text-white border-2 border-cocoa px-4 py-3">Tailwind</span>
								</div>
							</div>
							
							<div>
								<h4 class="text-sm font-bold text-ink/60 uppercase tracking-wide mb-3">Testing & Tools</h4>
								<div class="flex flex-wrap gap-2">
									<span class="badge badge-lg rounded-full bg-coral text-white border-2 border-cocoa px-4 py-3">Cypress</span>
									<span class="badge badge-lg rounded-full bg-coral text-white border-2 border-cocoa px-4 py-3">Playwright</span>
									<span class="badge badge-lg rounded-full bg-coral text-white border-2 border-cocoa px-4 py-3">Jest</span>
									<span class="badge badge-lg rounded-full bg-coral text-white border-2 border-cocoa px-4 py-3">Git</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
</template>
