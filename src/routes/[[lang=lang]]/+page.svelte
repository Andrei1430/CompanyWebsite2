<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import {
		Menu,
		X,
		ChevronDown,
		MapPin,
		ArrowRight,
		Shield,
		Thermometer,
		Plus,
		Minus
	} from 'lucide-svelte';
	import { translations, type Language, type Translation } from '$lib/translations';
	import { services } from '$lib/services';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import AdvantageItem from '$lib/components/AdvantageItem.svelte';
	import CaseStudy from '$lib/components/CaseStudy.svelte';
	import LanguageDropdown from '$lib/components/LanguageDropdown.svelte';

	let { data } = $props();

	let isMenuOpen = $state(false);
	let activeSection = $state('home');
	let isScrolled = $state(false);
	let openFaq = $state<number | null>(0);
	let language: Language = $derived(data.language);

	let t: Translation = $derived(translations[language]);

	const navItems = $derived([
		{ id: 'services', label: t.nav.services },
		{ id: 'advantages', label: t.nav.advantages },
		{ id: 'hardware', label: t.nav.hardware },
		{ id: 'cases', label: t.nav.cases },
		{ id: 'faq', label: t.nav.faq },
		{ id: 'contact', label: t.nav.contact }
	]);

	function serviceHref(slug: string): string {
		if (language === 'en') return `${base}/${slug}/`;
		return `${base}/${language}/${slug}/`;
	}

	let readMoreLabel = $derived(
		language === 'nl' ? 'Meer info' : language === 'fr' ? 'En savoir plus' : 'Learn more'
	);

	function slugByLang(key: string): string {
		return services.find((s) => s.key === key)?.content[language].slug ?? '';
	}

	let woodenWindowsSlug = $derived(slugByLang('wooden-windows'));
	let replacementSlug = $derived(slugByLang('window-replacement'));
	let interiorSlug = $derived(slugByLang('wooden-staircase'));
	let renovationSlug = $derived(slugByLang('home-renovation'));
	let doorsSlug = $derived(slugByLang('wooden-doors'));
	let kitchensSlug = $derived(slugByLang('wooden-kitchens'));

	let comparison = $derived.by(() => {
		if (language === 'fr')
			return {
				glassTitle: 'Double vitrage HR++ ou triple vitrage : que choisir ?',
				glassIntro:
					'Le coefficient U (W/m²K) mesure la perte de chaleur — plus c’est bas, mieux c’est. Voici comment choisir.',
				glassRows: [
					{ label: 'Simple vitrage', u: '~ 5,8', verdict: 'À remplacer immédiatement' },
					{ label: 'Double vitrage ancien', u: '~ 2,8', verdict: 'À remplacer si > 20 ans' },
					{ label: 'Double vitrage HR++', u: '≤ 1,2', verdict: 'Bon standard, éligible aux primes' },
					{ label: 'Triple vitrage', u: '≤ 0,7', verdict: 'Maximum, parfait pour maison passive' }
				],
				glassNote:
					'Le triple vitrage est ~15% plus cher que le HR++ mais récupère son surcoût en 6 à 8 ans dans une maison bien isolée. Pour les maisons traditionnelles bruxelloises (sans isolation murale), le HR++ est généralement le meilleur compromis.',
				materialTitle: 'Bois, PVC ou aluminium ?',
				materialIntro:
					'Tous les trois peuvent atteindre les mêmes performances thermiques. Voici comment ils se comparent réellement.',
				materialRows: [
					{
						mat: 'Bois',
						bestFor: 'Maisons de caractère et bâtiments classés',
						lifespan: '50+ ans',
						maintenance: 'Lasure tous les 8–10 ans'
					},
					{
						mat: 'PVC',
						bestFor: 'Budget serré et zéro entretien',
						lifespan: '25–35 ans',
						maintenance: 'Aucun entretien'
					},
					{
						mat: 'Aluminium',
						bestFor: 'Grandes baies modernes',
						lifespan: '40+ ans',
						maintenance: 'Quasi nul'
					}
				],
				priceTitle: 'Transparence sur les prix',
				priceIntro:
					'Voici nos fourchettes habituelles pour un châssis bois sur mesure de 1,2 × 1,5 m, posé et finition incluse :',
				priceRows: [
					{ scope: 'Double vitrage HR++', range: '€ 1 400 – 2 200' },
					{ scope: 'Triple vitrage', range: '€ 1 700 – 2 600' },
					{ scope: 'Profilé monumental sur mesure', range: '€ 2 300 – 3 500' }
				],
				priceNote:
					'Le prix exact dépend du bois choisi, de la quincaillerie, de la finition et de l’accessibilité du chantier. Devis fixe par ouverture, sans surprise.'
			};
		if (language === 'nl')
			return {
				glassTitle: 'HR++ glas of triple glas: wat moet u kiezen?',
				glassIntro: 'De U-waarde (W/m²K) meet warmteverlies — hoe lager, hoe beter. Zo kiest u.',
				glassRows: [
					{ label: 'Enkelglas', u: '~ 5,8', verdict: 'Direct vervangen' },
					{ label: 'Oud dubbelglas', u: '~ 2,8', verdict: 'Vervangen indien > 20 jaar' },
					{ label: 'HR++ glas', u: '≤ 1,2', verdict: 'Goede standaard, ISDE/SVVE subsidie' },
					{ label: 'Triple glas', u: '≤ 0,7', verdict: 'Maximum, perfect voor passiefhuis' }
				],
				glassNote:
					'Triple glas is ~15% duurder dan HR++ maar verdient die meerkost terug in 6 à 8 jaar bij een goed geïsoleerde woning. Voor traditionele Belgische rij- en hoekwoningen (zonder gevelisolatie) is HR++ doorgaans de beste prijs/kwaliteit verhouding.',
				materialTitle: 'Hout, PVC of aluminium?',
				materialIntro:
					'Alle drie kunnen dezelfde thermische prestaties leveren. Zo verschillen ze écht.',
				materialRows: [
					{
						mat: 'Hout',
						bestFor: 'Karakteristieke en monumentale woningen',
						lifespan: '50+ jaar',
						maintenance: 'Beits/verf elke 8–10 jaar'
					},
					{
						mat: 'PVC',
						bestFor: 'Strak budget en nul onderhoud',
						lifespan: '25–35 jaar',
						maintenance: 'Geen onderhoud nodig'
					},
					{
						mat: 'Aluminium',
						bestFor: 'Grote moderne raampartijen',
						lifespan: '40+ jaar',
						maintenance: 'Bijna geen'
					}
				],
				priceTitle: 'Prijstransparantie',
				priceIntro:
					'Onze gebruikelijke ranges voor een houten kozijn op maat van 1,2 × 1,5 m, inclusief plaatsing en afwerking:',
				priceRows: [
					{ scope: 'HR++ dubbelglas', range: '€ 1.400 – 2.200' },
					{ scope: 'Triple glas', range: '€ 1.700 – 2.600' },
					{ scope: 'Monumentaal profiel op maat', range: '€ 2.300 – 3.500' }
				],
				priceNote:
					'De exacte prijs hangt af van houtsoort, beslag, afwerking en bereikbaarheid van de werf. Vaste prijs per opening, geen verrassingen.'
			};
		return {
			glassTitle: 'HR++ glass vs triple glass: which should you choose?',
			glassIntro:
				'The U-value (W/m²K) measures heat loss — lower is better. Here is how to choose.',
			glassRows: [
				{ label: 'Single glazing', u: '~ 5.8', verdict: 'Replace immediately' },
				{ label: 'Old double glazing', u: '~ 2.8', verdict: 'Replace if > 20 years old' },
				{ label: 'HR++ glass', u: '≤ 1.2', verdict: 'Good standard, subsidy-eligible' },
				{ label: 'Triple glass', u: '≤ 0.7', verdict: 'Best, ideal for passive houses' }
			],
			glassNote:
				'Triple glazing is ~15% more expensive than HR++ but pays back the difference in 6–8 years in a well-insulated home. For traditional Brussels townhouses without wall insulation, HR++ usually wins on price/performance.',
			materialTitle: 'Wood, PVC or aluminum?',
			materialIntro:
				'All three can deliver the same thermal performance. Here is what really differs.',
			materialRows: [
				{
					mat: 'Wood',
					bestFor: 'Heritage and characterful homes',
					lifespan: '50+ years',
					maintenance: 'Stain/paint every 8–10 years'
				},
				{
					mat: 'PVC',
					bestFor: 'Tight budget, zero maintenance',
					lifespan: '25–35 years',
					maintenance: 'No maintenance needed'
				},
				{
					mat: 'Aluminum',
					bestFor: 'Large modern glazing',
					lifespan: '40+ years',
					maintenance: 'Almost none'
				}
			],
			priceTitle: 'Price transparency',
			priceIntro:
				'Our usual ranges for a custom 1.2 × 1.5 m wooden window frame, installed and finished:',
			priceRows: [
				{ scope: 'HR++ double glazing', range: '€ 1,400 – 2,200' },
				{ scope: 'Triple glazing', range: '€ 1,700 – 2,600' },
				{ scope: 'Heritage profile (custom)', range: '€ 2,300 – 3,500' }
			],
			priceNote:
				'Exact price depends on timber choice, hardware, finish and site access. Fixed quote per opening, no surprises.'
		};
	});

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;

			const sections = [
				'home',
				'services',
				'advantages',
				'hardware',
				'cases',
				'compare',
				'faq',
				'contact'
			];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				activeSection = currentSection;
			}
		};

		window.addEventListener('scroll', handleScroll);

		const handlePageShow = () => {
			if (sessionStorage.getItem('web3forms_submitted') === '1') {
				sessionStorage.removeItem('web3forms_submitted');
				location.reload();
			}
		};

		window.addEventListener('pageshow', handlePageShow);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('pageshow', handlePageShow);
		};
	});

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
		isMenuOpen = false;
	}

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	let heroAlt = $derived(
		language === 'nl'
			? 'Houten kozijnen, ramen en deuren op maat door TonyGroupe S.R.L. — directe fabrikant in Brussel, actief in heel België en Nederland'
			: language === 'fr'
				? 'Châssis bois, fenêtres et portes sur mesure par TonyGroupe S.R.L. — fabricant direct à Bruxelles, actif partout en Belgique et aux Pays-Bas'
				: 'Custom wooden window frames, windows and doors by TonyGroupe S.R.L. — direct manufacturer in Brussels, serving Belgium and the Netherlands'
	);

	let advantageImgAlt = $derived(
		language === 'nl'
			? 'Belgische woning met houten kozijnen, ramen en voordeur op maat — voorbeeld van TonyGroupe vakmanschap'
			: language === 'fr'
				? 'Maison belge avec châssis bois, fenêtres et porte d’entrée sur mesure — exemple du savoir-faire TonyGroupe'
				: 'Belgian home with custom wooden window frames, windows and front door — example of TonyGroupe craftsmanship'
	);

	let heatLossLabel = $derived(
		language === 'nl'
			? 'Tot 40% minder warmteverlies'
			: language === 'fr'
				? 'Jusqu’à 40% de pertes de chaleur en moins'
				: 'Up to 40% heat loss reduction'
	);

	let mainNavLabel = $derived(
		language === 'nl' ? 'Hoofdnavigatie' : language === 'fr' ? 'Navigation principale' : 'Main navigation'
	);

	let openMenuLabel = $derived(
		language === 'nl' ? 'Menu openen' : language === 'fr' ? 'Ouvrir le menu' : 'Open menu'
	);

	let promoAria = $derived(
		language === 'nl'
			? 'Bekijk huidige aanbieding — scroll naar contactformulier'
			: language === 'fr'
				? 'Voir l’offre actuelle — descendre au formulaire de contact'
				: 'View current offer — scroll to contact form'
	);

	let scrollToServicesAria = $derived(
		language === 'nl' ? 'Scroll naar onze diensten' : language === 'fr' ? 'Faire défiler vers nos services' : 'Scroll to our services'
	);

	let quickLinksLabel = $derived(
		language === 'nl' ? 'Snelle links' : language === 'fr' ? 'Liens rapides' : 'Quick links'
	);

	let compareLabels = $derived({
		section: language === 'nl' ? 'Vergelijking' : language === 'fr' ? 'Comparatif' : 'Comparison',
		glazingType: language === 'nl' ? 'Glassoort' : language === 'fr' ? 'Type de vitrage' : 'Glazing type',
		uHeader: language === 'nl' ? 'U-waarde (W/m²K)' : language === 'fr' ? 'Coefficient U (W/m²K)' : 'U-value (W/m²K)',
		verdict: language === 'nl' ? 'Advies' : language === 'fr' ? 'Recommandation' : 'Verdict',
		bestFor: language === 'nl' ? 'Ideaal voor' : language === 'fr' ? 'Idéal pour' : 'Best for',
		lifespan: language === 'nl' ? 'Levensduur' : language === 'fr' ? 'Durée de vie' : 'Lifespan',
		maintenance: language === 'nl' ? 'Onderhoud' : language === 'fr' ? 'Entretien' : 'Maintenance',
		configuration: language === 'nl' ? 'Configuratie' : language === 'fr' ? 'Configuration' : 'Configuration',
		price: language === 'nl' ? 'Indicatieve prijs' : language === 'fr' ? 'Prix indicatif' : 'Indicative price'
	});
