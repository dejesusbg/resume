import clsx from 'clsx';
import { LuArrowDown, LuArrowLeft, LuArrowRight, LuArrowUp, LuArrowUpRight, LuGithub, LuGlobe } from 'react-icons/lu';

type IconType = 'repo' | 'globe' | 'out' | 'next' | 'down' | 'back' | 'up';

interface LinkProps {
	href?: string;
	children: string;
	onClick?: () => void;
	className?: string;
	type?: IconType;
	reverse?: boolean;
	external?: boolean;
}

const Icon = ({ type }: { type: IconType }) => {
	switch (type) {
		case 'up': return <LuArrowUp className="inline-block mx-1 mb-[2px]" size={16} />;
		case 'down': return <LuArrowDown className="inline-block mx-1 mb-[1px]" size={16} />;
		case 'out': return <LuArrowUpRight className="inline-block mx-1 mb-[2px]" size={16} />;
		case 'next': return <LuArrowRight className="inline-block mx-1 mb-[1px]" size={16} />;
		case 'back': return <LuArrowLeft className="inline-block mx-1 mb-[1px]" size={16} />;
		case 'repo': return <LuGithub className="inline-block mx-1.5" size={14} />;
		case 'globe': return <LuGlobe className="inline-block mx-1.5" size={14} />;
	}
}

const Link = ({ href, children, onClick, className, type = 'next', reverse = false, external }: LinkProps) => {
	const sharedClassName = clsx(
		'font-semibold text-center flex items-center whitespace-nowrap cursor-pointer text-periw hocus:text-berry hover:underline hover:underline-offset-4',
		reverse ? "flex-row-reverse" : "flex-row",
		className
	);

	if (onClick && !href) {
		return (
			<button className={sharedClassName} onClick={onClick} aria-label={children} type="button">
				{children}
				<Icon type={type} />
			</button>
		);
	}

	return (
		<a
			href={href}
			aria-label={children}
			className={sharedClassName}
			{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
		>
			{children}
			<Icon type={type} />
		</a>

	);
};

export default Link;
export { Icon }