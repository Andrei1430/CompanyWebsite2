<script lang="ts">
	import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		images: string[];
		title: string;
		description: string;
		results: string[];
	}

	let { images, title, description, results }: Props = $props();

	let currentImageIndex = $state(0);
	let isTransitioning = $state(false);

	function nextImage() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex + 1) % images.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function prevImage() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function goToImage(index: number) {
		if (isTransitioning || index === currentImageIndex) return;
		isTransitioning = true;
		currentImageIndex = index;
		setTimeout(() => (isTransitioning = false), 500);
	}
</script>

<div class="group overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
	<div class="relative h-64 overflow-hidden">
		<!-- Image Slideshow -->
		{#each images as image, index}
			<img
				src={image}
				alt="{title} - Photo {index + 1}"
				class="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out {index ===
				currentImageIndex
					? 'scale-100 opacity-100'
					: 'scale-105 opacity-0'}"
			/>
		{/each}

		<!-- Navigation Arrows -->
		{#if images.length > 1}
			<button
				onclick={prevImage}
				class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-black/60"
				aria-label="Previous image"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<button
				onclick={nextImage}
				class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-black/60"
				aria-label="Next image"
			>
				<ChevronRight class="h-5 w-5" />
			</button>

			<!-- Dot Indicators -->
			<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
				{#each images as _, index}
					<button
						onclick={() => goToImage(index)}
						class="h-2 w-2 rounded-full transition-all duration-300 {index === currentImageIndex
							? 'w-4 bg-white'
							: 'bg-white/50 hover:bg-white/75'}"
						aria-label="Go to image {index + 1}"
					></button>
				{/each}
			</div>

			<!-- Image Counter -->
			<div
				class="absolute top-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
			>
				{currentImageIndex + 1} / {images.length}
			</div>
		{/if}
	</div>
	<div class="p-6">
		<h3 class="mb-3 text-xl font-bold text-gray-900">{title}</h3>
		<p class="mb-4 text-gray-600">{description}</p>
		<div class="space-y-2">
			{#each results as result}
				<div class="flex items-center text-sm text-gray-700">
					<CheckCircle class="mr-2 h-4 w-4 shrink-0 text-amber-600" />
					{result}
				</div>
			{/each}
		</div>
	</div>
</div>
