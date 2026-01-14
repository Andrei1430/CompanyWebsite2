import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';

const pages = ['/', '/#services', '/#advantages', '/#cases', '/#contact'];

const projects = [
	'/projects/front-door-and-windows/',
	'/projects/balcony-window-and-door/',
	'/projects/staircase/'
];

export const GET: RequestHandler = async () => {
	const siteUrl = seo.siteUrl.replace(/\/$/, '');
	const urls = [...pages, ...projects].map((path) => `${siteUrl}${path}`);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
			.map(
				(url) => `
      <url>
        <loc>${url}</loc>
      </url>`
			)
			.join('')}
  </urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
