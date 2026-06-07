import { error } from '@sveltejs/kit';
import type { Language } from '$lib/translations';
import { services, getServiceEntries } from '$lib/services';

export function entries() {
	return getServiceEntries();
}

export function load({ params }) {
	const lang = params.lang;
	const language: Language = lang === 'nl' ? 'nl' : lang === 'fr' ? 'fr' : 'en';
	const slug = params.slug;

	const service = services.find((s) => s.content[language].slug === slug);
	if (!service) {
		error(404, 'Service not found');
	}

	return {
		language,
		service,
		content: service.content[language]
	};
}
