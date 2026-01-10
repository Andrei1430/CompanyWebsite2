<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		title: string;
		description: string;
	}

	let { icon, title, description }: Props = $props();
</script>

<div class="flex space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
	<div class="shrink-0">
		<div class="bg-teal-100 p-3 rounded-lg text-teal-600">
			{@render icon()}
		</div>
	</div>
	<div>
		<h3 class="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
		<p class="text-gray-600">{description}</p>
	</div>
</div>
