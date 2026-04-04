<script setup lang="ts">
import { PaintBrushIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<section id="design" class="md:h-full md:min-h-0 md:overflow-y-auto bg-paper relative px-6 py-12 overflow-hidden">
		<div class="max-w-5xl mx-auto relative z-10 md:h-full flex md:items-center">
			<div class="w-full">
			<!-- Header -->
			<div class="text-center mb-8">
				<div class="flex justify-center mb-4">
					<span class="w-14 h-14 rounded-full bg-marigold flex items-center justify-center">
						<PaintBrushIcon class="w-7 h-7 text-ink" />
					</span>
				</div>
				<h2 class="text-5xl md:text-7xl font-bold text-ink">Design</h2>
			</div>
			
			<!-- Products Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Creative Design Print</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Vibrant print showcasing creative design elements.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Print</span>
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Art</span>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-xl font-bold text-ink font-display">$25</p>
							<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
								View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Developer T-Shirt</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Comfortable tee with developer-themed design.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Apparel</span>
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Dev</span>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-xl font-bold text-ink font-display">$30</p>
							<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
								View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Designer Mug</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Ceramic mug with creative design for your coffee.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Mug</span>
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Home</span>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-xl font-bold text-ink font-display">$20</p>
							<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
								View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Digital Art Print</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">High-resolution digital art for instant download.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Digital</span>
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Art</span>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-xl font-bold text-ink font-display">$15</p>
							<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
								View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col h-full">
					<h3 class="text-xl font-bold text-ink mb-2">Wallpaper Set</h3>
					<p class="text-base text-ink/80 mb-4 flex-grow">Beautiful wallpapers for phone and desktop.</p>
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Digital</span>
							<span class="rounded-full bg-marigold text-ink px-2 py-1 text-xs border border-cocoa">Wallpaper</span>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-xl font-bold text-ink font-display">$8</p>
							<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-terracotta text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
								View <ArrowTopRightOnSquareIcon class="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
				
				<div class="rounded-2xl shadow-md hover:shadow-lg transition-all bg-paper border-2 border-cocoa p-5 flex flex-col items-center justify-center text-center h-full">
					<p class="text-base text-ink/70 mb-4">Browse my full collection</p>
					<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-coral text-white px-4 py-2 text-sm font-display border-2 border-cocoa shadow-md hover:shadow-lg transition-all">
						Etsy Shop <ArrowTopRightOnSquareIcon class="w-4 h-4" />
					</a>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>
