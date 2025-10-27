import { LinkArrowNext } from '@/components/ui/LinkArrow';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import { ProjectCard, ProjectProps } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const tAbout = useTranslations('about');
	return (
		<Section className="flex flex-col justify-center space-y-8 h-svh">
			<MarkdownRaw>{tAbout.raw('name')}</MarkdownRaw>
			<div className="flex flex-col space-y-2 text-lg text-center md:text-2xl">
				<h2 className="font-semibold">{tAbout('title')}</h2>
				<p>{tAbout('description')}</p>
			</div>
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

	return (
		<Section id="projects">
			<ul className="space-y-4">
				{projects
					.filter((project) => project.featured)
					.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
			</ul>
			<div className="flex justify-center mt-8">
				<a
					className="flex items-center font-semibold cursor-pointer flow text-periw hocus:text-berry hover:underline hover:underline-offset-4"
					href="/archive">
					{tLayout('archive')}
					<LinkArrowNext />
				</a>
			</div>
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
