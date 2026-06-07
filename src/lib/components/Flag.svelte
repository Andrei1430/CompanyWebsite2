<script lang="ts">
	import type { Language } from '$lib/translations';

	interface Props {
		code: Language;
		class?: string;
	}

	let { code, class: className = '' }: Props = $props();
</script>

{#if code === 'en'}
	<svg viewBox="0 0 60 30" class={className} aria-hidden="true" role="img" focusable="false">
		<clipPath id="flag-en-clip"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
		<clipPath id="flag-en-clip2"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
		<g clip-path="url(#flag-en-clip)">
			<path d="M0,0 v30 h60 v-30 z" fill="#012169" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
			<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#flag-en-clip2)" stroke="#C8102E" stroke-width="4" />
			<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
			<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
		</g>
	</svg>
{:else if code === 'nl'}
	<svg viewBox="0 0 9 6" class={className} aria-hidden="true" role="img" focusable="false">
		<rect width="9" height="2" y="0" fill="#AE1C28" />
		<rect width="9" height="2" y="2" fill="#FFFFFF" />
		<rect width="9" height="2" y="4" fill="#21468B" />
	</svg>
{:else if code === 'fr'}
	<svg viewBox="0 0 3 2" class={className} aria-hidden="true" role="img" focusable="false">
		<rect width="1" height="2" x="0" fill="#002395" />
		<rect width="1" height="2" x="1" fill="#FFFFFF" />
		<rect width="1" height="2" x="2" fill="#ED2939" />
	</svg>
{/if}
