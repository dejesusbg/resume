import { LinkArrowBack, LinkArrowOut } from '@/components/ui/LinkArrow';
import { ProjectProps } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { StatTag, TechTag } from '@/components/ui/Tag';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { LuGithub } from 'react-icons/lu';

export default function ProjectPage({ params }: { params: { project: string } }) {
	const tLayout = useTranslations('layout');

	const tData = useTranslations('data');
	const projects: ProjectProps[] = tData.raw('projects') || [];
	const project = projects.find((p) => p.slug === params.project);

	if (!project) return notFound();

	const isGithub = project.link?.includes('github.com');
	const linkText = isGithub ? tLayout('source') : tLayout('demo');

	return (
		<Section id="project">
			<div className="flex flex-col items-center pt-32 space-y-4">
				<a
					className="font-semibold text-center cursor-pointer text-periw focus:text-berry hover:underline hover:underline-offset-4"
					href="/">
					<LinkArrowBack />
					Ricardo Barrios
				</a>
				<h2>{project.title}</h2>
				<div className="flex flex-col items-center mt-8 space-y-8 text-center">
					<ul className="flex flex-wrap justify-center gap-2">
						{project.stat && <StatTag stat={project.stat} />}
						{project.tags.map((tag, index) => (
							<TechTag key={index} tech={tag} />
						))}
					</ul>
					<p className="mx-auto text-lg md:text-2xl">{project.description}</p>
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer noopener"
							aria-label={project.title}
							className="text-sm font-semibold text-periw whitespace-nowrap hocus:text-berry hover:underline hover:underline-offset-4">
							{linkText}
							{isGithub ? <LuGithub className="inline-block ml-1.5" size={14} /> : <LinkArrowOut />}
						</a>
					)}
				</div>
			</div>
		</Section>
	);
}