</script>

<div class="min-h-screen bg-white">
	<!-- Navigation -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
			? 'bg-white shadow-lg'
			: 'bg-white/95 backdrop-blur-sm'}"
		aria-label={mainNavLabel}
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-20 items-center justify-between">
				<button onclick={() => scrollToSection('home')} class="flex cursor-pointer items-center space-x-2">
					<img src="{base}/logo.png" alt="TonyGroupe S.R.L. — Wood Division logo" class="h-8 w-8" width="32" height="32" />
					<div class="flex flex-col items-start leading-tight">
						<span class="text-lg font-bold tracking-wide text-gray-800">TONYGROUPE <span class="text-amber-600">S.R.L.</span></span>
						<span class="text-xs font-medium tracking-wider text-gray-500">WOOD DIVISION</span>
					</div>
				</button>

				<div class="hidden items-center space-x-6 md:flex">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							class="text-sm font-medium transition-colors {activeSection === item.id
								? 'text-amber-700'
								: 'text-gray-700 hover:text-amber-700'}"
						>
							{item.label}
						</button>
					{/each}
					<LanguageDropdown current={language} />
				</div>

				<button
					onclick={() => scrollToSection('contact')}
					class="hidden rounded-lg bg-amber-700 px-6 py-2.5 font-medium text-white transition-colors hover:bg-amber-800 md:block"
				>
					{t.nav.getQuote}
				</button>

				<button onclick={() => (isMenuOpen = !isMenuOpen)} class="p-2 text-gray-700 md:hidden" aria-label={openMenuLabel}>
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>

		{#if isMenuOpen}
			<div class="border-t border-gray-200 bg-white md:hidden">
				<div class="space-y-3 px-4 py-4">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							class="block w-full rounded-lg px-4 py-2 text-left transition-colors {activeSection ===
							item.id
								? 'bg-amber-50 text-amber-700'
								: 'text-gray-700 hover:bg-gray-50'}"
						>
							{item.label}
						</button>
					{/each}
					<div class="border-t border-gray-200 pt-3">
						<LanguageDropdown current={language} variant="mobile" />
					</div>
					<button
						onclick={() => scrollToSection('contact')}
						class="w-full rounded-lg bg-amber-700 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-800"
					>
						{t.nav.getQuote}
					</button>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Hero Section -->
	<section
		id="home"
		class="relative flex min-h-screen items-center overflow-hidden bg-white pt-20"
	>
		<button
			type="button"
			class="absolute top-20 right-0 left-0 z-20 cursor-pointer bg-amber-700 px-4 py-3 text-center text-white focus:outline-none"
			aria-label={promoAria}
			onclick={() => scrollToSection('contact')}
		>
			<div class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
				<span class="text-lg font-bold">{t.promo.badge}</span>
				<span class="hidden sm:inline">|</span>
				<span>{t.promo.mainDiscount}</span>
				<span class="hidden md:inline">•</span>
				<span class="hidden md:inline">{t.promo.referralDiscount}</span>
			</div>
		</button>
		<div class="relative z-10 mx-auto max-w-7xl px-4 py-20 pt-32 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="animate-fade-in space-y-6">
					<p class="text-sm font-medium tracking-wide text-amber-700 uppercase">
						{t.hero.badge} · {t.hero.manufacturerBadge}
					</p>
					<h1 class="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
						{t.hero.title}
						<span class="text-amber-700"> {t.hero.titleHighlight}</span>
					</h1>
					<p class="text-base font-medium text-gray-700 italic">
						{t.hero.tagline}
					</p>
					<p class="text-lg leading-relaxed text-gray-600">
						{t.hero.description}
					</p>
					<div class="border-l-2 border-green-600 bg-gray-50 p-4">
						<div class="flex items-start gap-3">
							<svg
								class="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
								<path d="M7 12.5l3 3 7-7" />
							</svg>
							<div>
								<p class="text-sm leading-relaxed text-gray-700">
									{t.hero.subsidyText}
								</p>
								<div class="mt-2 flex flex-wrap gap-3">
									<a
										href="https://www.rvo.nl/subsidies-financiering/isde"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-sm font-medium text-green-700 underline hover:text-green-800"
									>
										{t.hero.subsidyLinkISDE}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
											<polyline points="15 3 21 3 21 9" />
											<line x1="10" y1="14" x2="21" y2="3" />
										</svg>
									</a>
									<a
										href="https://www.rvo.nl/subsidies-financiering/svve"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-sm font-medium text-green-700 underline hover:text-green-800"
									>
										{t.hero.subsidyLinkSVVE}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
											<polyline points="15 3 21 3 21 9" />
											<line x1="10" y1="14" x2="21" y2="3" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-4 sm:flex-row">
						<button
							onclick={() => scrollToSection('contact')}
							class="group flex items-center justify-center rounded-lg bg-amber-700 px-8 py-4 font-semibold text-white transition-all hover:bg-amber-800"
						>
							{t.hero.ctaPrimary}
							<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
						</button>
						<button
							onclick={() => scrollToSection('services')}
							class="rounded-lg border-2 border-amber-700 px-8 py-4 font-semibold text-amber-700 transition-all hover:bg-amber-50"
						>
							{t.hero.ctaSecondary}
						</button>
					</div>
				</div>
				<div class="relative w-full max-w-[500px] lg:max-w-[600px]">
					<div class="relative aspect-[4/3] w-full lg:aspect-[16/10]">
						<img
							src="{base}/Cover.jfif"
							alt={heroAlt}
							class="absolute inset-0 h-full w-full rounded-lg object-cover object-center shadow-lg"
							width="600"
							height="400"
							fetchpriority="high"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</div>
		<button
			onclick={() => scrollToSection('services')}
			class="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
			aria-label={scrollToServicesAria}
		>
			<ChevronDown class="h-7 w-7 text-gray-400" />
		</button>
	</section>

	<!-- Services -->
	<section id="services" class="bg-white py-20" aria-labelledby="services-heading">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 id="services-heading" class="mb-4 text-4xl font-bold text-gray-900">
					{t.services.title}
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{t.services.subtitle}
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
				<ServiceCard
					title={t.services.subsidyEligible.title}
					description={t.services.subsidyEligible.description}
					features={t.services.subsidyEligible.features}
					isPrimary={true}
					href={serviceHref(replacementSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
							<path d="M8 12l2 2 4-4" />
							<path d="M12 6v2" />
							<path d="M12 16v2" />
						</svg>
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.woodenJoinery.title}
					description={t.services.woodenJoinery.description}
					features={t.services.woodenJoinery.features}
					isPrimary={true}
					href={serviceHref(woodenWindowsSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="3" y="3" width="18" height="18" rx="2" />
							<line x1="3" y1="9" x2="21" y2="9" />
							<line x1="9" y1="21" x2="9" y2="9" />
						</svg>
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.interiorJoinery.title}
					description={t.services.interiorJoinery.description}
					features={t.services.interiorJoinery.features}
					isPrimary={true}
					href={serviceHref(interiorSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M22 12 L18 22 L6 22 L2 12" />
							<path d="M12 2 L12 12" />
							<path d="M4.5 7 L12 12 L19.5 7" />
							<path d="M4.5 7 L12 2 L19.5 7" />
						</svg>
					{/snippet}
				</ServiceCard>

				<ServiceCard
					title={t.services.fullRenovation.title}
					description={t.services.fullRenovation.description}
					features={t.services.fullRenovation.features}
					href={serviceHref(renovationSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							<polyline points="9 22 9 12 15 12 15 22" />
						</svg>
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.pvcAluminum.title}
					description={t.services.pvcAluminum.description}
					features={t.services.pvcAluminum.features}
					href={serviceHref(doorsSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<Shield class="h-12 w-12" />
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.flooring.title}
					description={t.services.flooring.description}
					features={t.services.flooring.features}
					href={serviceHref(kitchensSlug)}
					{readMoreLabel}
				>
					{#snippet icon()}
						<svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="6" width="20" height="12" rx="1" />
							<line x1="2" y1="10" x2="22" y2="10" />
							<line x1="2" y1="14" x2="22" y2="14" />
							<line x1="6" y1="6" x2="6" y2="10" />
							<line x1="12" y1="10" x2="12" y2="14" />
							<line x1="18" y1="6" x2="18" y2="10" />
							<line x1="6" y1="14" x2="6" y2="18" />
							<line x1="18" y1="14" x2="18" y2="18" />
						</svg>
					{/snippet}
				</ServiceCard>
			</div>
		</div>
	</section>

	<!-- Advantages -->
	<section id="advantages" class="bg-gray-50 py-20" aria-labelledby="advantages-heading">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 id="advantages-heading" class="mb-4 text-4xl font-bold text-gray-900">
					{t.advantages.title}
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{t.advantages.subtitle}
				</p>
			</div>

			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="space-y-6">
					<AdvantageItem title={t.advantages.manufacturer.title} description={t.advantages.manufacturer.description}>
						{#snippet icon()}
							<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
								<path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
							</svg>
						{/snippet}
					</AdvantageItem>
					<AdvantageItem title={t.advantages.thermal.title} description={t.advantages.thermal.description}>
						{#snippet icon()}
							<Thermometer class="h-6 w-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem title={t.advantages.quality.title} description={t.advantages.quality.description}>
						{#snippet icon()}
							<Shield class="h-6 w-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem title={t.advantages.custom.title} description={t.advantages.custom.description}>
						{#snippet icon()}
							<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
								<path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
							</svg>
						{/snippet}
					</AdvantageItem>
				</div>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
						alt={advantageImgAlt}
						class="rounded-lg shadow-lg"
						width="800"
						height="600"
						loading="lazy"
						decoding="async"
					/>
					<div class="absolute -bottom-6 -left-6 rounded-lg bg-white p-5 shadow-md">
						<div class="flex items-center space-x-4">
							<div class="rounded-lg bg-amber-100 p-3">
								<Thermometer class="h-8 w-8 text-amber-700" />
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">
									{t.advantages.uValue}
								</div>
								<div class="text-sm text-gray-600">{heatLossLabel}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Hardware -->
	<section id="hardware" class="bg-white py-20" aria-labelledby="hardware-heading">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 id="hardware-heading" class="mb-4 text-4xl font-bold text-gray-900">
					{t.hardware.title}
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{t.hardware.subtitle}
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div class="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-6 flex items-center gap-4">
						<div class="rounded-xl bg-amber-100 p-3">
							<svg class="h-8 w-8 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<circle cx="12" cy="12" r="3" />
								<path d="M12 1v4" /><path d="M12 19v4" />
								<path d="M4.22 4.22l2.83 2.83" /><path d="M16.95 16.95l2.83 2.83" />
								<path d="M1 12h4" /><path d="M19 12h4" />
								<path d="M4.22 19.78l2.83-2.83" /><path d="M16.95 7.05l2.83-2.83" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900">{t.hardware.hinges.title}</h3>
							<div class="mt-1 flex flex-wrap gap-1.5">
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">SKG3</span>
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">Police Safe Living</span>
							</div>
						</div>
					</div>
					<p class="mb-6 text-sm leading-relaxed text-gray-600">{t.hardware.hinges.description}</p>
					<ul class="space-y-2">
						{#each t.hardware.hinges.features as feature}
							<li class="flex items-start gap-2 text-sm text-gray-700">
								<svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-6 flex items-center gap-4">
						<div class="rounded-xl bg-amber-100 p-3">
							<svg class="h-8 w-8 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
								<path d="M7 11V7a5 5 0 0 1 10 0v4" />
								<circle cx="12" cy="16" r="1" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900">{t.hardware.rotoHardware.title}</h3>
							<div class="mt-1 flex flex-wrap gap-1.5">
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">RC 2 / RC 3</span>
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">VdS</span>
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">10 yr warranty</span>
							</div>
						</div>
					</div>
					<p class="mb-6 text-sm leading-relaxed text-gray-600">{t.hardware.rotoHardware.description}</p>
					<ul class="space-y-2">
						{#each t.hardware.rotoHardware.features as feature}
							<li class="flex items-start gap-2 text-sm text-gray-700">
								<svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-6 flex items-center gap-4">
						<div class="rounded-xl bg-amber-100 p-3">
							<Shield class="h-8 w-8 text-amber-700" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900">{t.hardware.doorStrip.title}</h3>
							<div class="mt-1 flex flex-wrap gap-1.5">
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">SKG</span>
								<span class="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">5 yr warranty</span>
							</div>
						</div>
					</div>
					<p class="mb-6 text-sm leading-relaxed text-gray-600">{t.hardware.doorStrip.description}</p>
					<ul class="space-y-2">
						{#each t.hardware.doorStrip.features as feature}
							<li class="flex items-start gap-2 text-sm text-gray-700">
								<svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Cases -->
	<section id="cases" class="bg-gray-50 py-20" aria-labelledby="cases-heading">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 id="cases-heading" class="mb-4 text-4xl font-bold text-gray-900">
					{t.cases.title}
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{t.cases.subtitle}
				</p>
			</div>

			<div class="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
				<CaseStudy
					images={[
						`${base}/projects/front-door-and-windows/Photo1.jpeg`,
						`${base}/projects/front-door-and-windows/Photo2.jpeg`,
						`${base}/projects/front-door-and-windows/Photo3.jpeg`,
						`${base}/projects/front-door-and-windows/Photo4.jpeg`,
						`${base}/projects/front-door-and-windows/Photo5.jpeg`,
						`${base}/projects/front-door-and-windows/Photo6.jpeg`
					]}
					title={t.cases.project3.title}
					description={t.cases.project3.description}
					results={t.cases.project3.results}
				/>
				<CaseStudy
					images={[
						`${base}/projects/balcony-window-and-door/Photo1.jpeg`,
						`${base}/projects/balcony-window-and-door/Photo2.jpeg`,
						`${base}/projects/balcony-window-and-door/Photo3.jpeg`,
						`${base}/projects/balcony-window-and-door/Photo4.jpeg`,
						`${base}/projects/balcony-window-and-door/Photo5.jpeg`
					]}
					title={t.cases.project2.title}
					description={t.cases.project2.description}
					results={t.cases.project2.results}
				/>
				<CaseStudy
					images={[
						`${base}/projects/staircase/Photo1.jpeg`,
						`${base}/projects/staircase/Photo2.jpeg`,
						`${base}/projects/staircase/Photo3.jpeg`,
						`${base}/projects/staircase/Photo4.jpeg`,
						`${base}/projects/staircase/Photo5.jpeg`,
						`${base}/projects/staircase/Photo6.jpeg`,
						`${base}/projects/staircase/Photo7.jpeg`
					]}
					title={t.cases.project1.title}
					description={t.cases.project1.description}
					results={t.cases.project1.results}
				/>
			</div>
		</div>
	</section>

	<!-- Comparison -->
	<section id="compare" class="bg-white py-20" aria-labelledby="compare-heading">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 id="compare-heading" class="sr-only">{compareLabels.section}</h2>

			<div class="mb-16">
				<h3 class="mb-3 text-3xl font-bold text-gray-900">{comparison.glassTitle}</h3>
				<p class="mb-6 text-gray-600">{comparison.glassIntro}</p>
				<div class="overflow-x-auto rounded-lg border border-gray-200">
					<table class="w-full text-left text-sm">
						<thead class="bg-gray-100 text-gray-700">
							<tr>
								<th class="px-4 py-3">{compareLabels.glazingType}</th>
								<th class="px-4 py-3">{compareLabels.uHeader}</th>
								<th class="px-4 py-3">{compareLabels.verdict}</th>
							</tr>
						</thead>
						<tbody>
							{#each comparison.glassRows as row}
								<tr class="border-t border-gray-200 odd:bg-white even:bg-gray-50">
									<td class="px-4 py-3 font-medium text-gray-900">{row.label}</td>
									<td class="px-4 py-3 text-gray-700">{row.u}</td>
									<td class="px-4 py-3 text-gray-700">{row.verdict}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="mt-4 text-sm text-gray-600">{comparison.glassNote}</p>
			</div>

			<div class="mb-16">
				<h3 class="mb-3 text-3xl font-bold text-gray-900">{comparison.materialTitle}</h3>
				<p class="mb-6 text-gray-600">{comparison.materialIntro}</p>
				<div class="grid gap-4 md:grid-cols-3">
					{#each comparison.materialRows as row}
						<div class="rounded-lg border border-gray-200 bg-white p-6">
							<h4 class="mb-3 text-xl font-bold text-amber-700">{row.mat}</h4>
							<dl class="space-y-2 text-sm">
								<div>
									<dt class="font-semibold text-gray-700">{compareLabels.bestFor}</dt>
									<dd class="text-gray-600">{row.bestFor}</dd>
								</div>
								<div>
									<dt class="font-semibold text-gray-700">{compareLabels.lifespan}</dt>
									<dd class="text-gray-600">{row.lifespan}</dd>
								</div>
								<div>
									<dt class="font-semibold text-gray-700">{compareLabels.maintenance}</dt>
									<dd class="text-gray-600">{row.maintenance}</dd>
								</div>
							</dl>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-3xl font-bold text-gray-900">{comparison.priceTitle}</h3>
				<p class="mb-6 text-gray-600">{comparison.priceIntro}</p>
				<div class="overflow-x-auto rounded-lg border border-amber-200 bg-amber-50">
					<table class="w-full text-left text-sm">
						<thead class="bg-amber-100 text-gray-800">
							<tr>
								<th class="px-4 py-3">{compareLabels.configuration}</th>
								<th class="px-4 py-3">{compareLabels.price}</th>
							</tr>
						</thead>
						<tbody>
							{#each comparison.priceRows as row}
								<tr class="border-t border-amber-200">
									<td class="px-4 py-3 font-medium text-gray-900">{row.scope}</td>
									<td class="px-4 py-3 font-semibold text-amber-800">{row.range}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="mt-4 text-sm text-gray-700">{comparison.priceNote}</p>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="bg-gray-50 py-20" aria-labelledby="faq-heading">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 id="faq-heading" class="mb-4 text-4xl font-bold text-gray-900">{t.faq.title}</h2>
				<p class="mx-auto max-w-3xl text-lg text-gray-600">{t.faq.subtitle}</p>
			</div>

			<div class="space-y-4">
				{#each t.faq.items as item, index}
					<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
						<h3>
							<button
								type="button"
								onclick={() => toggleFaq(index)}
								class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-amber-50"
								aria-expanded={openFaq === index}
								aria-controls="faq-answer-{index}"
							>
								<span class="text-base font-semibold text-gray-900 sm:text-lg">{item.question}</span>
								<span class="flex-shrink-0 rounded-full bg-amber-100 p-2 text-amber-700">
									{#if openFaq === index}
										<Minus class="h-4 w-4" aria-hidden="true" />
									{:else}
										<Plus class="h-4 w-4" aria-hidden="true" />
									{/if}
								</span>
							</button>
						</h3>
						<div
							id="faq-answer-{index}"
							class="px-6 transition-all duration-300 {openFaq === index
								? 'max-h-96 pb-5 opacity-100'
								: 'max-h-0 overflow-hidden opacity-0'}"
						>
							<p class="leading-relaxed text-gray-600">{item.answer}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="bg-white py-20" aria-labelledby="contact-heading">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 id="contact-heading" class="mb-4 text-4xl font-bold text-gray-900">{t.contact.title}</h2>
				<p class="text-xl text-gray-600">{t.contact.subtitle}</p>
				<p class="mt-2 font-semibold text-amber-700">{t.contact.manufacturerNote}</p>
			</div>

			<div class="mb-8 rounded-lg bg-amber-700 p-6 text-center text-white">
				<p class="mb-2 text-xl font-bold">{t.promo.mainDiscount}</p>
				<p class="text-sm opacity-90">{t.promo.totalSavings}</p>
			</div>

			<div class="rounded-2xl bg-gray-50 p-8 shadow-xl lg:p-12">
				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					class="space-y-6"
					onsubmit={() => sessionStorage.setItem('web3forms_submitted', '1')}
				>
					<input type="hidden" name="access_key" value="321a5c5d-60f4-474d-8566-2a55ff1c1233" />
					<input type="hidden" name="subject" value="New Joinery Inquiry - TonyGroupe S.R.L." />
					<input type="hidden" name="from_name" value="TonyGroupe S.R.L. Website" />
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.name} *</label>
							<input type="text" id="name" name="name" required class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500" placeholder={t.contact.form.namePlaceholder} />
						</div>
						<div>
							<label for="email" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.email} *</label>
							<input type="email" id="email" name="email" required class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500" placeholder={t.contact.form.emailPlaceholder} />
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="phone" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.phone}</label>
							<input type="tel" id="phone" name="phone" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500" placeholder={t.contact.form.phonePlaceholder} />
						</div>
						<div>
							<label for="property" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.propertyType}</label>
							<select id="property" name="property_type" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500">
								<option value="">{t.contact.form.propertyOptions.select}</option>
								<option value="house">{t.contact.form.propertyOptions.house}</option>
								<option value="apartment">{t.contact.form.propertyOptions.apartment}</option>
								<option value="commercial">{t.contact.form.propertyOptions.commercial}</option>
								<option value="other">{t.contact.form.propertyOptions.other}</option>
							</select>
						</div>
					</div>

					<div>
						<label for="service" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.serviceInterest}</label>
						<select id="service" name="service_interest" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500">
							<option value="">{t.contact.form.serviceOptions.select}</option>
							<option value="wooden-windows">{t.contact.form.serviceOptions.woodenWindows}</option>
							<option value="wooden-doors">{t.contact.form.serviceOptions.woodenDoors}</option>
							<option value="interior-joinery">{t.contact.form.serviceOptions.interiorJoinery}</option>
							<option value="staircase">{t.contact.form.serviceOptions.staircase}</option>
							<option value="kitchen">{t.contact.form.serviceOptions.kitchen}</option>
							<option value="full-renovation">{t.contact.form.serviceOptions.fullRenovation}</option>
							<option value="pvc-aluminum">{t.contact.form.serviceOptions.pvcAluminum}</option>
							<option value="assessment">{t.contact.form.serviceOptions.assessment}</option>
							<option value="other">{t.contact.form.propertyOptions.other}</option>
						</select>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-gray-700">{t.contact.form.message} *</label>
						<textarea id="message" name="message" required rows="5" class="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500" placeholder={t.contact.form.messagePlaceholder}></textarea>
					</div>

					<button type="submit" class="group flex w-full items-center justify-center rounded-lg bg-amber-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-amber-800">
						{t.contact.form.submit}
						<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 py-16 text-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-3 md:items-start md:gap-12">
				<div>
					<h2 class="mb-4 text-lg font-semibold">{t.footer.quickLinks}</h2>
					<nav class="space-y-2" aria-label={quickLinksLabel}>
						{#each navItems as item}
							<button onclick={() => scrollToSection(item.id)} class="block text-gray-400 transition-colors hover:text-amber-400">
								{item.label}
							</button>
						{/each}
					</nav>
					<h3 class="mt-6 mb-2 text-sm font-semibold text-gray-300">{t.nav.services}</h3>
					<ul class="space-y-1">
						{#each services as s}
							<li>
								<a href={serviceHref(s.content[language].slug)} class="text-sm text-gray-400 transition-colors hover:text-amber-400">
									{s.content[language].heading}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h2 class="mb-4 text-lg font-semibold">{t.footer.servesTitle}</h2>
					<p class="text-sm leading-relaxed text-gray-400">{t.footer.servesText}</p>
				</div>

				<div class="md:text-left">
					<div class="mb-4 inline-flex items-center space-x-2 md:inline-flex">
						<img src="{base}/logo.png" alt="TonyGroupe S.R.L. logo" class="h-8 w-8" width="32" height="32" />
						<div class="flex flex-col items-start leading-tight">
							<span class="text-lg font-bold tracking-wide text-white">TONYGROUPE <span class="text-amber-400">S.R.L.</span></span>
							<span class="text-xs font-medium tracking-wider text-gray-500">WOOD DIVISION</span>
						</div>
					</div>
					<p class="text-base text-gray-400">{t.footer.description}</p>
					<address class="mt-4 flex items-start gap-2 text-sm not-italic text-gray-500">
						<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
						<span>{t.footer.address}</span>
					</address>
					<a
						href="https://www.tonygroupe.be/"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-3 inline-flex items-center gap-1 text-sm text-amber-400 transition-colors hover:text-amber-300"
					>
						www.tonygroupe.be
						<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
					</a>
				</div>
			</div>
			<div class="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
				<p>&copy; {new Date().getFullYear()} TONYGROUPE S.R.L. {t.footer.copyright}</p>
			</div>
		</div>
	</footer>
</div>
