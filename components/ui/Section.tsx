import clsx from 'clsx';

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

const Section = ({ children, id }: SectionProps) => {
	return (
		<section
			id={id}
			className=
			'mx-auto w-full flex flex-col justify-center h-svh max-h-svh max-w-[var(--section-max-w)] transition-[max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
		>
			{children}
		</section >
	);
};

export default Section;
