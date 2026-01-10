<script lang="ts">
	import { CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-svelte';

	interface Props {
		images: string[];
		title: string;
		description: string;
		results: string[];
	}

	let { images, title, description, results }: Props = $props();

	let currentImageIndex = $state(0);
	let isTransitioning = $state(false);
	let isModalOpen = $state(false);
	let modalImageIndex = $state(0);

	function nextImage(e?: MouseEvent) {
		e?.stopPropagation();
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex + 1) % images.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function prevImage(e?: MouseEvent) {
		e?.stopPropagation();
		if (isTransitioning) return;
		isTransitioning = true;
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function goToImage(index: number, e?: MouseEvent) {
		e?.stopPropagation();
		if (isTransitioning || index === currentImageIndex) return;
		isTransitioning = true;
		currentImageIndex = index;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function openModal() {
		modalImageIndex = currentImageIndex;
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = '';
	}

	function nextModalImage(e?: MouseEvent) {
		e?.stopPropagation();
		modalImageIndex = (modalImageIndex + 1) % images.length;
	}

	function prevModalImage(e?: MouseEvent) {
		e?.stopPropagation();
		modalImageIndex = (modalImageIndex - 1 + images.length) % images.length;
	}

	function goToModalImage(index: number, e?: MouseEvent) {
		e?.stopPropagation();
		modalImageIndex = index;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isModalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') nextModalImage();
		if (e.key === 'ArrowLeft') prevModalImage();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Project Card -->
<button
	type="button"
	onclick={openModal}
	class="group w-full cursor-pointer overflow-hidden rounded-xl bg-white text-left shadow-lg transition-shadow hover:shadow-xl"
>
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

		<!-- Zoom hint overlay -->
		<div
			class="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20"
		>
			<div
				class="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
			>
				<ZoomIn class="h-4 w-4 text-amber-700" />
				<span class="text-sm font-medium text-gray-800">View Photos</span>
			</div>
		</div>

		<!-- Navigation Arrows -->
		{#if images.length > 1}
			<button
				onclick={(e) => prevImage(e)}
				class="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-black/60"
				aria-label="Previous image"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<button
				onclick={(e) => nextImage(e)}
				class="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-black/60"
				aria-label="Next image"
			>
				<ChevronRight class="h-5 w-5" />
			</button>

			<!-- Dot Indicators -->
			<div class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
				{#each images as _, index}
					<button
						onclick={(e) => goToImage(index, e)}
						class="h-2 w-2 rounded-full transition-all duration-300 {index === currentImageIndex
							? 'w-4 bg-white'
							: 'bg-white/50 hover:bg-white/75'}"
						aria-label="Go to image {index + 1}"
					></button>
				{/each}
			</div>

			<!-- Image Counter -->
			<div
				class="absolute top-3 left-3 z-10 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
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
</button>

<!-- Modal Popup -->
{#if isModalOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
		onclick={closeModal}
		role="dialog"
		aria-modal="true"
		aria-label="{title} photo gallery"
	>
		<!-- Close button -->
		<button
			onclick={closeModal}
			class="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
			aria-label="Close gallery"
		>
			<X class="h-6 w-6" />
		</button>

		<!-- Modal content container -->
		<div
			class="flex h-full max-h-[90vh] w-full max-w-6xl flex-col"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Title -->
			<h2 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">{title}</h2>

			<!-- Main image area -->
			<div class="relative flex flex-1 items-center justify-center overflow-hidden">
				{#each images as image, index}
					<img
						src={image}
						alt="{title} - Photo {index + 1}"
						class="max-h-full max-w-full rounded-lg object-contain transition-all duration-300 {index ===
						modalImageIndex
							? 'opacity-100'
							: 'pointer-events-none absolute opacity-0'}"
					/>
				{/each}

				<!-- Navigation Arrows -->
				{#if images.length > 1}
					<button
						onclick={(e) => prevModalImage(e)}
						class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-4 md:p-3"
						aria-label="Previous image"
					>
						<ChevronLeft class="h-6 w-6 md:h-8 md:w-8" />
					</button>
					<button
						onclick={(e) => nextModalImage(e)}
						class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-4 md:p-3"
						aria-label="Next image"
					>
						<ChevronRight class="h-6 w-6 md:h-8 md:w-8" />
					</button>
				{/if}
			</div>

			<!-- Thumbnails -->
			{#if images.length > 1}
				<div class="mt-4 flex justify-center gap-2 overflow-x-auto pb-2">
					{#each images as image, index}
						<button
							onclick={(e) => goToModalImage(index, e)}
							class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 md:h-20 md:w-20 {index ===
							modalImageIndex
								? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-black/90'
								: 'opacity-50 hover:opacity-75'}"
							aria-label="View photo {index + 1}"
						>
							<img
								src={image}
								alt="{title} - Thumbnail {index + 1}"
								class="h-full w-full object-cover"
							/>
						</button>
					{/each}
				</div>
			{/if}

			<!-- Image counter -->
			<div class="mt-2 text-center text-sm text-white/70">
				{modalImageIndex + 1} of {images.length}
			</div>
		</div>
	</div>
{/if}
