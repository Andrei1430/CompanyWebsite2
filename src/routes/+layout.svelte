<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { seo } from '$lib/seo';
	import { translations } from '$lib/translations';
	import { page } from '$app/state';

	let { children } = $props();
	const siteUrl = seo.siteUrl.replace(/\/$/, '');

	let isNl = $derived(page.url.pathname.startsWith('/nl'));
	let currentPath = $derived(isNl ? '/nl/' : '/');
	let description = $derived(isNl ? seo.descriptionNl : seo.description);
	let ogLocale = $derived(isNl ? 'nl_NL' : 'en_US');
	let t = $derived(isNl ? translations.nl : translations.en);

	let organizationJsonLd = $derived({
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
			{ '@type': 'City', name: 'Liège' },
			{ '@type': 'City', name: 'Amsterdam' },
			{ '@type': 'City', name: 'Rotterdam' },
			{ '@type': 'City', name: 'The Hague' },
			{ '@type': 'City', name: 'Utrecht' },
			{ '@type': 'City', name: 'Eindhoven' }
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: isNl ? 'Schrijnwerk & Renovatie Diensten' : 'Joinery & Renovation Services',
			itemListElement: isNl
				? [
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten kozijnen op maat' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kozijnen vervangen' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten ramen op maat' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten deuren op maat' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interieur schrijnwerk' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houten trappen op maat' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keukenmeubilair op maat' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parket- en houten vloeren' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PVC en aluminium kozijnen' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Volledige woningrenovatie' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HR++ en triple thermisch isolerend glas' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SKG3 gecertificeerd veiligheidsbeslag' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISDE en SVVE subsidie geschikte producten' } }
					]
				: [
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden window frames' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window frame replacement (kozijnen vervangen)' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden windows' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden doors' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior joinery' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom wooden staircases' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom kitchen furniture' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parquet & wood flooring' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PVC and aluminum windows' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full home renovation' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HR++ and triple thermal insulating glass' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SKG3 certified security hardware' } },
						{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISDE and SVVE subsidy eligible products' } }
					]
		},
		knowsAbout: isNl
			? [
					'Houten kozijnen',
					'Kozijnen op maat',
					'Kozijnen vervangen',
					'Houten ramen',
					'Houten deuren',
					'Schrijnwerk op maat',
					'Interieur schrijnwerk',
					'Veiligheidsbeslag',
					'SKG3 gecertificeerde scharnieren',
					'Roto voordeurbeslag',
					'Thermisch isolerend glas',
					'HR++ glas',
					'Triple glas',
					'PVC en aluminium kozijnen',
					'Woningrenovatie',
					'Complete renovatie',
					'Houten trappen op maat',
					'Keukenmeubilair',
					'Parketvloeren',
					'Monumentale kozijnen',
					'Kozijnen restauratie',
					'ISDE subsidie',
					'SVVE subsidie'
				]
			: [
					'Wooden window frames',
					'Custom wooden frames',
					'Window frame replacement',
					'Wooden windows',
					'Wooden doors',
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
					'Full house renovation',
					'Wooden staircases',
					'Kitchen furniture',
					'Parquet flooring',
					'Heritage window restoration',
					'ISDE subsidy',
					'SVVE subsidy'
				],
		sameAs: ['https://www.tonygroupe.be/']
	});

	let faqJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'@id': siteUrl + currentPath + '#faq',
		mainEntity: t.faq.items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	});

	let websiteJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': siteUrl + '/#website',
		url: siteUrl + '/',
		name: seo.siteName,
		inLanguage: isNl ? 'nl-NL' : 'en-US',
		description: description,
		publisher: { '@id': siteUrl + '/#organization' }
	});

	let breadcrumbJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: isNl ? 'Home' : 'Home',
				item: siteUrl + currentPath
			}
		]
	});

	function escapeForScript(value: string): string {
		return value.replace(/</g, '\\u003C');
	}

	let combinedSchemaScript = $derived(
		`<script type="application/ld+json">${escapeForScript(
			JSON.stringify({
				'@context': 'https://schema.org',
				'@graph': [organizationJsonLd, websiteJsonLd, faqJsonLd, breadcrumbJsonLd]
			})
		)}<\/script>`
	);

	let pageTitle = $derived(isNl ? seo.titleNl : seo.titleEn);
	let pageKeywords = $derived(isNl ? seo.keywordsNl : seo.keywordsEn);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={pageKeywords} />
	<meta name="author" content={seo.companyName} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

	<link rel="icon" href={favicon} />
	<link rel="canonical" href={siteUrl + currentPath} />
	<link rel="alternate" href={siteUrl + '/'} hreflang="en" />
	<link rel="alternate" href={siteUrl + '/nl/'} hreflang="nl" />
	<link rel="alternate" href={siteUrl + '/nl/'} hreflang="nl-BE" />
	<link rel="alternate" href={siteUrl + '/nl/'} hreflang="nl-NL" />
	<link rel="alternate" href={siteUrl + '/'} hreflang="en-BE" />
	<link rel="alternate" href={siteUrl + '/'} hreflang="x-default" />

	<!-- Open Graph -->
	<meta property="og:site_name" content={seo.siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={siteUrl + currentPath} />
	<meta property="og:image" content={siteUrl + seo.defaultImage} />
	<meta property="og:image:alt" content={isNl
		? 'Houten kozijnen, ramen en deuren op maat door TonyGroupe S.R.L. in Brussel'
		: 'Custom wooden window frames, windows and doors by TonyGroupe S.R.L. in Brussels'} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="800" />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content={isNl ? 'en_US' : 'nl_NL'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={siteUrl + seo.defaultImage} />
	<meta name="twitter:image:alt" content={isNl
		? 'Houten kozijnen op maat — TonyGroupe Brussel'
		: 'Custom wooden window frames — TonyGroupe Brussels'} />

	<!-- Geo targeting -->
	<meta name="geo.region" content="BE-BRU" />
	<meta name="geo.placename" content="Brussels" />
	<meta name="geo.position" content="50.8503;4.3517" />
	<meta name="ICBM" content="50.8503, 4.3517" />

	<!-- Resource hints -->
	<link rel="preconnect" href="https://images.unsplash.com" />
	<link rel="dns-prefetch" href="https://api.web3forms.com" />

	<!-- Schema.org JSON-LD -->
	{@html combinedSchemaScript}
</svelte:head>

{@render children()}
