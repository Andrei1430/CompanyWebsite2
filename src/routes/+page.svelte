<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import {
		Menu,
		X,
		ChevronDown,
		Phone,
		Mail,
		MapPin,
		ArrowRight,
		Shield,
		Thermometer,
		Euro,
		Clock,
		Languages
	} from 'lucide-svelte';
	import { translations, type Language, type Translation } from '$lib/translations';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import AdvantageItem from '$lib/components/AdvantageItem.svelte';
	import CaseStudy from '$lib/components/CaseStudy.svelte';

	let isMenuOpen = $state(false);
	let activeSection = $state('home');
	let isScrolled = $state(false);
	let language = $state<Language>('en');

	let t: Translation = $derived(translations[language]);

	const navItems = $derived([
		{ id: 'home', label: t.nav.home },
		{ id: 'services', label: t.nav.services },
		{ id: 'advantages', label: t.nav.advantages },
		{ id: 'cases', label: t.nav.cases },
		{ id: 'contact', label: t.nav.contact }
	]);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;

			const sections = ['home', 'services', 'advantages', 'cases', 'contact'];
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
		return () => window.removeEventListener('scroll', handleScroll);
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

	function toggleLanguage() {
		language = language === 'en' ? 'nl' : 'en';
	}
</script>

<svelte:head>
	<title>WoodCraft Joinery - Premium Wooden Windows, Doors & Renovations</title>
	<meta
		name="description"
		content="Expert craftsmen manufacturing custom wooden windows, doors, staircases, and kitchen furniture with thermal spacer glass. Direct manufacturer in Belgium. 10% discount until March 1st!"
	/>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Navigation -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
			? 'bg-white shadow-lg'
			: 'bg-white/95 backdrop-blur-sm'}"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-20 items-center justify-between">
				<div class="flex items-center space-x-2">
					<svg
						class="h-8 w-8 text-amber-700"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 22v-7l-2-2" />
						<path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z" />
						<path d="m14 14-2-2" />
					</svg>
					<span class="text-2xl font-bold text-gray-900">WoodCraft</span>
				</div>

				<div class="hidden items-center space-x-8 md:flex">
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
					<button
						onclick={toggleLanguage}
						class="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-700"
						title={language === 'en' ? 'Switch to Nederlands' : 'Schakel naar Engels'}
					>
						<Languages class="h-5 w-5" />
						<span class="uppercase">{language === 'en' ? 'NL' : 'EN'}</span>
					</button>
				</div>

				<button
					onclick={() => scrollToSection('contact')}
					class="hidden rounded-lg bg-amber-700 px-6 py-2.5 font-medium text-white transition-colors hover:bg-amber-800 md:block"
				>
					{t.nav.getQuote}
				</button>

				<button onclick={() => (isMenuOpen = !isMenuOpen)} class="p-2 text-gray-700 md:hidden">
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
					<button
						onclick={toggleLanguage}
						class="flex w-full items-center space-x-2 rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
					>
						<Languages class="h-5 w-5" />
						<span>{language === 'en' ? 'Nederlands' : 'English'}</span>
					</button>
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
		class="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-20"
	>
		<div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
		<!-- Promotional Banner -->
		<button
			type="button"
			class="absolute top-20 right-0 left-0 z-20 cursor-pointer bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3 text-center text-white focus:ring-2 focus:ring-amber-300 focus:outline-none"
			aria-label="Scroll to contact form"
			onclick={() => scrollToSection('contact')}
		>
			<div
				class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6"
			>
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
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
							{t.hero.badge}
						</span>
						<span class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
							{t.hero.manufacturerBadge}
						</span>
					</div>
					<h1 class="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
						{t.hero.title}
						<span class="text-amber-700"> {t.hero.titleHighlight}</span>
					</h1>
					<p class="text-lg leading-relaxed text-gray-600">
						{t.hero.description}
					</p>
					<div class="rounded-2xl bg-green-100/60 p-4">
						<div class="flex items-start gap-3">
							<svg
								class="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
								/>
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
										<svg
											class="h-4 w-4"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
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
										<svg
											class="h-4 w-4"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
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
							<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</button>
						<button
							onclick={() => scrollToSection('services')}
							class="rounded-lg border-2 border-amber-700 px-8 py-4 font-semibold text-amber-700 transition-all hover:bg-amber-50"
						>
							{t.hero.ctaSecondary}
						</button>
					</div>
				</div>
				<div class="animate-slide-in relative h-[500px] w-[500px] lg:h-[600px] lg:w-[600px]">
					<div
						class="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 opacity-20"
					></div>
					<img
						src="{base}/Cover.jfif"
						alt="WoodCraft Joinery Cover Photo"
						class="relative h-full w-full rounded-3xl object-cover object-center shadow-2xl"
					/>
				</div>
			</div>
		</div>
		<button
			onclick={() => scrollToSection('services')}
			class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce"
		>
			<ChevronDown class="h-8 w-8 text-amber-700" />
		</button>
	</section>

	<!-- Services Section -->
	<section id="services" class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">
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
				>
					{#snippet icon()}
						<svg
							class="h-12 w-12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
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
				>
					{#snippet icon()}
						<svg
							class="h-12 w-12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
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
				>
					{#snippet icon()}
						<svg
							class="h-12 w-12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
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
				>
					{#snippet icon()}
						<svg
							class="h-12 w-12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							<polyline points="9 22 9 12 15 12 15 22" />
						</svg>
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.pvcAluminum.title}
					description={t.services.pvcAluminum.description}
					features={t.services.pvcAluminum.features}
				>
					{#snippet icon()}
						<Shield class="h-12 w-12" />
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.flooring.title}
					description={t.services.flooring.description}
					features={t.services.flooring.features}
				>
					{#snippet icon()}
						<svg
							class="h-12 w-12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
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

	<!-- Advantages Section -->
	<section id="advantages" class="bg-gray-50 py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">
					{t.advantages.title}
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-gray-600">
					{t.advantages.subtitle}
				</p>
			</div>

			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="space-y-6">
					<AdvantageItem
						title={t.advantages.manufacturer.title}
						description={t.advantages.manufacturer.description}
					>
						{#snippet icon()}
							<svg
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
								/>
								<path d="M17 18h1" />
								<path d="M12 18h1" />
								<path d="M7 18h1" />
							</svg>
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.thermal.title}
						description={t.advantages.thermal.description}
					>
						{#snippet icon()}
							<Thermometer class="h-6 w-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.quality.title}
						description={t.advantages.quality.description}
					>
						{#snippet icon()}
							<Shield class="h-6 w-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.custom.title}
						description={t.advantages.custom.description}
					>
						{#snippet icon()}
							<svg
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
								<path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
							</svg>
						{/snippet}
					</AdvantageItem>
				</div>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
						alt="Beautiful Belgian home with wooden windows"
						class="rounded-2xl shadow-2xl"
					/>
					<div class="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
						<div class="flex items-center space-x-4">
							<div class="rounded-lg bg-amber-100 p-3">
								<Thermometer class="h-8 w-8 text-amber-700" />
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">
									{t.advantages.uValue}
								</div>
								<div class="text-sm text-gray-600">Substantial heat loss reduction</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Cases Section -->
	<section id="cases" class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">
					{t.cases.title}
				</h2>
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

	<!-- Contact Section -->
	<section id="contact" class="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-900">
					{t.contact.title}
				</h2>
				<p class="text-xl text-gray-600">{t.contact.subtitle}</p>
				<p class="mt-2 font-semibold text-amber-700">{t.contact.manufacturerNote}</p>
			</div>

			<!-- Discount reminder box -->
			<div
				class="mb-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-center text-white"
			>
				<p class="mb-2 text-xl font-bold">{t.promo.mainDiscount}</p>
				<p class="text-sm opacity-90">{t.promo.totalSavings}</p>
			</div>

			<div class="rounded-2xl bg-white p-8 shadow-xl lg:p-12">
				<form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
					<input type="hidden" name="access_key" value="321a5c5d-60f4-474d-8566-2a55ff1c1233" />
					<input type="hidden" name="subject" value="New Joinery Inquiry - WoodCraft" />
					<input type="hidden" name="from_name" value="WoodCraft Joinery Website" />

					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
								{t.contact.form.name} *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
								placeholder={t.contact.form.namePlaceholder}
							/>
						</div>
						<div>
							<label for="email" class="mb-2 block text-sm font-medium text-gray-700">
								{t.contact.form.email} *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
								placeholder={t.contact.form.emailPlaceholder}
							/>
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="phone" class="mb-2 block text-sm font-medium text-gray-700">
								{t.contact.form.phone}
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
								placeholder={t.contact.form.phonePlaceholder}
							/>
						</div>
						<div>
							<label for="property" class="mb-2 block text-sm font-medium text-gray-700">
								{t.contact.form.propertyType}
							</label>
							<select
								id="property"
								name="property_type"
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
							>
								<option value="">{t.contact.form.propertyOptions.select}</option>
								<option value="house">{t.contact.form.propertyOptions.house}</option>
								<option value="apartment">{t.contact.form.propertyOptions.apartment}</option>
								<option value="commercial">{t.contact.form.propertyOptions.commercial}</option>
								<option value="other">{t.contact.form.propertyOptions.other}</option>
							</select>
						</div>
					</div>

					<div>
						<label for="service" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.serviceInterest}
						</label>
						<select
							id="service"
							name="service_interest"
							class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
						>
							<option value="">{t.contact.form.serviceOptions.select}</option>
							<option value="wooden-windows">{t.contact.form.serviceOptions.woodenWindows}</option>
							<option value="wooden-doors">{t.contact.form.serviceOptions.woodenDoors}</option>
							<option value="interior-joinery"
								>{t.contact.form.serviceOptions.interiorJoinery}</option
							>
							<option value="staircase">{t.contact.form.serviceOptions.staircase}</option>
							<option value="kitchen">{t.contact.form.serviceOptions.kitchen}</option>
							<option value="full-renovation">{t.contact.form.serviceOptions.fullRenovation}</option
							>
							<option value="pvc-aluminum">{t.contact.form.serviceOptions.pvcAluminum}</option>
							<option value="assessment">{t.contact.form.serviceOptions.assessment}</option>
							<option value="other">{t.contact.form.propertyOptions.other}</option>
						</select>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-gray-700">
							{t.contact.form.message} *
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-amber-500"
							placeholder={t.contact.form.messagePlaceholder}
						></textarea>
					</div>

					<button
						type="submit"
						class="group flex w-full items-center justify-center rounded-lg bg-amber-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-amber-800"
					>
						{t.contact.form.submit}
						<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 py-16 text-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
				<div>
					<h3 class="mb-4 text-lg font-semibold">{t.footer.quickLinks}</h3>
					<div class="space-y-2">
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								class="block text-gray-400 transition-colors hover:text-amber-400"
							>
								{item.label}
							</button>
						{/each}
					</div>
				</div>
				<div class="text-center md:text-left">
					<div class="mb-4 inline-flex items-center space-x-2 md:inline-flex">
						<svg
							class="h-8 w-8 text-amber-400"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M12 22v-7l-2-2" />
							<path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z" />
							<path d="m14 14-2-2" />
						</svg>
						<span class="text-2xl font-bold">WoodCraft</span>
					</div>
					<p class="text-lg text-gray-400">{t.footer.description}</p>
				</div>
			</div>
			<div class="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
				<p>&copy; {new Date().getFullYear()} WoodCraft Joinery. {t.footer.copyright}</p>
			</div>
		</div>
	</footer>
</div>
