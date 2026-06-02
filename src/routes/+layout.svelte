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

	let jsonLd = $derived(
		`<script type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'HomeAndConstructionBusiness',
			'@id': siteUrl + '/#organization',
			name: seo.companyName,
			legalName: seo.companyName,
			alternateName: ['TonyGroupe', 'Tony Groupe', 'TonyGroupe Wood Division'],
			url: siteUrl,
			logo: siteUrl + '/logo.png',
			image: siteUrl + seo.defaultImage,
			description: description,
			telephone: seo.phone,
			email: seo.email,
			foundingDate: '2000',
			numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
			priceRange: '€€',
			currenciesAccepted: 'EUR',
			paymentAccepted: 'Cash, Bank Transfer',
			address: {
				'@type': 'PostalAddress',
				streetAddress: seo.address.street,
				postalCode: seo.address.postalCode,
				addressLocality: seo.address.city,
				addressRegion: 'Brussels-Capital Region',
				addressCountry: seo.address.country
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: 50.8503,
				longitude: 4.3517
			},
			openingHoursSpecification: [
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					opens: '08:00',
					closes: '18:00'
				},
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: 'Saturday',
					opens: '09:00',
					closes: '14:00'
				}
			],
			areaServed: [
				{ '@type': 'Country', name: 'Belgium' },
				{ '@type': 'Country', name: 'Netherlands' },
				{ '@type': 'City', name: 'Brussels' },
				{ '@type': 'City', name: 'Antwerp' },
				{ '@type': 'City', name: 'Ghent' },
				{ '@type': 'City', name: 'Amsterdam' },
				{ '@type': 'City', name: 'Rotterdam' },
				{ '@type': 'City', name: 'The Hague' }
			],
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: isNl ? 'Schrijnwerk Diensten' : 'Joinery Services',
				itemListElement: isNl
					? [
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten ramen op maat' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten deuren op maat' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten kozijnen' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interieur schrijnwerk' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten trappen op maat' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keukenmeubilair' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parketvloeren' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PVC en aluminium ramen' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Woningrenovatie' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermisch isolerend glas' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SKG3 veiligheidsbeslag' } }
						]
					: [
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden windows' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden doors' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wooden window frames' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior joinery' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden staircases' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen furniture' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parquet flooring' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PVC and aluminum windows' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home renovation' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermal insulation glass' } },
							{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SKG3 security hardware' } }
						]
			},
			knowsAbout: isNl
				? [
						'Houten ramen',
						'Houten deuren',
						'Houten kozijnen',
						'Schrijnwerk op maat',
						'Interieur schrijnwerk',
						'Veiligheidsbeslag',
						'SKG3 gecertificeerde scharnieren',
						'Roto voordeurbeslag',
						'Thermisch isolerend glas',
						'HR++ glas',
						'Triple glas',
						'PVC en aluminium schrijnwerk',
						'Woningrenovatie',
						'Houten trappen',
						'Keukenmeubilair',
						'Parketvloeren',
						'Kozijnen vervangen'
					]
				: [
						'Wooden windows',
						'Wooden doors',
						'Wooden window frames',
						'Custom joinery',
						'Interior joinery',
						'Security hardware',
						'SKG3 certified hinges',
						'Roto entry door hardware',
						'Thermal insulation glass',
						'HR++ glass',
						'Triple glazing',
						'PVC and aluminum joinery',
						'Home renovation',
						'Wooden staircases',
						'Kitchen furniture',
						'Parquet flooring',
						'Window replacement'
					],
			sameAs: ['https://www.tonygroupe.be/']
		})}<\/script>`
	);
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

	<!-- Geo targeting -->
	<meta name="geo.region" content="BE-BRU" />
	<meta name="geo.placename" content="Brussels" />

	<!-- LocalBusiness JSON-LD -->
	{@html jsonLd}
</svelte:head>

{@render children()}
