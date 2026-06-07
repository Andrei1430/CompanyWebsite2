<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { ChevronDown } from 'lucide-svelte';
	import Flag from './Flag.svelte';
	import type { Language } from '$lib/translations';

	interface Props {
		current: Language;
		variant?: 'desktop' | 'mobile';
	}

	let { current, variant = 'desktop' }: Props = $props();

	let open = $state(false);
	let containerEl: HTMLDivElement | undefined = $state();

	const languages: { code: Language; label: string; href: string; aria: string }[] = [
		{ code: 'en', label: 'English', href: `${base}/`, aria: 'Switch to English' },
		{ code: 'nl', label: 'Nederlands', href: `${base}/nl/`, aria: 'Schakel naar Nederlands' },
		{ code: 'fr', label: 'Français', href: `${base}/fr/`, aria: 'Passer au français' }
	];

	const currentLang = $derived(languages.find((l) => l.code === current) ?? languages[0]);

	function handleClickOutside(e: MouseEvent) {
		if (containerEl && !containerEl.contains(e.target as Node)) {
			open = false;
		}
	}

	function handleEscape(e: KeyboardEvent) {
		if (e.key === 'Escape') open = false;
	}

	onMount(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	});
</script>

{#if variant === 'desktop'}
	<div class="relative" bind:this={containerEl}>
		<button
			type="button"
			onclick={() => (open = !open)}
			class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-700"
			aria-haspopup="listbox"
			aria-expanded={open}
			aria-label="Select language"
		>
			<Flag code={currentLang.code} class="h-4 w-6 rounded-sm shadow-sm" />
			<span class="uppercase">{currentLang.code}</span>
			<ChevronDown class="h-4 w-4 transition-transform {open ? 'rotate-180' : ''}" aria-hidden="true" />
		</button>
		{#if open}
			<ul
				class="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
				role="listbox"
				aria-label="Languages"
			>
				{#each languages as lang}
					<li role="presentation">
						<a
							href={lang.href}
							hreflang={lang.code}
							aria-label={lang.aria}
							aria-current={lang.code === current ? 'true' : undefined}
							role="option"
							aria-selected={lang.code === current}
							class="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors {lang.code ===
							current
								? 'bg-amber-50 font-semibold text-amber-700'
								: 'text-gray-700 hover:bg-gray-50 hover:text-amber-700'}"
						>
							<Flag code={lang.code} class="h-4 w-6 rounded-sm shadow-sm" />
							<span>{lang.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{:else}
	<div class="space-y-1" bind:this={containerEl}>
		{#each languages as lang}
			<a
				href={lang.href}
				hreflang={lang.code}
				aria-label={lang.aria}
				aria-current={lang.code === current ? 'true' : undefined}
				class="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition-colors {lang.code ===
				current
					? 'bg-amber-50 font-semibold text-amber-700'
					: 'text-gray-700 hover:bg-gray-50'}"
			>
				<Flag code={lang.code} class="h-4 w-6 rounded-sm shadow-sm" />
				<span>{lang.label}</span>
			</a>
		{/each}
	</div>
{/if}
