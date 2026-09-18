import ArrowLink from '@/components/ui/ArrowLink';
import { mergeProjects } from '@/lib/data';
import Motion from '@/components/ui/Motion';
import { ProjectCard } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Projects = () => {
	const tLayout = useTranslations('layout');
	const t = useTranslations();

	const projects = mergeProjects(t.raw('projects'));
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<Section id="projects">
			<Motion className="flex flex-col my-auto">
				<ul className="space-y-4" data-motion-stagger>
					{featuredProjects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ul>
				<div className="flex justify-center mt-8">
					<ArrowLink href="/archive">{tLayout('archive')}</ArrowLink>
				</div>
			</Motion>
		</Section>
	);
};

export default Projects;
