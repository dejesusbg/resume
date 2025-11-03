import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Background from '@/components/ui/Background';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: '../fonts/InterVariable.ttf' });
const instrument = Instrument_Serif({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://dejesusbg.netlify.app/'),
	title: 'Ricardo Barrios',
	description:
		'Ricardo Barrios is a systems engineer and software developer that loves to build experiences that help others.',
	keywords:
		'Ricardo Barrios, dejesusbg, software developer, systems engineer, web developer, ux design, full stack developer, colombia',
	openGraph: {
		title: 'Ricardo Barrios',
		description: 'Systems engineer & software developer building helpful digital experiences..',
		type: 'website',
		url: 'https://dejesusbg.netlify.app.com',
		siteName: 'Ricardo Barrios',
		images: [
			{
				url: '/thumbnail.png',
				width: 1169,
				height: 589,
				alt: 'Ricardo Barrios - Software Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ricardo Barrios',
		description: 'Systems engineer & software developer building helpful digital experiences.',
		images: ['/thumbnail.png'],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<NextIntlClientProvider>
					<Background />
					<Header />
					<main className="w-screen">
						{children}
						<Footer />
					</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
