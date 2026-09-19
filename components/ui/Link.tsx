import clsx from 'clsx';
import { LuGithub } from 'react-icons/lu';

type ArrowType = 'next' | 'back' | 'out' | 'down' | 'repo' | 'none';

interface LinkProps {
	href?: string;
	children: React.ReactNode;
	className?: string;
	type?: ArrowType;
	external?: boolean;
}

const Arrow = ({ type }: { type: ArrowType }) => {
	if (type === 'none') return null;
	if (type === 'repo') return <LuGithub className="inline-block ml-1.5" size={14} />

	const rotation = {
		next: 'rotate-[45deg]',
		back: '-rotate-[135deg]',
		out: 'rotate-[0deg]',
		down: 'rotate-[135deg]'
	}[type];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className={`inline-block w-4 h-4 mb-1 mx-1 ${rotation} -z-10`}
			aria-hidden="true">
			<path
				fillRule="evenodd"
				d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
				clipRule="evenodd"></path>
		</svg>
	);
};

const Link = ({ href, children, className, type = 'next', external }: LinkProps) => {
	return (
		<a
			href={href}
			aria-label={children?.toString()}
			{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
			className={clsx(
				'font-semibold text-center whitespace-nowrap cursor-pointer text-periw hocus:text-berry hover:underline hover:underline-offset-4',
				className,
			)}>
			{type === 'back' && <Arrow type="back" />}
			{children}
			{type !== 'back' && <Arrow type={type} />}
		</a>

	);
};

export default Link;
export { Arrow }