'use client';
import clsx from 'clsx';

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

const Section = ({ children, id, className = '' }: SectionProps) => {
	return (
		<section
			id={id}
			className={clsx('mx-auto max-w-5xl px-4 not-first:mb-32 last:mb-24', className)}>
			{children}
		</section>
	);
};

export default Section;
