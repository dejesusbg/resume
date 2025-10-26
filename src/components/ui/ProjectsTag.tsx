import { IconType } from 'react-icons';

export const ProjectsStatTag = ({ icon: Icon, value }: { icon: IconType; value: string }) => {
	return (
		<li className="mt-2 mr-2 md:mt-0">
			<div className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				<Icon size={10} />
				{value}
			</div>
		</li>
	);
};

export const ProjectsCardTag = ({ name }: { name: string }) => {
	return (
		<li className="mt-2 mr-2 md:mt-0">
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				{name}
			</div>
		</li>
	);
};

export const ProjectsTableTag = ({ name }: { name: string }) => {
	return (
		<li className="my-1 mr-1.5">
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-berry bg-blush">
				{name}
			</div>
		</li>
	);
};
