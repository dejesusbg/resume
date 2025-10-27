import { IconType } from 'react-icons';

export const ProjectsStat = ({ icon: Icon, value }: { icon: IconType; value: string }) => {
	return (
		<li>
			<div className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				<Icon size={10} />
				{value}
			</div>
		</li>
	);
};

export const ProjectsTech = ({ name }: { name: string }) => {
	return (
		<li>
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				{name}
			</div>
		</li>
	);
};
