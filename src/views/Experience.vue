<script setup lang="ts">
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
				<h1 class="text-4xl font-bold text-black">Experience</h1>
			</header>

			<!-- Timeline Wrapper -->
			<div class="relative border-l-4 border-blue-500 pl-8 space-y-12">
				<!-- Timeline Item -->
				<div class="relative">
					<!-- Timeline circle -->
					<div
						class="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></div>

					<div class="pl-4">
						<h3 class="text-2xl font-semibold text-gray-800">Job Title at Company</h3>
						<time class="block mb-2 text-sm text-gray-600">Year - Year</time>
						<p class="text-gray-700">
							Brief description of the role and key responsibilities. What was
							accomplished during the role.
						</p>
					</div>
				</div>

				<!-- Another Timeline Item -->
				<div class="relative">
					<div
						class="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></div>

					<div class="pl-4">
						<h3 class="text-2xl font-semibold text-gray-800">
							Another Job Title at Company
						</h3>
						<time class="block mb-2 text-sm text-gray-600">Year - Year</time>
						<p class="text-gray-700">
							Brief description of this role and key responsibilities.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
