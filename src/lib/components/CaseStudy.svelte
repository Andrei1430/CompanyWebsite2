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

<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
	<div class="relative overflow-hidden h-64">
		<img
			src={image}
			alt={title}
			class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
		/>
		<div
			class="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
		>
			{badge}
		</div>
	</div>
	<div class="p-6">
		<div class="flex items-center text-sm text-gray-500 mb-2">
			<MapPin class="w-4 h-4 mr-1" />
			{location}
		</div>
		<h3 class="text-xl font-bold text-gray-900 mb-3">{title}</h3>
		<p class="text-gray-600 mb-4">{description}</p>
		<div class="space-y-2">
			{#each results as result}
				<div class="flex items-center text-sm text-gray-700">
					<CheckCircle class="w-4 h-4 text-teal-600 mr-2 shrink-0" />
					{result}
				</div>
			{/each}
		</div>
	</div>
</div>
