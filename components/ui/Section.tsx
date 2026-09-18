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
				'w-full flex flex-col h-fit max-w-[1080px] m-0-auto',
				className,
			)}>
			{children}
		</section>
	);
};

export default Section;
