<script lang="ts">
	import { onMount } from 'svelte';
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
	<title>ThermalPro - Home Thermal Solutions</title>
	<meta
		name="description"
		content="Specializing in advanced window glass replacement and frame solutions that dramatically improve your home's thermal coefficient."
	/>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Navigation -->
	<nav
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
			? 'bg-white shadow-lg'
			: 'bg-white/95 backdrop-blur-sm'}"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				<div class="flex items-center space-x-2">
					<Thermometer class="w-8 h-8 text-teal-600" />
					<span class="text-2xl font-bold text-gray-900">ThermalPro</span>
				</div>

				<div class="hidden md:flex items-center space-x-8">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							class="text-sm font-medium transition-colors {activeSection === item.id
								? 'text-teal-600'
								: 'text-gray-700 hover:text-teal-600'}"
						>
							{item.label}
						</button>
					{/each}
					<button
						onclick={toggleLanguage}
						class="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
						title={language === 'en' ? 'Switch to Nederlands' : 'Schakel naar Engels'}
					>
						<Languages class="w-5 h-5" />
						<span class="uppercase">{language === 'en' ? 'NL' : 'EN'}</span>
					</button>
				</div>

				<button
					onclick={() => scrollToSection('contact')}
					class="hidden md:block bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium"
				>
					{t.nav.getQuote}
				</button>

				<button onclick={() => (isMenuOpen = !isMenuOpen)} class="md:hidden p-2 text-gray-700">
					{#if isMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>

		{#if isMenuOpen}
			<div class="md:hidden bg-white border-t border-gray-200">
				<div class="px-4 py-4 space-y-3">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							class="block w-full text-left px-4 py-2 rounded-lg transition-colors {activeSection ===
							item.id
								? 'bg-teal-50 text-teal-600'
								: 'text-gray-700 hover:bg-gray-50'}"
						>
							{item.label}
						</button>
					{/each}
					<button
						onclick={toggleLanguage}
						class="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
					>
						<Languages class="w-5 h-5" />
						<span>{language === 'en' ? 'Nederlands' : 'English'}</span>
					</button>
					<button
						onclick={() => scrollToSection('contact')}
						class="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
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
		class="pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden"
	>
		<div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-8 animate-fade-in">
					<div class="inline-block">
						<span class="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
							{t.hero.badge}
						</span>
					</div>
					<h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
						{t.hero.title}
						<span class="text-teal-600"> {t.hero.titleHighlight}</span>
					</h1>
					<p class="text-xl text-gray-600 leading-relaxed">
						{t.hero.description}
					</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<button
							onclick={() => scrollToSection('contact')}
							class="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold flex items-center justify-center group"
						>
							{t.hero.ctaPrimary}
							<ArrowRight
								class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
							/>
						</button>
						<button
							onclick={() => scrollToSection('services')}
							class="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-all font-semibold"
						>
							{t.hero.ctaSecondary}
						</button>
					</div>
				</div>
				<div class="relative lg:h-[600px] animate-slide-in">
					<div
						class="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl transform rotate-3 opacity-20"
					></div>
					<img
						src="/images/Photo1.jpg"
						alt="Modern home with efficient windows"
						class="relative rounded-3xl shadow-2xl w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
		<button
			onclick={() => scrollToSection('services')}
			class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
		>
			<ChevronDown class="w-8 h-8 text-teal-600" />
		</button>
	</section>

	<!-- Services Section -->
	<section id="services" class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					{t.services.title}
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					{t.services.subtitle}
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<ServiceCard
					title={t.services.thermalGlass.title}
					description={t.services.thermalGlass.description}
					features={t.services.thermalGlass.features}
				>
					{#snippet icon()}
						<Thermometer class="w-12 h-12" />
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.windowFrames.title}
					description={t.services.windowFrames.description}
					features={t.services.windowFrames.features}
				>
					{#snippet icon()}
						<Shield class="w-12 h-12" />
					{/snippet}
				</ServiceCard>
				<ServiceCard
					title={t.services.doorFrames.title}
					description={t.services.doorFrames.description}
					features={t.services.doorFrames.features}
				>
					{#snippet icon()}
						<Shield class="w-12 h-12" />
					{/snippet}
				</ServiceCard>
			</div>
		</div>
	</section>

	<!-- Advantages Section -->
	<section id="advantages" class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					{t.advantages.title}
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					{t.advantages.subtitle}
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<AdvantageItem
						title={t.advantages.energy.title}
						description={t.advantages.energy.description}
					>
						{#snippet icon()}
							<Euro class="w-6 h-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.comfort.title}
						description={t.advantages.comfort.description}
					>
						{#snippet icon()}
							<Thermometer class="w-6 h-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.value.title}
						description={t.advantages.value.description}
					>
						{#snippet icon()}
							<Shield class="w-6 h-6" />
						{/snippet}
					</AdvantageItem>
					<AdvantageItem
						title={t.advantages.installation.title}
						description={t.advantages.installation.description}
					>
						{#snippet icon()}
							<Clock class="w-6 h-6" />
						{/snippet}
					</AdvantageItem>
				</div>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
						alt="Energy efficient home interior"
						class="rounded-2xl shadow-2xl"
					/>
					<div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
						<div class="flex items-center space-x-4">
							<div class="bg-teal-100 p-3 rounded-lg">
								<Thermometer class="w-8 h-8 text-teal-600" />
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">
									{t.advantages.uValue}
								</div>
								<div class="text-sm text-gray-600">From 2.8 to 0.8 W/m²K</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Cases Section -->
	<section id="cases" class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					{t.cases.title}
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					{t.cases.subtitle}
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<CaseStudy
					image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"
					title={t.cases.victorian.title}
					location={t.cases.victorian.location}
					description={t.cases.victorian.description}
					results={t.cases.victorian.results}
					badge={t.cases.badge}
				/>
				<CaseStudy
					image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
					title={t.cases.apartment.title}
					location={t.cases.apartment.location}
					description={t.cases.apartment.description}
					results={t.cases.apartment.results}
					badge={t.cases.badge}
				/>
				<CaseStudy
					image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
					title={t.cases.estate.title}
					location={t.cases.estate.location}
					description={t.cases.estate.description}
					results={t.cases.estate.results}
					badge={t.cases.badge}
				/>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">
					{t.contact.title}
				</h2>
				<p class="text-xl text-gray-600">{t.contact.subtitle}</p>
			</div>

			<div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
				<form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
					<input type="hidden" name="access_key" value="321a5c5d-60f4-474d-8566-2a55ff1c1233" />
					<input type="hidden" name="subject" value="New Thermal Efficiency Inquiry" />
					<input type="hidden" name="from_name" value="ThermalPro Website" />

					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
								{t.contact.form.name} *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
								placeholder={t.contact.form.namePlaceholder}
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								{t.contact.form.email} *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
								placeholder={t.contact.form.emailPlaceholder}
							/>
						</div>
					</div>

					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
								{t.contact.form.phone}
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
								placeholder={t.contact.form.phonePlaceholder}
							/>
						</div>
						<div>
							<label for="property" class="block text-sm font-medium text-gray-700 mb-2">
								{t.contact.form.propertyType}
							</label>
							<select
								id="property"
								name="property_type"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
						<label for="service" class="block text-sm font-medium text-gray-700 mb-2">
							{t.contact.form.serviceInterest}
						</label>
						<select
							id="service"
							name="service_interest"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
						>
							<option value="">{t.contact.form.serviceOptions.select}</option>
							<option value="glass">{t.contact.form.serviceOptions.glass}</option>
							<option value="window-frames">{t.contact.form.serviceOptions.windowFrames}</option>
							<option value="door-frames">{t.contact.form.serviceOptions.doorFrames}</option>
							<option value="full">{t.contact.form.serviceOptions.full}</option>
							<option value="assessment">{t.contact.form.serviceOptions.assessment}</option>
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							{t.contact.form.message} *
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
							placeholder={t.contact.form.messagePlaceholder}
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold flex items-center justify-center group text-lg"
					>
						{t.contact.form.submit}
						<ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</button>
				</form>

				<div class="mt-12 pt-8 border-t border-gray-200">
					<div class="grid md:grid-cols-3 gap-6 text-center">
						<div class="flex flex-col items-center">
							<Phone class="w-6 h-6 text-teal-600 mb-2" />
							<div class="text-sm font-medium text-gray-900">{t.contact.info.phone}</div>
							<div class="text-sm text-gray-600">+1 (555) 123-4567</div>
						</div>
						<div class="flex flex-col items-center">
							<Mail class="w-6 h-6 text-teal-600 mb-2" />
							<div class="text-sm font-medium text-gray-900">{t.contact.info.email}</div>
							<div class="text-sm text-gray-600">info@thermalpro.com</div>
						</div>
						<div class="flex flex-col items-center">
							<MapPin class="w-6 h-6 text-teal-600 mb-2" />
							<div class="text-sm font-medium text-gray-900">{t.contact.info.location}</div>
							<div class="text-sm text-gray-600">{t.contact.info.locationText}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 text-white py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid md:grid-cols-3 gap-8 mb-8">
				<div>
					<div class="flex items-center space-x-2 mb-4">
						<Thermometer class="w-8 h-8 text-teal-400" />
						<span class="text-2xl font-bold">ThermalPro</span>
					</div>
					<p class="text-gray-400">{t.footer.description}</p>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
					<div class="space-y-2">
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								class="block text-gray-400 hover:text-teal-400 transition-colors"
							>
								{item.label}
							</button>
						{/each}
					</div>
				</div>
				<div>
					<h3 class="font-semibold text-lg mb-4">{t.footer.businessHours}</h3>
					<div class="space-y-2 text-gray-400">
						<p>{t.footer.schedule.weekdays}</p>
						<p>{t.footer.schedule.saturday}</p>
						<p>{t.footer.schedule.sunday}</p>
					</div>
				</div>
			</div>
			<div class="border-t border-gray-800 pt-8 text-center text-gray-400">
				<p>&copy; {new Date().getFullYear()} ThermalPro. {t.footer.copyright}</p>
			</div>
		</div>
	</footer>
</div>
