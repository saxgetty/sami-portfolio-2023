<script setup lang="ts">
const projects = [
  {
    title: 'e-commerce platform',
    summary: 'A full-featured e-commerce platform built with Vue.js and TypeScript, featuring a responsive design and seamless user experience.',
    image: '/path-to-image.jpg',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://project-url.com'
  },
  {
    title: 'portfolio website',
    summary: 'A creative portfolio website showcasing my work and skills, built with modern web technologies and a focus on accessibility.',
    image: '/path-to-image.jpg',
    technologies: ['Vue.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://project-url.com'
  },
  {
    title: 'task management app',
    summary: 'A task management application with drag-and-drop functionality, real-time updates, and intuitive user interface.',
    image: '/path-to-image.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    link: 'https://project-url.com'
  },
  {
    title: 'task management app',
    summary: 'A task management application with drag-and-drop functionality, real-time updates, and intuitive user interface.',
    image: '/path-to-image.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    link: 'https://project-url.com'
  }
]
</script>

<template>
	<section id="projects" class="py-16 px-4">
		<div class="container mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
				<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
					A showcase of my recent work and the technologies I've used to bring ideas to life.
				</p>
			</div>

			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Project 1 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">🚀</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-primary">E-Commerce Platform</h3>
						<p class="text-base-content/90">
							A full-stack e-commerce solution with payment integration, user management, and admin dashboard.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">Vue.js</div>
							<div class="badge badge-secondary badge-sm">Node.js</div>
							<div class="badge badge-accent badge-sm">Stripe</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-primary btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">📱</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-secondary">Task Management App</h3>
						<p class="text-base-content/90">
							A collaborative task management application with real-time updates and team features.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">React</div>
							<div class="badge badge-secondary badge-sm">Firebase</div>
							<div class="badge badge-accent badge-sm">TypeScript</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-secondary btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">🎨</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-accent">Portfolio Website</h3>
						<p class="text-base-content/90">
							A modern portfolio website with glassmorphism effects and responsive design.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">Vue.js</div>
							<div class="badge badge-secondary badge-sm">Tailwind CSS</div>
							<div class="badge badge-accent badge-sm">DaisyUI</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-accent btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>

				<!-- Project 4 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">📊</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-primary">Analytics Dashboard</h3>
						<p class="text-base-content/90">
							A comprehensive analytics dashboard with interactive charts and data visualization.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">Vue.js</div>
							<div class="badge badge-secondary badge-sm">Chart.js</div>
							<div class="badge badge-accent badge-sm">API</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-primary btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>

				<!-- Project 5 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">🔐</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-secondary">Authentication System</h3>
						<p class="text-base-content/90">
							A secure authentication system with JWT tokens and role-based access control.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">Node.js</div>
							<div class="badge badge-secondary badge-sm">JWT</div>
							<div class="badge badge-accent badge-sm">MongoDB</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-secondary btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>

				<!-- Project 6 -->
				<div class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div class="w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
							<span class="text-4xl">🤖</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-accent">AI Chat Bot</h3>
						<p class="text-base-content/90">
							An intelligent chatbot powered by machine learning for customer support automation.
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div class="badge badge-primary badge-sm">Python</div>
							<div class="badge badge-secondary badge-sm">TensorFlow</div>
							<div class="badge badge-accent badge-sm">API</div>
						</div>
						<div class="card-actions justify-end">
							<button class="btn btn-accent btn-sm">View Project</button>
							<button class="btn btn-outline btn-sm">Source Code</button>
						</div>
					</div>
				</div>
			</div>

			<!-- View All Projects Button -->
			<div class="text-center mt-12">
				<button class="btn btn-primary btn-lg">
					View All Projects
				</button>
			</div>
		</div>
	</section>
</template> 