import Carousel from '@/components/ui/Carousel';
import { LinkArrowBack, LinkArrowOut } from '@/components/ui/LinkArrow';
import Motion from '@/components/ui/Motion';
import { ProjectProps } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { StatTag, TechTag } from '@/components/ui/Tag';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LuGithub } from 'react-icons/lu';

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
	const { project } = await params;

	const tLayout = await getTranslations('layout');
	const tData = await getTranslations('data');

	const projects: ProjectProps[] = (await tData.raw('projects')) || [];
	const projectData = projects.find((p) => p.slug === project);

	if (!projectData) return notFound();

	const isGithub = projectData.link?.includes('github.com');
	const linkText = isGithub ? tLayout('source') : tLayout('demo');

	return (
		<Section id="project">
			<Motion className="flex flex-col items-center pt-24 space-y-8 text-center">
				<a
					className="font-semibold text-center cursor-pointer text-periw focus:text-berry hover:underline hover:underline-offset-4"
					href="/">
					<LinkArrowBack />
					Ricardo Barrios
				</a>
				<h2>{projectData.title}</h2>
				<p className="mx-auto text-lg md:text-2xl">{projectData.description}</p>
				<ul className="flex flex-wrap justify-center gap-2">
					{projectData.stat && <StatTag stat={projectData.stat} />}
					{projectData.tags.map((tag, index) => (
						<TechTag key={index} tech={tag} />
					))}
				</ul>
				<Carousel slug={project} images={projectData.images || []} />
				{projectData.link && (
					<a
						href={projectData.link}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={projectData.title}
						className="text-sm font-semibold text-periw whitespace-nowrap hocus:text-berry hover:underline hover:underline-offset-4">
						{linkText}
						{isGithub ? <LuGithub className="inline-block ml-1.5" size={14} /> : <LinkArrowOut />}
					</a>
				)}
			</Motion>
		</Section>
	);
}
