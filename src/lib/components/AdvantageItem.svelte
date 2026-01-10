<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		title: string;
		description: string;
	}

	let { icon, title, description }: Props = $props();
</script>

<div class="flex space-x-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
	<div class="shrink-0">
		<div class="rounded-lg bg-amber-100 p-3 text-amber-700">
			{@render icon()}
		</div>
	</div>
	<div>
		<h3 class="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
		<p class="text-gray-600">{description}</p>
	</div>
</div>
