<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { seo } from '$lib/seo';
	import { translations, type Language } from '$lib/translations';
	import { services } from '$lib/services';
	import { page } from '$app/state';

	let { children } = $props();
	const siteUrl = seo.siteUrl.replace(/\/$/, '');

	let pathname = $derived(page.url.pathname);
	let language: Language = $derived(
		pathname.startsWith('/nl') ? 'nl' : pathname.startsWith('/fr') ? 'fr' : 'en'
	);

	let isService = $derived(/^\/(nl|fr)?\/?[^/]+\/?$/.test(pathname) && !['/', '/nl/', '/fr/', '/nl', '/fr'].includes(pathname));

	let currentService = $derived.by(() => {
		if (!isService) return null;
		const segments = pathname.split('/').filter(Boolean);
		const slug = segments[segments.length - 1];
		return services.find((s) => s.content[language].slug === slug) ?? null;
	});

	let currentSlug = $derived(currentService?.content[language].slug ?? '');

	let homePathByLang: Record<Language, string> = {
		en: '/',
		nl: '/nl/',
		fr: '/fr/'
	};

	let currentPath = $derived.by(() => {
		if (currentService) {
			const slug = currentService.content[language].slug;
			return language === 'en' ? `/${slug}/` : `/${language}/${slug}/`;
		}
		return homePathByLang[language];
	});

	let alternatePaths = $derived.by(() => {
		if (currentService) {
			return {
				en: `/${currentService.content.en.slug}/`,
				nl: `/nl/${currentService.content.nl.slug}/`,
				fr: `/fr/${currentService.content.fr.slug}/`
			};
		}
		return { en: '/', nl: '/nl/', fr: '/fr/' };
	});

	let description = $derived.by(() => {
		if (currentService) return currentService.content[language].metaDescription;
		if (language === 'nl') return seo.descriptionNl;
		if (language === 'fr') return seo.descriptionFr;
		return seo.description;
	});

	let pageTitle = $derived.by(() => {
		if (currentService) return currentService.content[language].metaTitle;
		if (language === 'nl') return seo.titleNl;
		if (language === 'fr') return seo.titleFr;
		return seo.titleEn;
	});

	let pageKeywords = $derived.by(() => {
		if (currentService) return currentService.content[language].keywords;
		if (language === 'nl') return seo.keywordsNl;
		if (language === 'fr') return seo.keywordsFr;
		return seo.keywordsEn;
	});

	let ogLocale = $derived(
		language === 'nl' ? 'nl_NL' : language === 'fr' ? 'fr_BE' : 'en_US'
	);

	let t = $derived(translations[language]);

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
			{ '@type': 'City', name: 'Namur' },
			{ '@type': 'City', name: 'Charleroi' },
			{ '@type': 'City', name: 'Amsterdam' },
			{ '@type': 'City', name: 'Rotterdam' },
			{ '@type': 'City', name: 'The Hague' },
			{ '@type': 'City', name: 'Utrecht' },
			{ '@type': 'City', name: 'Eindhoven' }
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name:
				language === 'nl'
					? 'Schrijnwerk & Renovatie Diensten'
					: language === 'fr'
						? 'Services de Menuiserie & Rénovation'
						: 'Joinery & Renovation Services',
			itemListElement: services.map((s) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: s.content[language].heading,
					url: language === 'en' ? `${siteUrl}/${s.content.en.slug}/` : `${siteUrl}/${language}/${s.content[language].slug}/`
				}
			}))
		},
		sameAs: ['https://www.tonygroupe.be/']
	});

	let websiteJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': siteUrl + '/#website',
		url: siteUrl + '/',
		name: seo.siteName,
		inLanguage: language === 'nl' ? 'nl-NL' : language === 'fr' ? 'fr-BE' : 'en-US',
		description: description,
		publisher: { '@id': siteUrl + '/#organization' }
	});

	let breadcrumbJsonLd = $derived.by(() => {
		const list: Array<{ '@type': string; position: number; name: string; item: string }> = [
			{ '@type': 'ListItem', position: 1, name: t.nav.home, item: siteUrl + homePathByLang[language] }
		];
		if (currentService) {
			list.push({
				'@type': 'ListItem',
				position: 2,
				name: t.nav.services,
				item: siteUrl + homePathByLang[language] + '#services'
			});
			list.push({
				'@type': 'ListItem',
				position: 3,
				name: currentService.content[language].heading,
				item: siteUrl + currentPath
			});
		}
		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: list
		};
	});

	let homepageFaqJsonLd = $derived(
		!currentService
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					'@id': siteUrl + currentPath + '#faq',
					mainEntity: t.faq.items.map((item) => ({
						'@type': 'Question',
						name: item.question,
						acceptedAnswer: { '@type': 'Answer', text: item.answer }
					}))
				}
			: null
	);

	let serviceJsonLd = $derived(
		currentService
			? {
					'@context': 'https://schema.org',
					'@type': 'Service',
					'@id': siteUrl + currentPath + '#service',
					name: currentService.content[language].heading,
					description: currentService.content[language].metaDescription,
					provider: { '@id': siteUrl + '/#organization' },
					serviceType: currentService.content[language].heading,
					areaServed: [
						{ '@type': 'Country', name: 'Belgium' },
						{ '@type': 'Country', name: 'Netherlands' }
					],
					url: siteUrl + currentPath,
					image: siteUrl + currentService.image
				}
			: null
	);

	let serviceFaqJsonLd = $derived(
		currentService && currentService.content[language].faq.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					'@id': siteUrl + currentPath + '#faq',
					mainEntity: currentService.content[language].faq.map((item) => ({
						'@type': 'Question',
						name: item.question,
						acceptedAnswer: { '@type': 'Answer', text: item.answer }
					}))
				}
			: null
	);

	let howToJsonLd = $derived(
		currentService
			? {
					'@context': 'https://schema.org',
					'@type': 'HowTo',
					'@id': siteUrl + currentPath + '#howto',
					name: currentService.content[language].process.title,
					description: currentService.content[language].metaDescription,
					image: siteUrl + currentService.image,
					step: currentService.content[language].process.steps.map((s, idx) => ({
						'@type': 'HowToStep',
						position: idx + 1,
						name: s.name,
						text: s.text
					}))
				}
			: null
	);

	function escapeForScript(value: string): string {
		return value.replace(/</g, '\\u003C');
	}

	let combinedSchemaScript = $derived(() => {
		const graph: unknown[] = [organizationJsonLd, websiteJsonLd, breadcrumbJsonLd];
		if (homepageFaqJsonLd) graph.push(homepageFaqJsonLd);
		if (serviceJsonLd) graph.push(serviceJsonLd);
		if (serviceFaqJsonLd) graph.push(serviceFaqJsonLd);
		if (howToJsonLd) graph.push(howToJsonLd);
		return `<script type="application/ld+json">${escapeForScript(
			JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
		)}<\/script>`;
	});

	let heroImageForPreload = $derived(currentService ? currentService.image : seo.heroImage);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={pageKeywords} />
	<meta name="author" content={seo.companyName} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

	<link rel="icon" href={favicon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="theme-color" content="#b45309" />
	<meta name="application-name" content={seo.shortName} />
	<meta name="apple-mobile-web-app-title" content={seo.shortName} />

	<link rel="canonical" href={siteUrl + currentPath} />
	<link rel="alternate" href={siteUrl + alternatePaths.en} hreflang="en" />
	<link rel="alternate" href={siteUrl + alternatePaths.nl} hreflang="nl" />
	<link rel="alternate" href={siteUrl + alternatePaths.nl} hreflang="nl-BE" />
	<link rel="alternate" href={siteUrl + alternatePaths.nl} hreflang="nl-NL" />
	<link rel="alternate" href={siteUrl + alternatePaths.fr} hreflang="fr" />
	<link rel="alternate" href={siteUrl + alternatePaths.fr} hreflang="fr-BE" />
	<link rel="alternate" href={siteUrl + alternatePaths.en} hreflang="en-BE" />
	<link rel="alternate" href={siteUrl + alternatePaths.en} hreflang="x-default" />

	<!-- Open Graph -->
	<meta property="og:site_name" content={seo.siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={siteUrl + currentPath} />
	<meta property="og:image" content={siteUrl + seo.defaultImage} />
	<meta property="og:image:alt" content={language === 'nl'
		? 'Houten kozijnen, ramen en deuren op maat door TonyGroupe S.R.L. in Brussel'
		: language === 'fr'
			? 'Châssis bois, fenêtres et portes sur mesure par TonyGroupe S.R.L. à Bruxelles'
			: 'Custom wooden window frames, windows and doors by TonyGroupe S.R.L. in Brussels'} />
	<meta property="og:image:width" content={String(seo.defaultImageWidth)} />
	<meta property="og:image:height" content={String(seo.defaultImageHeight)} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content={ogLocale} />
	{#if language !== 'en'}
		<meta property="og:locale:alternate" content="en_US" />
	{/if}
	{#if language !== 'nl'}
		<meta property="og:locale:alternate" content="nl_NL" />
	{/if}
	{#if language !== 'fr'}
		<meta property="og:locale:alternate" content="fr_BE" />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={siteUrl + seo.defaultImage} />
	<meta name="twitter:image:alt" content={language === 'nl'
		? 'Houten kozijnen op maat — TonyGroupe Brussel'
		: language === 'fr'
			? 'Châssis bois sur mesure — TonyGroupe Bruxelles'
			: 'Custom wooden window frames — TonyGroupe Brussels'} />

	<!-- Geo targeting -->
	<meta name="geo.region" content="BE-BRU" />
	<meta name="geo.placename" content="Brussels" />
	<meta name="geo.position" content="50.8503;4.3517" />
	<meta name="ICBM" content="50.8503, 4.3517" />

	<!-- Resource hints -->
	<link rel="preconnect" href="https://images.unsplash.com" />
	<link rel="dns-prefetch" href="https://api.web3forms.com" />
	<link rel="preload" as="image" href={heroImageForPreload} fetchpriority="high" />

	<!-- Schema.org JSON-LD -->
	{@html combinedSchemaScript()}
</svelte:head>

{@render children()}
