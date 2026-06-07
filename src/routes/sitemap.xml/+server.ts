import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';
import { services } from '$lib/services';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const siteUrl = seo.siteUrl.replace(/\/$/, '');
	const lastmod = new Date().toISOString().split('T')[0];

	const homepageAlt = `
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="nl" href="${siteUrl}/nl/" />
    <xhtml:link rel="alternate" hreflang="nl-BE" href="${siteUrl}/nl/" />
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${siteUrl}/nl/" />
    <xhtml:link rel="alternate" hreflang="fr" href="${siteUrl}/fr/" />
    <xhtml:link rel="alternate" hreflang="fr-BE" href="${siteUrl}/fr/" />
    <xhtml:link rel="alternate" hreflang="en-BE" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;

	const homepageUrls = [
		`  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${homepageAlt}
  </url>`,
		`  <url>
    <loc>${siteUrl}/nl/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${homepageAlt}
  </url>`,
		`  <url>
    <loc>${siteUrl}/fr/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${homepageAlt}
  </url>`
	];

	const serviceUrls: string[] = [];
	for (const service of services) {
		const enUrl = `${siteUrl}/${service.content.en.slug}/`;
		const nlUrl = `${siteUrl}/nl/${service.content.nl.slug}/`;
		const frUrl = `${siteUrl}/fr/${service.content.fr.slug}/`;

		const altBlock = `
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="nl" href="${nlUrl}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;

		for (const [lang, url] of [['en', enUrl], ['nl', nlUrl], ['fr', frUrl]] as const) {
			const heading = service.content[lang].heading;
			serviceUrls.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${altBlock}
    <image:image>
      <image:loc>${siteUrl}${service.image}</image:loc>
      <image:title>${escapeXml(heading)}</image:title>
    </image:image>
  </url>`);
		}
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[...homepageUrls, ...serviceUrls].join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
