<script lang="ts">
	import { base } from '$app/paths';
	import { ArrowRight, CheckCircle, ChevronLeft, MapPin } from 'lucide-svelte';
	import { translations, type Language, type Translation } from '$lib/translations';
	import { services } from '$lib/services';
	import LanguageDropdown from '$lib/components/LanguageDropdown.svelte';

	let { data } = $props();

	let language: Language = $derived(data.language);
	let content = $derived(data.content);
	let service = $derived(data.service);
	let t: Translation = $derived(translations[language]);

	const homePathByLang: Record<Language, string> = {
		en: `${base}/`,
		nl: `${base}/nl/`,
		fr: `${base}/fr/`
	};

	let homePath = $derived(homePathByLang[language]);

	let relatedServices = $derived(
		services.filter((s) => s.key !== service.key).slice(0, 3)
	);

	function buildServiceHref(lang: Language, slug: string): string {
		if (lang === 'en') return `${base}/${slug}/`;
		return `${base}/${lang}/${slug}/`;
	}
</script>

<div class="min-h-screen bg-white">
	<!-- Top bar with home link + language switcher -->
	<header class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
			<a href={homePath} class="flex items-center space-x-2">
				<img src="{base}/logo.png" alt="TonyGroupe S.R.L. logo" class="h-8 w-8" width="32" height="32" />
				<div class="flex flex-col items-start leading-tight">
					<span class="text-base font-bold tracking-wide text-gray-800 sm:text-lg">TONYGROUPE <span class="text-amber-600">S.R.L.</span></span>
					<span class="text-[10px] font-medium tracking-wider text-gray-500 sm:text-xs">WOOD DIVISION</span>
				</div>
			</a>
			<div class="flex items-center gap-3">
				<a href={homePath} class="hidden items-center gap-1 text-sm text-gray-600 hover:text-amber-700 sm:flex">
					<ChevronLeft class="h-4 w-4" aria-hidden="true" />
					{t.nav.home}
				</a>
				<LanguageDropdown current={language} />
				<a
					href={`${homePath}#contact`}
					class="hidden rounded-lg bg-amber-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-800 sm:inline-block"
				>
					{t.nav.getQuote}
				</a>
			</div>
		</div>
	</header>

	<!-- Breadcrumbs -->
	<nav class="bg-gray-50 py-3" aria-label={language === 'nl' ? 'Kruimelpad' : language === 'fr' ? 'Fil d’Ariane' : 'Breadcrumb'}>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<ol class="flex items-center space-x-2 text-sm text-gray-600">
				<li><a href={homePath} class="hover:text-amber-700">{t.nav.home}</a></li>
				<li aria-hidden="true">/</li>
				<li><a href={`${homePath}#services`} class="hover:text-amber-700">{t.nav.services}</a></li>
				<li aria-hidden="true">/</li>
				<li class="font-medium text-gray-900" aria-current="page">{content.heading}</li>
			</ol>
		</div>
	</nav>

	<!-- Hero -->
	<section class="bg-white py-16">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">{content.heading}</h1>
			<p class="mb-8 text-xl text-gray-600">{content.subheading}</p>
			<div class="prose prose-lg max-w-none text-gray-700">
				<p>{content.intro}</p>
			</div>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a
					href={`${homePath}#contact`}
					class="group inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-800"
				>
					{content.cta.button}
					<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
				</a>
				<a
					href={homePath}
					class="inline-flex items-center justify-center rounded-lg border-2 border-amber-700 px-6 py-3 font-semibold text-amber-700 transition-colors hover:bg-amber-50"
				>
					{t.nav.home}
				</a>
			</div>
		</div>
	</section>

	<!-- Hero image -->
	<section class="bg-gray-50 py-12">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<img
				src="{base}{service.image}"
				alt={content.gallery[0]?.alt ?? content.heading}
				class="aspect-[16/9] w-full rounded-lg object-cover shadow-lg"
				width="1200"
				height="675"
				fetchpriority="high"
				decoding="async"
			/>
		</div>
	</section>

	<!-- Body sections -->
	<section class="bg-white py-16">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-3">
				<div class="lg:col-span-2 space-y-10">
					{#each content.sections as section}
						<div>
							<h2 class="mb-3 text-2xl font-bold text-gray-900">{section.heading}</h2>
							<p class="leading-relaxed text-gray-700">{section.body}</p>
						</div>
					{/each}
				</div>

				<!-- Features sidebar -->
				<aside class="lg:col-span-1">
					<div class="sticky top-24 rounded-xl border border-amber-200 bg-amber-50 p-6">
						<h2 class="mb-4 text-lg font-bold text-gray-900">
							{language === 'nl' ? 'In het kort' : language === 'fr' ? 'En bref' : 'At a glance'}
						</h2>
						<ul class="space-y-2.5">
							{#each content.features as feature}
								<li class="flex items-start gap-2 text-sm text-gray-800">
									<CheckCircle class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700" aria-hidden="true" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</aside>
			</div>
		</div>
	</section>

	<!-- Materials (if any) -->
	{#if content.materials.length > 0}
		<section class="bg-gray-50 py-16">
			<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-6 text-3xl font-bold text-gray-900">
					{language === 'nl' ? 'Materialen' : language === 'fr' ? 'Matériaux' : 'Materials'}
				</h2>
				<ul class="grid gap-4 md:grid-cols-2">
					{#each content.materials as material}
						<li class="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
							<CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
							<span class="text-gray-800">{material}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<!-- Process / HowTo -->
	<section class="bg-white py-16">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-3xl font-bold text-gray-900">{content.process.title}</h2>
			<ol class="space-y-6">
				{#each content.process.steps as step, i}
					<li class="flex gap-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">{i + 1}</div>
						<div>
							<h3 class="mb-1 text-lg font-semibold text-gray-900">{step.name}</h3>
							<p class="text-gray-700">{step.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Gallery -->
	{#if content.gallery.length > 0}
		<section class="bg-gray-50 py-16">
			<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-8 text-3xl font-bold text-gray-900">
					{language === 'nl' ? 'Realisaties' : language === 'fr' ? 'Réalisations' : 'Examples'}
				</h2>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each content.gallery as img}
						<img
							src="{base}{img.src}"
							alt={img.alt}
							class="aspect-square w-full rounded-lg object-cover shadow"
							loading="lazy"
							decoding="async"
							width="600"
							height="600"
						/>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Service FAQ -->
	{#if content.faq.length > 0}
		<section class="bg-white py-16">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<h2 class="mb-8 text-3xl font-bold text-gray-900">{t.faq.title}</h2>
				<div class="space-y-6">
					{#each content.faq as item}
						<div class="border-l-4 border-amber-700 bg-amber-50 p-5">
							<h3 class="mb-2 text-lg font-semibold text-gray-900">{item.question}</h3>
							<p class="text-gray-700">{item.answer}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA -->
	<section class="bg-amber-700 py-16 text-white">
		<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-4 text-3xl font-bold">{content.cta.title}</h2>
			<p class="mb-8 text-lg opacity-95">{content.cta.body}</p>
			<a
				href={`${homePath}#contact`}
				class="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-amber-700 transition-colors hover:bg-amber-50"
			>
				{content.cta.button}
				<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
			</a>
		</div>
	</section>

	<!-- Related services -->
	<section class="bg-gray-50 py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-2xl font-bold text-gray-900">
				{language === 'nl' ? 'Onze andere diensten' : language === 'fr' ? 'Nos autres services' : 'Our other services'}
			</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each relatedServices as related}
					<a
						href={buildServiceHref(language, related.content[language].slug)}
						class="group block rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
					>
						<h3 class="mb-2 text-lg font-bold text-gray-900 group-hover:text-amber-700">{related.content[language].heading}</h3>
						<p class="line-clamp-2 text-sm text-gray-600">{related.content[language].subheading}</p>
						<span class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-700">
							{language === 'nl' ? 'Bekijk' : language === 'fr' ? 'Voir' : 'View'}
							<ArrowRight class="h-4 w-4" aria-hidden="true" />
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 py-12 text-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-8 md:grid-cols-2">
				<div>
					<a href={homePath} class="mb-3 inline-flex items-center space-x-2">
						<img src="{base}/logo.png" alt="TonyGroupe S.R.L." class="h-8 w-8" width="32" height="32" />
						<span class="text-lg font-bold tracking-wide text-white">TONYGROUPE <span class="text-amber-400">S.R.L.</span></span>
					</a>
					<p class="text-sm text-gray-400">{t.footer.description}</p>
				</div>
				<div>
					<h2 class="mb-3 text-base font-semibold">{t.footer.servesTitle}</h2>
					<p class="text-sm text-gray-400">{t.footer.servesText}</p>
					<address class="mt-3 flex items-start gap-2 text-sm not-italic text-gray-500">
						<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
						<span>{t.footer.address}</span>
					</address>
				</div>
			</div>
			<div class="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
				<p>&copy; {new Date().getFullYear()} TONYGROUPE S.R.L. {t.footer.copyright}</p>
			</div>
		</div>
	</footer>
</div>
