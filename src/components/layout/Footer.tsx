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

const ColourCircle = ({ className }: { className: string }) => (
	<div className={clsx('w-4 h-4 rounded-full mx-0.5 border-2', className)}></div>
);

const Footer = () => {
	const pathname = usePathname();
	if (pathname !== '/') return null;

	return (
		<Section id="footer" className="!max-w-sm">
			<footer className="flex flex-col items-center justify-center space-y-8 text-sm text-center">
				<MarkdownRaw classNames={{ a: 'font-semibold text-periw hocus:text-berry' }}>
					{credits}
				</MarkdownRaw>
				<div className="flex">
					{colours.map((className, i) => (
						<ColourCircle key={i} className={className} />
					))}
				</div>
			</footer>
		</Section>
	);
};

export default Footer;
