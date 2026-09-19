import type { MetadataRoute } from 'next';

const siteUrl = 'https://dejesusbg.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteUrl, changeFrequency: 'monthly', priority: 1 },
		{ url: `${siteUrl}/archive`, changeFrequency: 'monthly', priority: 0.7 },
	];
}
