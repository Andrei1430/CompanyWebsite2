import { error } from '@sveltejs/kit';
import type { Language } from '$lib/translations';

const validLangs = new Set(['nl', 'fr']);

export function entries() {
	return [{ lang: '' }, { lang: 'nl' }, { lang: 'fr' }];
}

export function load({ params }) {
	const lang = params.lang;
	if (lang && !validLangs.has(lang)) {
		error(404, 'Not found');
	}
	const language: Language = lang === 'nl' ? 'nl' : lang === 'fr' ? 'fr' : 'en';
	return { language };
}
