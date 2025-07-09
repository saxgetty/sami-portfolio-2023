<script setup lang="ts">
import cartoonSam from '@/assets/images/Cartoon_Sam_V3_Pride.png'

const labels = [
  'Frontend Developer',
  'UI/UX Designer',
  'Quality Engineer',
  'AuDHD',
  'Queer'
]

const socialLinks = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/sami-saxton-getty' },
  { platform: 'GitHub', url: 'https://github.com/saxfreelances' },
  { platform: 'Twitter', url: 'https://twitter.com/saxfreelances' }
]
</script>

<template>
	<section id="about" class="py-16 px-4">
		<div class="container mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
				<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
					Get to know me better and understand what drives my passion for technology and creativity.
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-8 items-start">
				<!-- About Content -->
				<div class="card glass">
					<div class="card-body">
						<h3 class="card-title text-2xl mb-4">My Story</h3>
						<div class="space-y-4 text-base-content/90">
							<p>
								I'm a passionate full-stack developer with a love for creating intuitive and beautiful user experiences. 
								My journey in tech started with curiosity and has evolved into a career focused on innovation and problem-solving.
							</p>
							<p>
								When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
								or sharing knowledge with the developer community. I believe in continuous learning and staying 
								ahead of industry trends.
							</p>
							<p>
								My approach combines technical expertise with creative thinking, ensuring that every project 
								I work on is not only functional but also delightful to use.
							</p>
						</div>
					</div>
				</div>

				<!-- Skills and Stats -->
				<div class="space-y-6">
					<!-- Stats -->
					<div class="stats stats-vertical lg:stats-horizontal shadow glass">
						<div class="stat">
							<div class="stat-title">Projects Completed</div>
							<div class="stat-value text-primary">50+</div>
							<div class="stat-desc">Successfully delivered</div>
						</div>
						
						<div class="stat">
							<div class="stat-title">Years Experience</div>
							<div class="stat-value text-secondary">5+</div>
							<div class="stat-desc">Professional development</div>
						</div>
						
						<div class="stat">
							<div class="stat-title">Technologies</div>
							<div class="stat-value text-accent">15+</div>
							<div class="stat-desc">Mastered frameworks</div>
						</div>
					</div>

					<!-- Skills Progress -->
					<div class="card glass">
						<div class="card-body">
							<h3 class="card-title text-xl mb-4">Technical Skills</h3>
							<div class="space-y-4">
								<div>
									<div class="flex justify-between mb-2">
										<span class="text-sm font-medium">Frontend Development</span>
										<span class="text-sm text-primary">95%</span>
									</div>
									<progress class="progress progress-primary w-full" value="95" max="100"></progress>
								</div>
								
								<div>
									<div class="flex justify-between mb-2">
										<span class="text-sm font-medium">Backend Development</span>
										<span class="text-sm text-secondary">90%</span>
									</div>
									<progress class="progress progress-secondary w-full" value="90" max="100"></progress>
								</div>
								
								<div>
									<div class="flex justify-between mb-2">
										<span class="text-sm font-medium">UI/UX Design</span>
										<span class="text-sm text-accent">85%</span>
									</div>
									<progress class="progress progress-accent w-full" value="85" max="100"></progress>
								</div>
								
								<div>
									<div class="flex justify-between mb-2">
										<span class="text-sm font-medium">DevOps & Cloud</span>
										<span class="text-sm text-primary">80%</span>
									</div>
									<progress class="progress progress-primary w-full" value="80" max="100"></progress>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.float {
  animation: float 6s ease-in-out infinite;
}
</style> 