<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { seo } from '$lib/seo';
	import { page } from '$app/state';

	let { children } = $props();
	const siteUrl = seo.siteUrl.replace(/\/$/, '');

	let isNl = $derived(page.url.pathname.startsWith('/nl'));
	let currentPath = $derived(isNl ? '/nl/' : '/');
	let description = $derived(isNl ? seo.descriptionNl : seo.description);
	let ogLocale = $derived(isNl ? 'nl_NL' : 'en_US');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={siteUrl + currentPath} />
	<link rel="alternate" href={siteUrl + '/'} hreflang="en" />
	<link rel="alternate" href={siteUrl + '/nl/'} hreflang="nl" />
	<link rel="alternate" href={siteUrl + '/'} hreflang="x-default" />

	<!-- Open Graph -->
	<meta property="og:site_name" content={seo.siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={seo.siteName} />
	<meta property="og:url" content={siteUrl + currentPath} />
	<meta property="og:image" content={siteUrl + seo.defaultImage} />
	<meta property="og:description" content={description} />
	<meta name="description" content={description} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.siteName} />
	<meta name="twitter:description" content={description} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content={isNl ? 'en_US' : 'nl_NL'} />

	<!-- LocalBusiness JSON-LD -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'HomeAndConstructionBusiness',
			name: seo.siteName,
			legalName: seo.companyName,
			url: siteUrl,
			image: siteUrl + seo.defaultImage,
			description: description,
			address: {
				'@type': 'PostalAddress',
				streetAddress: seo.address.street,
				postalCode: seo.address.postalCode,
				addressLocality: seo.address.city,
				addressCountry: seo.address.country
			},
			areaServed: [
				{ '@type': 'Country', name: 'Belgium' },
				{ '@type': 'Country', name: 'Netherlands' }
			],
			knowsAbout: isNl
				? [
						'Houten ramen',
						'Houten deuren',
						'Interieur schrijnwerk',
						'Veiligheidsbeslag',
						'SKG3 gecertificeerde scharnieren',
						'Roto voordeurbeslag',
						'Thermisch isolerend glas',
						'PVC en aluminium schrijnwerk',
						'Woningrenovatie'
					]
				: [
						'Wooden windows',
						'Wooden doors',
						'Interior joinery',
						'Security hardware',
						'SKG3 certified hinges',
						'Roto entry door hardware',
						'Thermal insulation glass',
						'PVC and aluminum joinery',
						'Home renovation'
					]
		})}
	</script>
</svelte:head>

{@render children()}
