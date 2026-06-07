import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	const lang = path.startsWith('/nl') ? 'nl' : path.startsWith('/fr') ? 'fr' : 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
