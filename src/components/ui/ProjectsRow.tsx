import { LinkArrowOut } from '@/components/ui/LinkArrow';
import { ProjectsStat, ProjectsTech } from '@/components/ui/ProjectsTag';
import { archive, ProjectProps } from '@/data/Projects';
import clsx from 'clsx';
import { LuGithub } from 'react-icons/lu';

const ProjectsTableRow = ({
	title,
	description,
	link,
	stats,
	tags,
	date,
	ongoing = false,
}: ProjectProps) => {
	const isLink = link !== '#';
	const isGithub = isLink && link.includes('github.com');
	const linkDisplay = isGithub ? archive.source : isLink ? archive.demo : '';
	const yearDisplay = '20' + date.split('/')[1];

	const LinkElement = ({ isHidden }: { isHidden: boolean }) => {
		if (!isLink) return null;
		return (
			<a
				href={link}
				target="_blank"
				rel="noreferrer noopener"
				aria-label={title}
				className={clsx(
					'text-sm font-semibold text-periw whitespace-nowrap hocus:text-berry hover:underline hover:underline-offset-4',
					{ 'sm:hidden block': isHidden, 'sm:block hidden': !isHidden }
				)}>
				{linkDisplay}
				{isGithub ? <LuGithub className="inline-block ml-1.5" size={14} /> : <LinkArrowOut />}
			</a>
		);
	};

	return (
		<tr className="border-b-2 border-misty last:border-none">
			<td className="p-4 text-sm align-top">
				<div className="text-xs font-medium tracking-wide text-cloud/50">
					{ongoing ? 'New' : yearDisplay}
				</div>
			</td>
			<td className="flex flex-col gap-4 p-4 text-sm">
				<div className="font-semibold leading-[120%]">{title}</div>
				<p className="font-normal sm:max-w-sm">{description}</p>
				<LinkElement isHidden={true} />
			</td>
			<td className="hidden p-4 align-top lg:table-cell">
				<ul className="flex flex-wrap gap-2">
					{stats && <ProjectsStat {...stats} />}
					{tags.map((tag, index) => (
						<ProjectsTech key={index} name={tag} />
					))}
				</ul>
			</td>
			<td className="hidden p-4 align-top sm:table-cell">
				<LinkElement isHidden={false} />
			</td>
		</tr>
	);
};

export default ProjectsTableRow;
