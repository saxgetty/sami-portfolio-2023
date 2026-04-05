<script setup lang="ts">
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<section id="contact" class="md:h-full md:min-h-0 md:overflow-y-auto bg-paper relative px-6 py-12 overflow-hidden">
		<div class="max-w-5xl mx-auto relative z-10 md:h-full flex md:items-center">
			<div class="w-full">
			<!-- Header -->
			<div class="text-center mb-8">
				<div class="flex justify-center mb-4">
					<span class="w-14 h-14 rounded-full bg-marigold flex items-center justify-center">
						<EnvelopeIcon class="w-7 h-7 text-ink" />
					</span>
				</div>
				<h2 class="text-5xl md:text-7xl font-bold text-ink">Get in Touch</h2>
			</div>
			
			<div class="grid lg:grid-cols-2 gap-12 items-start">
				<!-- Contact Info -->
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<span class="w-10 h-10 rounded-full bg-marigold flex items-center justify-center flex-shrink-0">
							<EnvelopeIcon class="w-5 h-5 text-ink" />
						</span>
						<div>
							<h3 class="text-lg font-bold text-ink mb-1">Email Me</h3>
							<p class="text-base text-ink/70 mb-1">Drop me a line anytime</p>
							<a href="mailto:saxfreelances@gmail.com" class="text-terracotta text-base font-medium hover:underline">saxfreelances@gmail.com</a>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<span class="w-10 h-10 rounded-full bg-marigold flex items-center justify-center flex-shrink-0">
							<ChatBubbleLeftRightIcon class="w-5 h-5 text-ink" />
						</span>
						<div>
							<h3 class="text-lg font-bold text-ink mb-1">Let's Connect</h3>
							<p class="text-base text-ink/70 mb-3">Find me on social media</p>
							<div class="flex flex-wrap gap-2">
								<a href="https://www.linkedin.com/in/sami-saxton-getty/" target="_blank" rel="noopener noreferrer" class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa hover:shadow-lg transition-shadow">LinkedIn</a>
								<a href="https://github.com/saxgetty" target="_blank" rel="noopener noreferrer" class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa hover:shadow-lg transition-shadow">GitHub</a>
								<a href="https://www.etsy.com/shop/saxfreelances" target="_blank" rel="noopener noreferrer" class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa hover:shadow-lg transition-shadow">Etsy</a>
								<a href="https://www.pinterest.com/saxfreelances/" target="_blank" rel="noopener noreferrer" class="rounded-full bg-sage text-white px-4 py-1.5 text-sm font-medium border-2 border-cocoa hover:shadow-lg transition-shadow">Pinterest</a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Contact Form -->
				<form class="space-y-4">
					<div>
						<label for="name" class="block text-base font-bold text-ink mb-1">Name</label>
						<input 
							type="text" 
							id="name" 
							name="name" 
							placeholder="What should I call you?"
							class="w-full px-4 py-3 rounded-xl bg-paper border-2 border-cocoa text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all" 
						/>
					</div>
					<div>
						<label for="email" class="block text-base font-bold text-ink mb-1">Email</label>
						<input 
							type="email" 
							id="email" 
							name="email" 
							placeholder="your@email.com"
							class="w-full px-4 py-3 rounded-xl bg-paper border-2 border-cocoa text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all" 
						/>
					</div>
					<div>
						<label for="message" class="block text-base font-bold text-ink mb-1">Message</label>
						<textarea 
							id="message" 
							name="message" 
							rows="4" 
							placeholder="Tell me about your project..."
							class="w-full px-4 py-3 rounded-xl bg-paper border-2 border-cocoa text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all resize-none"
						></textarea>
					</div>
					<button 
						type="submit" 
						class="w-full py-3 rounded-xl bg-coral text-white text-lg font-bold font-display border-2 border-cocoa shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
					>
						Send Message
					</button>
				</form>
			</div>
			</div>
		</div>
	</section>
</template>
