<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { seo } from '$lib/seo';
	import { onMount } from 'svelte';

	let { children } = $props();
	const siteUrl = seo.siteUrl.replace(/\/$/, '');
	const defaultTitle = seo.siteName;
	const defaultDescription = seo.description;
	const defaultDescriptionNl = (seo as any).descriptionNl || seo.description;
	const defaultImage = seo.defaultImage;

	// Client-side: if user's browser language is Dutch, update description meta tags
	onMount(() => {
		if (navigator.language && navigator.language.startsWith('nl')) {
			const desc = defaultDescriptionNl;
			function setMeta(name: string, content: string) {
				let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
				if (!el) {
					el = document.createElement('meta');
					el.setAttribute('name', name);
					document.head.appendChild(el);
				}
				el.setAttribute('content', content);
			}

			setMeta('description', desc);
			setMeta('twitter:description', desc);

			// Open Graph uses property="og:description"
			let og = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
			if (!og) {
				og = document.createElement('meta');
				og.setAttribute('property', 'og:description');
				document.head.appendChild(og);
			}
			og.setAttribute('content', desc);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={siteUrl + '/'} />
	{#each seo.languages as lang}
		<link rel="alternate" href={siteUrl + lang.path} hreflang={lang.code} />
	{/each}
	<link rel="alternate" href={siteUrl + '/'} hreflang="x-default" />

	<!-- Open Graph defaults -->
	<meta property="og:site_name" content={seo.siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={siteUrl + defaultImage} />
	<meta property="og:description" content={defaultDescription} />
	<meta name="description" content={defaultDescription} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={defaultTitle} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta property="og:locale" content="en_US" />

	<!-- LocalBusiness JSON-LD -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'HomeAndConstructionBusiness',
			name: seo.siteName,
			url: siteUrl
		})}
	</script>
</svelte:head>

{@render children()}
