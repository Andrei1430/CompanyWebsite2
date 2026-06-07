import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const manifest = {
		name: seo.shortName,
		short_name: 'TonyGroupe',
		description: seo.description,
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#b45309',
		orientation: 'portrait-primary',
		categories: ['business', 'home improvement'],
		lang: 'en',
		dir: 'ltr',
		icons: [
			{ src: '/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
			{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
		]
	};

	return new Response(JSON.stringify(manifest, null, 2), {
		headers: {
			'Content-Type': 'application/manifest+json'
		}
	});
};
