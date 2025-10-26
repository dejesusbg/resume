import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Background from '@/components/ui/Background';
import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: '../fonts/InterVariable.ttf' });
const instrument = Instrument_Serif({ weight: '400' });

export const metadata: Metadata = {
	metadataBase: new URL('https://dejesusbg.netlify.app.com'),
	title: 'Ricardo Barrios',
	description:
		'Ricardo Barrios is a systems engineer and software developer that loves to build experiences that help others.',
	keywords:
		'Ricardo Barrios, dejesusbg, software developer, systems engineer, web developer, ux design, full stack developer, colombia',
	openGraph: {
		title: 'Ricardo Barrios',
		description:
			'Ricardo Barrios is a systems engineer and software developer that loves to build experiences that help others.',
		type: 'website',
		url: 'https://dejesusbg.netlify.app.com',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Background />
				<Header />
				<main className="w-screen px-8">
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
