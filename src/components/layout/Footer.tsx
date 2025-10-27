'use client';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Section from '@/components/ui/Section';
import { credits } from '@/data/Footer';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const colours = [
	'bg-ebony',
	'bg-cloud',
	'bg-periw',
	'bg-berry',
	'bg-lovie',
	'bg-blush',
	'bg-misty',
	'bg-lilac',
	'bg-frost',
];

const ColourBar = () => {
	return (
		<div className="flex mx-auto mb-4 border-2 rounded-full shadow border-misty h-min w-min overflow-clip">
			{colours.map((className, i) => (
				<div className={clsx('w-6 h-6', className)} key={i}></div>
			))}
		</div>
	);
};

const Footer = () => {
	const pathname = usePathname();
	if (pathname !== '/') return null;

	return (
		<Section id="footer">
			<footer className="flex flex-col max-w-xs gap-6 mx-auto text-sm text-center sm:max-w-lg lg:max-w-2xl">
				<MarkdownRaw classNames={{ a: 'font-semibold text-periw hocus:text-berry' }}>
					{credits}
				</MarkdownRaw>
				<ColourBar />
			</footer>
		</Section>
	);
};

export default Footer;
