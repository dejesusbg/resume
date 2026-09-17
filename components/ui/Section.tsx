import clsx from 'clsx';
import { layout } from '@/lib/tokens';

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

const Section = ({ children, id, className = '' }: SectionProps) => {
	return (
		<section
			id={id}
			className={clsx('mx-auto w-full max-w-4/5 not-first:mb-32 last:mb-8', className)}>
			{children}
		</section>
	);
};

export default Section;
