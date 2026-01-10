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
	class="group border border-gray-100 bg-white p-8 rounded-xl shadow-lg transition-shadow hover:shadow-xl hover:-translate-y-1 duration-300"
>
	<div class="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
		{@render icon()}
	</div>
	<h3 class="text-xl font-bold text-gray-900 mb-3">{title}</h3>
	<p class="text-gray-600 mb-4">{description}</p>
	<ul class="space-y-2">
		{#each features as feature}
			<li class="flex items-center text-sm text-gray-700">
				<CheckCircle class="w-4 h-4 text-teal-600 mr-2 shrink-0" />
				{feature}
			</li>
		{/each}
	</ul>
</div>
