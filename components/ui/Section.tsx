import clsx from 'clsx';

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

const Section = ({ children, id, className }: SectionProps) => {
	return (
		<section
			id={id}
			className={clsx(
				'relative mx-auto w-full flex flex-col justify-start min-h-svh h-fit lg:h-svh max-w-[var(--section-max-w)] transition-[max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
				className,
			)}>
			{children}
		</section>
	);
};

export default Section;
