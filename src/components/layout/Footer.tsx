'use client';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Section from '@/components/ui/Section';
import { credits } from '@/data/Footer';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const colours = ['ebony', 'cloud', 'periw', 'berry', 'lovie', 'blush', 'misty', 'lilac', 'frost'];

const ColourCircle = ({ colourClass }: { colourClass: string }) => (
	<div className={clsx('w-4 h-4 rounded-full', 'bg-' + colourClass)}></div>
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
					{colours.map((colour, i) => (
						<ColourCircle key={i} colourClass={colour} />
					))}
				</div>
			</footer>
		</Section>
	);
};

export default Footer;
