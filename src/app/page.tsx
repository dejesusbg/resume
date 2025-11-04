import { LinkArrowNext } from '@/components/ui/LinkArrow';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Motion from '@/components/ui/Motion';
import { ProjectCard, ProjectProps } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const tAbout = useTranslations('about');

	return (
		<Section id="hero">
			<Motion className="flex flex-col justify-center space-y-8 h-svh">
				<MarkdownRaw>{tAbout.raw('name')}</MarkdownRaw>
				<div className="flex flex-col space-y-2 text-lg text-center md:text-2xl">
					<span className="font-semibold">{tAbout('title')}</span>
					<p className="max-w-xs mx-auto sm:max-w-lg lg:max-w-2xl">{tAbout('description')}</p>
				</div>
			</Motion>
		</Section>
	);
};

const About = () => {
	const tAbout = useTranslations('about');

	return (
		<Section id="about">
			<MarkdownRaw
				classNames={{
					p: 'text-ebony text-2xl not-first:mt-[36px] md:not-first:mt-[48px] md:text-4xl leading-[120%]',
					a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
				}}>
				{tAbout.raw('manifest')}
			</MarkdownRaw>
		</Section>
	);
};

const Projects = () => {
	const tLayout = useTranslations('layout');
	const tData = useTranslations('data');

	const projects: ProjectProps[] = tData.raw('projects');
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<Section id="projects">
			<Motion className="flex flex-col">
				<ul className="space-y-4">
					{featuredProjects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ul>
				<div className="flex justify-center mt-8">
					<a
						href="/archive"
						className="font-semibold text-center cursor-pointer text-periw hocus:text-berry hover:underline hover:underline-offset-4">
						{tLayout('archive')}
						<LinkArrowNext />
					</a>
				</div>
			</Motion>
		</Section>
	);
};

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
		</>
	);
}
