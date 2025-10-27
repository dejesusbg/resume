import { LinkArrowOut } from '@/components/ui/LinkArrow';
import { ProjectProps } from '@/data/Projects';
import { ProjectsStat, ProjectsTech } from './ProjectsTag';

const ProjectCard = ({ title, description, link, imageSrc, stats, tags, date }: ProjectProps) => {
	return (
		<li>
			<a
				className="flex flex-col justify-center px-4 py-4 space-y-4 transition-shadow border-2 md:justify-start md:flex-row md:space-x-4 rounded-2xl border-misty hocus:shadow-lg"
				href={link}
				target="_blank"
				rel="noreferrer noopener">
				<div className="flex flex-col items-center space-y-2">
					<img alt={title} src={`/${imageSrc}`} className="min-w-[54px] max-w-[54px]" />
					<div className="text-xs font-medium tracking-wide text-cloud/50">{date}</div>
				</div>
				<div className="flex flex-col space-y-2 md:text-lg">
					<h3 className="inline-flex items-center justify-center font-semibold md:justify-start text-periw">
						{title}
						<LinkArrowOut />
					</h3>
					<p className="leading-tight text-center md:text-start">{description}</p>
					<ul className="flex flex-wrap gap-2 mt-2">
						{stats && <ProjectsStat {...stats} />}
						{tags.map((tag, index) => (
							<ProjectsTech key={index} name={tag} />
						))}
					</ul>
				</div>
			</a>
		</li>
	);
};

export default ProjectCard;
