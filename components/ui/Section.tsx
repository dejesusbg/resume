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
			style={{ maxWidth: layout.maxWidth, paddingInline: layout.gutter }}
			className={clsx('mx-auto w-full not-first:mb-32 last:mb-8', className)}>
			{children}
		</section>
	);
};

export default Section;
