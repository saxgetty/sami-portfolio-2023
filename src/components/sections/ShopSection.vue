<script setup lang="ts">
	import { ref, onMounted } from 'vue'

	interface EtsyListing {
		listing_id: number
		title: string
		description: string
		price: {
			amount: number
			divisor: number
			currency_code: string
		}
		url: string
		images: Array<{
			url_75x75: string
			url_170x135: string
			url_570xN: string
		}>
		state: string
		quantity: number
		tags: string[]
	}

	const shopItems = ref<EtsyListing[]>([])
	const isLoading = ref(true)
	const error = ref<string | null>(null)

	const SHOP_NAME = 'saxfreelances'

	const fetchEtsyListings = async () => {
		try {
			isLoading.value = true
			error.value = null

			// Try to fetch from our backend proxy first
			try {
				const response = await fetch('http://localhost:3001/api/etsy/listings')
				
				if (response.ok) {
					const data = await response.json()
					if (data.results && data.results.length > 0) {
						shopItems.value = data.results
						return // Success! Exit early
					}
				}
			} catch (proxyError) {
				console.log('Backend proxy not available, using sample data:', (proxyError as Error).message)
			}

			// Fallback to sample data if proxy fails or returns no data
			console.log('Using sample data for shop items')
			
			// Simulate API delay
			await new Promise(resolve => setTimeout(resolve, 1000))
			
			// Sample data that matches your actual products
			shopItems.value = [
				{
					listing_id: 1,
					title: 'Creative Design Print',
					description: 'A vibrant print showcasing creative design elements',
					price: { amount: 2500, divisor: 100, currency_code: 'USD' },
					url: 'https://etsy.com/your-shop/item1',
					images: [{ url_75x75: '', url_170x135: '', url_570xN: '' }],
					state: 'active',
					quantity: 10,
					tags: ['print', 'design', 'creative']
				},
				{
					listing_id: 2,
					title: 'Developer T-Shirt',
					description: 'Comfortable t-shirt with a developer-themed design',
					price: { amount: 3000, divisor: 100, currency_code: 'USD' },
					url: 'https://etsy.com/your-shop/item2',
					images: [{ url_75x75: '', url_170x135: '', url_570xN: '' }],
					state: 'active',
					quantity: 15,
					tags: ['tshirt', 'developer', 'tech']
				},
				{
					listing_id: 3,
					title: 'Designer Mug',
					description: 'Ceramic mug with a creative design',
					price: { amount: 2000, divisor: 100, currency_code: 'USD' },
					url: 'https://etsy.com/your-shop/item3',
					images: [{ url_75x75: '', url_170x135: '', url_570xN: '' }],
					state: 'active',
					quantity: 20,
					tags: ['mug', 'design', 'ceramic']
				}
			]
			
		} catch (err) {
			console.error('Error fetching Etsy listings:', err)
			error.value = 'Failed to load shop items'
		} finally {
			isLoading.value = false
		}
	}

	const formatPrice = (price: {
		amount: number
		divisor: number
		currency_code: string
	}) => {
		return `$${(price.amount / price.divisor).toFixed(2)}`
	}

	const openModal = (modalId: string) => {
		const modal = document.getElementById(modalId) as HTMLDialogElement
		if (modal) {
			modal.showModal()
		}
	}

	onMounted(() => {
		fetchEtsyListings()
	})
</script>

<template>
	<section
		id="shop"
		class="py-16 px-4">
		<div class="container mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Shop</h2>
				<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
					Check out my latest creations and digital products on Etsy.
				</p>
			</div>

			<!-- Loading State -->
			<div
				v-if="isLoading"
				class="text-center py-12">
				<div class="loading loading-spinner loading-lg text-primary"></div>
				<p class="mt-4 text-base-content/70">Loading shop items...</p>
			</div>

			<!-- Error State -->
			<div
				v-else-if="error"
				class="text-center py-12">
				<div class="alert alert-error max-w-md mx-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{{ error }}</span>
				</div>
			</div>

			<!-- Products Grid -->
			<div
				v-else
				class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="item in shopItems"
					:key="item.listing_id"
					class="card glass hover:shadow-xl transition-all duration-300">
					<figure class="px-6 pt-6">
						<div
							class="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
							<img
								v-if="item.images && item.images[0]?.url_570xN"
								:src="item.images[0].url_570xN"
								:alt="item.title"
								class="w-full h-full object-cover" />
							<span
								v-else
								class="text-4xl"
								>🎨</span
							>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title text-xl text-primary">{{ item.title }}</h3>
						<p class="text-base-content/90 line-clamp-2">
							{{ item.description }}
						</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<div
								v-for="tag in item.tags.slice(0, 3)"
								:key="tag"
								class="badge badge-primary badge-sm">
								{{ tag }}
							</div>
						</div>
						<div class="flex items-center justify-between mb-4">
							<span class="text-2xl font-bold text-primary">{{
								formatPrice(item.price)
							}}</span>
							<div class="text-sm text-base-content/70">
								{{ item.quantity }} available
							</div>
						</div>
						<div class="card-actions justify-end">
							<a
								:href="item.url"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary btn-sm">
								View on Etsy
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- View All Products Button -->
			<div class="text-center mt-12">
				<a
					:href="`https://www.etsy.com/shop/${SHOP_NAME}`"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary btn-lg">
					View All Products on Etsy
				</a>
			</div>
		</div>
	</section>
</template>
