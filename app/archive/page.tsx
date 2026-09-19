import Archive from '@/components/sections/Archive';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('meta');
	return {
		title: t('archiveTitle'),
		description: t('archiveDescription'),
		alternates: { canonical: '/archive' },
		openGraph: { title: t('archiveTitle'), description: t('archiveDescription'), url: '/archive' },
		twitter: { title: t('archiveTitle'), description: t('archiveDescription') },
	};
}

export default function Home() {
	return (
		<>
			<Archive />
			<Footer />
		</>
	);
}
