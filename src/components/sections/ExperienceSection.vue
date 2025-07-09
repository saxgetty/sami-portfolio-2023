<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
  {
    period: '2024+',
    title: 'quality engineer II',
    company: 'allocate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    period: '2022 - 2023',
    title: 'quality assurance engineer',
    company: 'binance.us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    period: '2019 - 2022',
    title: 'quality control specialist',
    company: 'freedom forever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
])
</script>

<template>
	<section id="experience" class="py-16 px-4">
		<div class="container mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Experience</h2>
				<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
					My professional journey and the companies I've had the pleasure to work with.
				</p>
			</div>

			<!-- Timeline -->
			<div class="max-w-4xl mx-auto">
				<div class="space-y-8">
					<!-- Current Role -->
					<div class="card glass">
						<div class="card-body">
							<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
								<div>
									<h3 class="card-title text-2xl text-primary">Senior Full Stack Developer</h3>
									<p class="text-lg text-secondary font-medium">TechCorp Inc.</p>
								</div>
								<div class="badge badge-primary badge-lg mt-2 lg:mt-0">2022 - Present</div>
							</div>
							
							<p class="text-base-content/90 mb-4">
								Leading development of enterprise web applications using Vue.js, Node.js, and AWS. 
								Mentoring junior developers and implementing best practices for code quality and performance.
							</p>
							
							<div class="flex flex-wrap gap-2">
								<div class="badge badge-outline">Vue.js</div>
								<div class="badge badge-outline">Node.js</div>
								<div class="badge badge-outline">AWS</div>
								<div class="badge badge-outline">TypeScript</div>
								<div class="badge badge-outline">Docker</div>
							</div>
						</div>
					</div>

					<!-- Previous Role -->
					<div class="card glass">
						<div class="card-body">
							<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
								<div>
									<h3 class="card-title text-2xl text-secondary">Frontend Developer</h3>
									<p class="text-lg text-secondary font-medium">Digital Solutions Ltd.</p>
								</div>
								<div class="badge badge-secondary badge-lg mt-2 lg:mt-0">2020 - 2022</div>
							</div>
							
							<p class="text-base-content/90 mb-4">
								Developed responsive web applications and e-commerce platforms. 
								Collaborated with design teams to implement pixel-perfect UI components.
							</p>
							
							<div class="flex flex-wrap gap-2">
								<div class="badge badge-outline">React</div>
								<div class="badge badge-outline">JavaScript</div>
								<div class="badge badge-outline">CSS3</div>
								<div class="badge badge-outline">Git</div>
								<div class="badge badge-outline">Figma</div>
							</div>
						</div>
					</div>

					<!-- First Role -->
					<div class="card glass">
						<div class="card-body">
							<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
								<div>
									<h3 class="card-title text-2xl text-accent">Junior Developer</h3>
									<p class="text-lg text-secondary font-medium">StartupXYZ</p>
								</div>
								<div class="badge badge-accent badge-lg mt-2 lg:mt-0">2019 - 2020</div>
							</div>
							
							<p class="text-base-content/90 mb-4">
								Started my career building web applications and learning modern development practices. 
								Worked on various projects from concept to deployment.
							</p>
							
							<div class="flex flex-wrap gap-2">
								<div class="badge badge-outline">HTML5</div>
								<div class="badge badge-outline">CSS3</div>
								<div class="badge badge-outline">JavaScript</div>
								<div class="badge badge-outline">PHP</div>
								<div class="badge badge-outline">MySQL</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Education Section -->
			<div class="mt-16">
				<div class="text-center mb-8">
					<h3 class="text-2xl md:text-3xl font-bold text-primary mb-4">Education</h3>
				</div>
				
				<div class="card glass max-w-2xl mx-auto">
					<div class="card-body">
						<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
							<div>
								<h4 class="card-title text-xl text-primary">Bachelor of Computer Science</h4>
								<p class="text-lg text-secondary font-medium">University of Technology</p>
							</div>
							<div class="badge badge-primary badge-lg mt-2 lg:mt-0">2015 - 2019</div>
						</div>
						
						<p class="text-base-content/90">
							Graduated with honors, specializing in web development and software engineering. 
							Completed capstone project on modern web application architecture.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template> 