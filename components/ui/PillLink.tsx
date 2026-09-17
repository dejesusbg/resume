export const PillLink = ({ href, label }: { href: string; label: string }) => {
	return (
		<a
			href={href}
			className="inline-flex items-center justify-center gap-1 px-4 py-2.5 min-h-[44px] rounded-full border-2 border-misty bg-lilac shadow backdrop-blur text-[13.5px] leading-[15px] font-medium tracking-tight whitespace-nowrap transition-shadow duration-200 hocus:shadow-lg">
			{label}
		</a>
	);
};
