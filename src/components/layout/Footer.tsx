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
	<div className={clsx('w-4 h-4 rounded-full', className)}></div>
);

const Footer = () => {
	const pathname = usePathname();
	if (pathname !== '/') return null;

	return (
		<Section id="footer">
			<footer className="flex flex-col justify-center max-w-md space-y-4 text-sm text-cloud">
				<MarkdownRaw classNames={{ a: 'font-semibold text-periw hocus:text-berry' }}>
					{credits}
				</MarkdownRaw>
				<div className="flex flex-wrap -space-x-1">
					{/* Pass the full class name to the component */}
					{colours.map((className, i) => (
						<ColourCircle key={i} className={className} />
					))}
				</div>
			</footer>
		</Section>
	);
};

export default Footer;