<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/24/solid'

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'dev'

const formStatus = ref<FormStatus>('idle')
const SUCCESS_MS = 2200

let successResetTimer: ReturnType<typeof setTimeout> | null = null

function clearSuccessTimer() {
	if (successResetTimer !== null) {
		clearTimeout(successResetTimer)
		successResetTimer = null
	}
}

function scheduleSuccessReset() {
	clearSuccessTimer()
	successResetTimer = setTimeout(() => {
		formStatus.value = 'idle'
		successResetTimer = null
	}, SUCCESS_MS)
}

onUnmounted(clearSuccessTimer)

async function onSubmit(e: Event) {
	e.preventDefault()
	const form = e.target as HTMLFormElement

	if (import.meta.env.DEV) {
		formStatus.value = 'dev'
		return
	}

	formStatus.value = 'sending'
	try {
		const data = new FormData(form)
		const res = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(data as never).toString(),
		})
		if (!res.ok) throw new Error('submit failed')
		form.reset()
		formStatus.value = 'success'
		scheduleSuccessReset()
	} catch {
		formStatus.value = 'error'
	}
}
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
							<a href="mailto:sax.freelances@gmail.com" class="text-terracotta text-base font-medium hover:underline">sax.freelances@gmail.com</a>
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
				
				<!-- Contact Form: Netlify Forms (enable in Netlify UI + add notification email) -->
				<form
					name="contact"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					class="space-y-4"
					@submit="onSubmit"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p class="hidden" aria-hidden="true">
						<label>
							Do not fill:
							<input name="bot-field" type="text" tabindex="-1" autocomplete="off" />
						</label>
					</p>
					<div>
						<label for="name" class="block text-base font-bold text-ink mb-1">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							required
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
							required
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
							required
							placeholder="Tell me about your project..."
							class="w-full px-4 py-3 rounded-xl bg-paper border-2 border-cocoa text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all resize-none"
						></textarea>
					</div>
					<p v-if="formStatus === 'error'" class="text-base font-medium text-coral" role="alert">
						Something went wrong. Try the email link on the left, or try again later.
					</p>
					<p v-else-if="formStatus === 'dev'" class="text-base font-medium text-ink/80" role="status">
						Form submissions only work on the deployed Netlify site, not in local dev.
					</p>
					<button
						type="submit"
						:disabled="formStatus === 'sending' || formStatus === 'success'"
						:class="[
							'w-full py-3 rounded-xl text-lg font-bold font-display border-2 border-cocoa shadow-md transition-all flex items-center justify-center gap-2 min-h-[52px]',
							formStatus === 'success'
								? 'bg-forest text-white shadow-lg'
								: 'bg-coral text-white hover:shadow-xl hover:-translate-y-1 disabled:opacity-60 disabled:pointer-events-none',
						]"
					>
						<template v-if="formStatus === 'success'">
							<CheckIcon class="w-8 h-8" aria-hidden="true" />
							<span class="sr-only">Message sent</span>
						</template>
						<template v-else-if="formStatus === 'sending'">Sending…</template>
						<template v-else>Send Message</template>
					</button>
				</form>
			</div>
			</div>
		</div>
	</section>
</template>
