import Background from '@/components/ui/Background';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Webring from '@/components/ui/Webring';

const inter = localFont({ src: '../fonts/InterVariable.ttf' });
const instrument_serif = Instrument_Serif({ weight: '400', subsets: ['latin'] });

const siteUrl = 'https://dejesusbg.netlify.app';

export const viewport: Viewport = {
	themeColor: '#f0e6fb',
};

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const t = await getTranslations('meta');
	const title = t('title');
	const description = t('description');
	const ogLocale = locale === 'es' ? 'es_CO' : 'en_US';

	return {
		metadataBase: new URL(siteUrl),
		title: { default: title, template: `%s — Ricardo Barrios` },
		description,
		keywords: t.raw('keywords') as string[],
		authors: [{ name: 'Ricardo Barrios', url: siteUrl }],
		creator: 'Ricardo Barrios',
		alternates: { canonical: '/' },
		robots: { index: true, follow: true },
		openGraph: {
			title,
			description: t('short'),
			type: 'website',
			url: '/',
			siteName: 'Ricardo Barrios',
			locale: ogLocale,
			alternateLocale: locale === 'es' ? 'en_US' : 'es_CO',
			images: [{ url: t('thumbnail'), width: 1200, height: 630, alt: t('alt') }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: t('short'),
			images: [{ url: t('thumbnail'), alt: t('alt') }],
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const t = await getTranslations('meta');
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ricardo Barrios García',
		alternateName: 'dejesusbg',
		url: siteUrl,
		image: new URL(t('thumbnail'), siteUrl).href,
		jobTitle: t('jobTitle'),
		description: t('short'),
		email: 'mailto:dejesusbg5@gmail.com',
		nationality: 'Colombian',
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad del Magdalena' },
		knowsAbout: ['UX research', 'Machine learning', 'Software engineering', 'Web development'],
		sameAs: ['https://github.com/dejesusbg', 'https://www.linkedin.com/in/dejesusbg'],
	};

	return (
		<html lang={locale}>
			<body className={`${inter.className} antialiased`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
				/>
				<NextIntlClientProvider>
					<Background />
					<main>
						{children}
					</main>
					<Webring />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
