import { error } from '@sveltejs/kit';
import type { Language } from '$lib/translations';

export function entries() {
	return [{ lang: '' }, { lang: 'nl' }];
}

export function load({ params }) {
	const lang = params.lang;
	if (lang && lang !== 'nl') {
		error(404, 'Not found');
	}
	const language: Language = lang === 'nl' ? 'nl' : 'en';
	return { language };
}
