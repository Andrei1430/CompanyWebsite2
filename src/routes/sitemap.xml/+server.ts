import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';

export const prerender = true;

// Only include real, crawlable pages — Google ignores URL hash fragments
const pages: { path: string; priority: string }[] = [
	{ path: '/', priority: '1.0' }
];

const projects: { path: string; priority: string }[] = [
	{ path: '/projects/front-door-and-windows/', priority: '0.8' },
	{ path: '/projects/balcony-window-and-door/', priority: '0.8' },
	{ path: '/projects/staircase/', priority: '0.8' }
];

export const GET: RequestHandler = async () => {
	const siteUrl = seo.siteUrl.replace(/\/$/, '');
	const allPages = [...pages, ...projects];
	const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
		.map(
			(p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
		)
		.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
