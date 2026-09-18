import clsx from 'clsx';
import { LinkArrowBack, LinkArrowNext, LinkArrowOut } from './LinkArrow';

const ARROWS = { next: LinkArrowNext, back: LinkArrowBack, out: LinkArrowOut };

interface ArrowLinkProps {
	href: string;
	children: React.ReactNode;
	direction?: keyof typeof ARROWS;
	external?: boolean;
	className?: string;
}

const ArrowLink = ({ href, children, direction = 'next', external, className }: ArrowLinkProps) => {
	const Arrow = ARROWS[direction];

	return (
		<a
			href={href}
			{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
			className={clsx(
				'font-semibold text-center cursor-pointer text-periw hocus:text-berry hover:underline hover:underline-offset-4',
				className,
			)}>
			{direction === 'back' && <Arrow />}
			{children}
			{direction !== 'back' && <Arrow />}
		</a>
	);
};

export default ArrowLink;
