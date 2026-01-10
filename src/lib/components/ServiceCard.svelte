<script lang="ts">
	import { CheckCircle } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		title: string;
		description: string;
		features: string[];
	}

	let { icon, title, description, features }: Props = $props();
</script>

<div
	class="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
>
	<div class="mb-4 text-amber-700 transition-transform duration-300 group-hover:scale-110">
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
