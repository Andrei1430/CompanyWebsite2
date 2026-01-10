<script lang="ts">
	import { MapPin, CheckCircle } from 'lucide-svelte';

	interface Props {
		image: string;
		title: string;
		location: string;
		description: string;
		results: string[];
		badge: string;
	}

	let { image, title, location, description, results, badge }: Props = $props();
</script>

<div class="group overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
	<div class="relative h-64 overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
		/>
		<div
			class="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-sm font-semibold text-white"
		>
			{badge}
		</div>
	</div>
	<div class="p-6">
		<div class="mb-2 flex items-center text-sm text-gray-500">
			<MapPin class="mr-1 h-4 w-4" />
			{location}
		</div>
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
