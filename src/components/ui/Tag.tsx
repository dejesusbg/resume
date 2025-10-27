import { LuStar } from 'react-icons/lu';

export const StatTag = ({ stat }: { stat: string }) => {
	return (
		<li>
			<div className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				<LuStar size={10} />
				{stat}
			</div>
		</li>
	);
};

export const TechTag = ({ tech }: { tech: string }) => {
	return (
		<li>
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				{tech}
			</div>
		</li>
	);
};
