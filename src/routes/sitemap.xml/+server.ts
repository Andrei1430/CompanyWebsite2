import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';

export const prerender = true;

const mainPages = [
	{ path: '/', priority: '1.0' },
	{ path: '/nl/', priority: '1.0' }
];

const projectPages = [
	{ path: '/projects/front-door-and-windows/', priority: '0.8' },
	{ path: '/projects/balcony-window-and-door/', priority: '0.8' },
	{ path: '/projects/staircase/', priority: '0.8' }
];

export const GET: RequestHandler = async () => {
	const siteUrl = seo.siteUrl.replace(/\/$/, '');
	const lastmod = new Date().toISOString().split('T')[0];

	const hreflangBlock = `
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="nl" href="${siteUrl}/nl/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;

	const allUrls = [
		...mainPages.map(
			(p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${p.priority}</priority>${hreflangBlock}
  </url>`
		),
		...projectPages.map(
			(p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
		)
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
