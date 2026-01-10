<script lang="ts">
	import { CheckCircle, Star } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		title: string;
		description: string;
		features: string[];
		isPrimary?: boolean;
	}

	let { icon, title, description, features, isPrimary = false }: Props = $props();
</script>

<div
	class="group relative rounded-xl border border-gray-100 bg-amber-50/50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl {isPrimary
		? 'ring-2 ring-amber-400'
		: ''}"
>
	{#if isPrimary}
		<div
			class="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-md"
		>
			<Star class="h-3 w-3 fill-current" />
			<span>Our Specialty</span>
		</div>
	{/if}
	<div class="mb-4 text-amber-700">
		{@render icon()}
	</div>
	<h3 class="mb-3 text-xl font-bold text-gray-900">{title}</h3>
	<p class="mb-4 text-gray-600">{description}</p>
	<ul class="space-y-2">
		{#each features as feature}
			<li class="flex items-center text-sm text-gray-700">
				<CheckCircle class="mr-2 h-4 w-4 shrink-0 text-amber-600" />
				{feature}
			</li>
		{/each}
	</ul>
</div>
