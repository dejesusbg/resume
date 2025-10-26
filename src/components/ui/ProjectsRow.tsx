import { LinkArrowOut } from '@/components/ui/LinkArrow';
import { ProjectProps } from '@/data/Projects';
import { FaGithub } from 'react-icons/fa';
import { ProjectsTableTag } from './ProjectsTag';

const ProjectsTableRow = ({
	title,
	description,
	link,
	tags,
	date,
	ongoing = false,
}: ProjectProps) => {
	const isLink = link !== '#';

	const isGithub = isLink && link.includes('github.com');
	const githubRepoName = isGithub
		? link.replace(/^https?:\/\/github\.com\/dejesusbg\//, '').replace(/\/$/, '')
		: null;

	const linkDisplay = isGithub
		? githubRepoName
		: isLink
		? link.replace(/^https?:\/\//, '').replace(/\/$/, '')
		: link;

	const yearDisplay = '20' + date.split('/')[1];

	return (
		<tr className="border-b-2 border-misty last:border-none">
			<td className="py-4 pr-4 text-sm align-top">
				<div className="text-xs font-medium tracking-wide text-cloud/50">
					{ongoing ? 'New' : yearDisplay}
				</div>
			</td>
			<td className="flex flex-col gap-4 py-4 pr-8 font-semibold">
				<div className="leading-[100%] text-periw">{title}</div>
				<p className="text-sm font-normal sm:max-w-md">{description}</p>
				{isLink && (
					<a
						href={link}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={title}
						className="block text-sm font-medium sm:hidden hocus:text-periw">
						{linkDisplay}
						{isGithub ? <FaGithub className="inline-block ml-1.5" size={14} /> : <LinkArrowOut />}
					</a>
				)}
			</td>
			<td className="hidden py-4 pr-4 align-top lg:table-cell">
				<ul className="flex -translate-y-1.5 flex-wrap">
					{tags.map((tag, index) => (
						<ProjectsTableTag key={index} name={tag} />
					))}
				</ul>
			</td>
			<td className="hidden py-4 align-top sm:table-cell">
				{isLink && (
					<a
						href={link}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={title}
						className="hidden text-sm font-medium sm:block hocus:text-periw">
						{linkDisplay}
						{isGithub ? <FaGithub className="inline-block ml-1.5" size={14} /> : <LinkArrowOut />}
					</a>
				)}
			</td>
		</tr>
	);
};

export default ProjectsTableRow;
