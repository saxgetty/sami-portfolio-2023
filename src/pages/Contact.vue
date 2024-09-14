<script setup lang="ts">
	import FormInput from '../components/FormInput.vue'
	import FormTextArea from '../components/FormTextArea.vue'
	import PrimaryButton from '../components/PrimaryButton.vue'

	const props = defineProps<{ background: string }>()
</script>

<template>
	<div
		:class="[
			props.background,
			'h-full flex flex-col justify-center p-8 md:p-16',
		]">
		<div
			class="w-full xl:w-1/2 mx-auto bg-white shadow-lg p-6 md:p-12 rounded-lg">
			<header class="mb-6 text-center">
				<h1 class="text-4xl font-bold text-black">Contact Me</h1>
			</header>

			<form class="space-y-6">
				<FormInput
					id="name"
					label="Name"
					type="text"
					required />

				<FormInput
					id="email"
					label="Email"
					type="email"
					required />

				<FormTextArea
					id="message"
					label="Message"
					required />

				<div class="text-center">
					<PrimaryButton
						label="Send Message"
						:classes="'bg-blue-500 hover:bg-blue-600 shadow-lg'" />
					<!-- :onClick="() => submitForm()" -->
				</div>
			</form>
		</div>
	</div>
</template>
