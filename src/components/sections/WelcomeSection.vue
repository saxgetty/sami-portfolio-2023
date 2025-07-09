<script setup lang="ts">
import cartoonSam from '@/assets/images/Cartoon_Sam_V3_Pride.png'
</script>

<template>
	<section id="welcome" class="min-h-screen flex items-center justify-center p-4">
		<div class="container mx-auto">
			<div class="card glass max-w-4xl mx-auto text-center">
				<div class="card-body">
					<!-- Profile Image -->
					<div class="avatar mb-6">
						<div class="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img :src="cartoonSam" alt="Sami" class="w-full h-full object-cover" />
						</div>
					</div>

					<!-- Name and Title -->
					<h1 class="text-4xl md:text-6xl font-bold mb-4 text-primary">
						Sami
					</h1>
					<h2 class="text-xl md:text-2xl mb-6 text-secondary">
						Full Stack Developer & Creative Technologist
					</h2>

					<!-- Description -->
					<p class="text-lg mb-8 max-w-2xl mx-auto">
						Passionate about creating beautiful, functional, and accessible web experiences. 
						I blend creativity with technical expertise to build solutions that make a difference.
					</p>

					<!-- Skills Badges -->
					<div class="flex flex-wrap justify-center gap-2 mb-8">
						<div class="badge badge-primary badge-lg">Vue.js</div>
						<div class="badge badge-secondary badge-lg">React</div>
						<div class="badge badge-accent badge-lg">TypeScript</div>
						<div class="badge badge-primary badge-lg">Node.js</div>
						<div class="badge badge-secondary badge-lg">Python</div>
						<div class="badge badge-accent badge-lg">AWS</div>
					</div>

					<!-- Call to Action Buttons -->
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button class="btn btn-primary btn-lg">
							View My Work
						</button>
						<button class="btn btn-outline btn-secondary btn-lg">
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template> 