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
	const titleWithoutLastWord = title.split(' ').slice(0, -1).join(' ');
	const titleLastWord = title.split(' ').slice(-1)[0];

	return (
		<tr className="border-b border-cloud/20 last:border-none">
			<td className="py-4 pr-4 text-sm align-top">
				<div className="translate-y-px text-frost/60">{ongoing ? 'New' : yearDisplay}</div>
			</td>
			<td className="py-4 pr-8 font-semibold leading-snug align-top">
				<div>
					<div className="block sm:hidden">
						{isLink ? (
							<a
								className="inline-flex items-baseline text-base font-medium leading-tight hocus:text-lovie sm:hidden group/link"
								href={link}
								target="_blank"
								rel="noreferrer noopener"
								aria-label={title}>
								<span>
									<span className="inline-block text-frost">
										{titleWithoutLastWord + ' '}
										<span className="text-nowrap inline-block">
											{titleLastWord}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
												aria-hidden="true">
												<path
													fillRule="evenodd"
													d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
													clipRule="evenodd"></path>
											</svg>
										</span>
									</span>
								</span>
							</a>
						) : (
							<span className="text-frost">{title}</span>
						)}
					</div>
					<div className="hidden sm:block text-frost">{title}</div>
				</div>
				<p className="block mt-2 text-sm font-normal leading-normal sm:max-w-md">{description}</p>
			</td>
			<td className="hidden py-4 pr-4 align-top lg:table-cell">
				<ul className="flex -translate-y-1.5 flex-wrap">
					{tags.map((tag, index) => (
						<ProjectsTableTag key={index} name={tag} />
					))}
				</ul>
			</td>
			<td className="hidden py-4 align-top sm:table-cell">
				<ul className="translate-y-1">
					<li className="flex items-center mb-1 text-nowrap">
						{isLink && (
							<a
								className="inline-flex items-baseline text-sm font-medium leading-tight text-frost/60 hocus:text-lovie group/link"
								href={link}
								target="_blank"
								rel="noreferrer noopener"
								aria-label={title}>
								<span>
									<span className="inline-block">
										{linkDisplay}
										{isGithub ? (
											<FaGithub className="inline-block ml-1.5" size={14} />
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
												aria-hidden="true">
												<path
													fillRule="evenodd"
													d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
													clipRule="evenodd"></path>
											</svg>
										)}
									</span>
								</span>
							</a>
						)}
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default ProjectsTableRow;
