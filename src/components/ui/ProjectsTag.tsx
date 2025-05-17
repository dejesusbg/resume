import { IconType } from 'react-icons';

export const ProjectsStatTag = ({ icon: Icon, value }: { icon: IconType; value: string }) => {
	return (
		<div className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-frost/85">
			<Icon size={10} />
			{value}
		</div>
	);
};

export const ProjectsCardTag = ({ name }: { name: string }) => {
	return (
		<li className="mr-1.5 mt-2">
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-blush bg-berry/20 ">
				{name}
			</div>
		</li>
	);
};

export const ProjectsTableTag = ({ name }: { name: string }) => {
	return (
		<li className="my-1 mr-1.5">
			<div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-blush bg-berry/20 ">
				{name}
			</div>
		</li>
	);
};
