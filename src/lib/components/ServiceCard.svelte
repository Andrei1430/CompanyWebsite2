<script lang="ts">
	import { ArrowRight, CheckCircle } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		title: string;
		description: string;
		features: string[];
		isPrimary?: boolean;
		href?: string;
		readMoreLabel?: string;
	}

	let {
		icon,
		title,
		description,
		features,
		isPrimary = false,
		href,
		readMoreLabel
	}: Props = $props();
</script>

<div
	class="group relative flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md {isPrimary
		? 'border-amber-300'
		: ''}"
>
	<div class="mb-4 text-amber-700">
		{@render icon()}
	</div>
	<h3 class="mb-3 text-xl font-bold text-gray-900">{title}</h3>
	<p class="mb-4 text-gray-600">{description}</p>
	<ul class="mb-5 space-y-2">
		{#each features as feature}
			<li class="flex items-center text-sm text-gray-700">
				<CheckCircle class="mr-2 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
				{feature}
			</li>
		{/each}
	</ul>
	{#if href}
		<a
			{href}
			class="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-800"
		>
			{readMoreLabel ?? 'Learn more'}
			<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
		</a>
	{/if}
</div>
