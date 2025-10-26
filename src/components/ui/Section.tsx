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
			className={clsx('mx-[6px] sm:mx-[24px] md:mx-[48px] lg:mx-[72px] mb-32', className)}>
			{children}
		</section>
	);
};

export default Section;
