import { LinkArrowOut } from '@/components/ui/LinkArrow';
import { StatTag, TechTag } from '@/components/ui/Tag';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { LuGithub } from 'react-icons/lu';

export interface ProjectProps {
	title: string;
	description: string;
	link?: string;
	imageSrc?: string;
	tags: string[];
	stat?: string;
	date: string;
	featured?: boolean;
}

const ProjectCard = ({ title, description, link, imageSrc, stat, tags, date }: ProjectProps) => {
	return (
		<li>
			<a
				className="flex flex-col justify-center px-4 py-4 space-y-4 transition-shadow border-2 md:justify-start md:flex-row md:space-x-4 rounded-2xl border-misty hocus:shadow-lg"
				href={link}
				target="_blank"
				rel="noreferrer noopener">
				<div className="flex flex-col items-center space-y-2">
					<img alt={title} src={`/${imageSrc}`} className="logo" />
					<div className="text-xs font-medium tracking-wide text-cloud/50">{date}</div>
				</div>
				<div className="flex flex-col space-y-2 md:text-lg">
					<h3 className="inline-flex items-center justify-center font-semibold md:justify-start text-periw">
						{title}
						<LinkArrowOut />
					</h3>
					<p className="leading-tight text-center md:text-start">{description}</p>
					<ul className="flex flex-wrap justify-center gap-2 mt-2 md:justify-start">
						{stat && <StatTag stat={stat} />}
						{tags.map((tag, index) => (
							<TechTag key={index} tech={tag} />
						))}
					</ul>
				</div>
			</a>
		</li>
	);
};

const ProjectRow = ({ title, description, link, stat, tags, date }: ProjectProps) => {
	const tLayout = useTranslations('layout');

	const isGithub = link && link.includes('github.com');
	const linkDisplay = isGithub ? tLayout('source') : link ? tLayout('demo') : '';
	const yearDisplay = '20' + date.split('/')[1];

	const LinkElement = ({ isHidden }: { isHidden: boolean }) => {
		if (!link) return null;
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
				<div className="text-xs font-medium tracking-wide text-cloud/50">{yearDisplay}</div>
			</td>
			<td className="flex flex-col gap-4 p-4 text-sm">
				<div className="font-semibold leading-[120%]">{title}</div>
				<p className="font-normal sm:max-w-sm">{description}</p>
				<LinkElement isHidden={true} />
			</td>
			<td className="hidden p-4 align-top lg:table-cell">
				<ul className="flex flex-wrap gap-2">
					{stat && <StatTag stat={stat} />}
					{tags.map((tag, index) => (
						<TechTag key={index} tech={tag} />
					))}
				</ul>
			</td>
			<td className="hidden p-4 align-top sm:table-cell">
				<LinkElement isHidden={false} />
			</td>
		</tr>
	);
};

export { ProjectCard, ProjectRow };
