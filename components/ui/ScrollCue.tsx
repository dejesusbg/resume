import clsx from 'clsx';

export const ScrollCue = ({ label, className }: { label: string; className?: string }) => {
	return (
		<div className={clsx('flex flex-col items-center py-6', className)}>
			<span className="text-sm font-semibold font-mono leading-none tracking-tight whitespace-nowrap text-cloud/64">
				{label}
			</span>
		</div>
	);
};
