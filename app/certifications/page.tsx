import Certifications from '@/components/sections/Certifications';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('meta');
	return {
		title: t('certificationsTitle'),
		description: t('certificationsDescription'),
		alternates: { canonical: '/certifications' },
		openGraph: { title: t('certificationsTitle'), description: t('certificationsDescription'), url: '/certifications' },
		twitter: { title: t('certificationsTitle'), description: t('certificationsDescription') },
	};
}

export default function Home() {
	return (
		<>
			<Certifications />
			<Footer />
		</>
	);
}
