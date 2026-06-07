import type { RequestHandler } from '@sveltejs/kit';
import { seo } from '$lib/seo';
import { services } from '$lib/services';

export const prerender = true;

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

const projectImages: { folder: string; count: number }[] = [
	{ folder: 'front-door-and-windows', count: 6 },
	{ folder: 'balcony-window-and-door', count: 5 },
	{ folder: 'staircase', count: 7 }
];

export const GET: RequestHandler = async () => {
	const siteUrl = seo.siteUrl.replace(/\/$/, '');

	const entries: string[] = [];

	// Homepage hero
	entries.push(`  <url>
    <loc>${siteUrl}/</loc>
    <image:image>
      <image:loc>${siteUrl}/Cover.jfif</image:loc>
      <image:title>Custom wooden window frames by TonyGroupe S.R.L.</image:title>
      <image:caption>Direct manufacturer in Brussels — wooden window frames, doors and renovations across Belgium and the Netherlands</image:caption>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/logo.png</image:loc>
      <image:title>TonyGroupe S.R.L. logo</image:title>
    </image:image>
  </url>`);

	// Project galleries
	for (const proj of projectImages) {
		const images: string[] = [];
		for (let i = 1; i <= proj.count; i++) {
			images.push(`    <image:image>
      <image:loc>${siteUrl}/projects/${proj.folder}/Photo${i}.jpeg</image:loc>
      <image:title>${escapeXml(proj.folder.replace(/-/g, ' '))} — TonyGroupe project photo ${i}</image:title>
    </image:image>`);
		}
		entries.push(`  <url>
    <loc>${siteUrl}/</loc>
${images.join('\n')}
  </url>`);
	}

	// Service pages
	for (const service of services) {
		for (const lang of ['en', 'nl', 'fr'] as const) {
			const url = lang === 'en' ? `${siteUrl}/${service.content.en.slug}/` : `${siteUrl}/${lang}/${service.content[lang].slug}/`;
			const images: string[] = [];
			images.push(`    <image:image>
      <image:loc>${siteUrl}${service.image}</image:loc>
      <image:title>${escapeXml(service.content[lang].heading)}</image:title>
    </image:image>`);
			for (const img of service.content[lang].gallery) {
				images.push(`    <image:image>
      <image:loc>${siteUrl}${img.src}</image:loc>
      <image:title>${escapeXml(img.alt)}</image:title>
    </image:image>`);
			}
			entries.push(`  <url>
    <loc>${url}</loc>
${images.join('\n')}
  </url>`);
		}
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
