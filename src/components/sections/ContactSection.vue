<script setup lang="ts">
// No additional logic needed
</script>

<template>
	<section id="contact" class="py-16 px-4">
		<div class="container mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
				<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
					Ready to start a project or just want to chat? I'd love to hear from you!
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
				<!-- Contact Information -->
				<div class="space-y-6">
					<div class="card glass">
						<div class="card-body">
							<h3 class="card-title text-2xl text-primary mb-6">Let's Connect</h3>
							
							<div class="space-y-4">
								<div class="flex items-center gap-4">
									<div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
										<span class="text-2xl">📧</span>
									</div>
									<div>
										<h4 class="font-semibold text-base-content">Email</h4>
										<p class="text-base-content/80">saxgetty4@gmail.com</p>
									</div>
								</div>
								<div class="flex items-center gap-4">
									<div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
										<span class="text-2xl">📍</span>
									</div>
									<div>
										<h4 class="font-semibold text-base-content">Location</h4>
										<p class="text-base-content/80">Seattle, WA</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Social Links -->
					<div class="card glass">
						<div class="card-body">
							<h3 class="card-title text-xl text-primary mb-4">Follow Me</h3>
							<div class="flex gap-4">
								<button class="btn btn-circle btn-primary">
									<span class="text-xl">🐦</span>
								</button>
								<button class="btn btn-circle btn-secondary">
									<span class="text-xl">💼</span>
								</button>
								<button class="btn btn-circle btn-accent">
									<span class="text-xl">🐙</span>
								</button>
								<button class="btn btn-circle btn-primary">
									<span class="text-xl">📷</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="card glass">
					<div class="card-body">
						<h3 class="card-title text-2xl text-primary mb-6">Send Message</h3>
						
						<form class="space-y-4">
							<div class="form-control">
								<label class="label">
									<span class="label-text text-base-content">Name</span>
								</label>
								<input 
									type="text" 
									placeholder="Your name" 
									class="input input-bordered w-full" 
									required 
								/>
							</div>
							
							<div class="form-control">
								<label class="label">
									<span class="label-text text-base-content">Email</span>
								</label>
								<input 
									type="email" 
									placeholder="your.email@example.com" 
									class="input input-bordered w-full" 
									required 
								/>
							</div>
							
							<div class="form-control">
								<label class="label">
									<span class="label-text text-base-content">Subject</span>
								</label>
								<select class="select select-bordered w-full">
									<option disabled selected>Choose a subject</option>
									<option>Project Inquiry</option>
									<option>Job Opportunity</option>
									<option>Collaboration</option>
									<option>General Question</option>
								</select>
							</div>
							
							<div class="form-control">
								<label class="label">
									<span class="label-text text-base-content">Message</span>
								</label>
								<textarea 
									placeholder="Tell me about your project or question..." 
									class="textarea textarea-bordered h-32" 
									required
								></textarea>
							</div>
							
							<div class="form-control">
								<button type="submit" class="btn btn-primary btn-lg">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<!-- Availability Status -->
			<div class="text-center mt-12">
				<div class="card glass max-w-md mx-auto">
					<div class="card-body">
						<div class="flex items-center justify-center gap-3">
							<div class="badge badge-success badge-lg">Available</div>
							<span class="text-base-content/80">Currently accepting new projects</span>
						</div>
						<p class="text-sm text-base-content/60 mt-2">
							Response time: Usually within 24 hours
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template> 