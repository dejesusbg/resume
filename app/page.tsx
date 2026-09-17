import Badge3D from '@/components/ui/Badge3D';
import { LinkArrowNext } from '@/components/ui/LinkArrow';
import { mergeProjects } from '@/lib/data';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Motion from '@/components/ui/Motion';
import { ProjectCard } from '@/components/ui/Project';
import { ScrollCue } from '@/components/ui/ScrollCue';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const tAbout = useTranslations('about');

	return (
		<Section id="hero" className="flex flex-col justify-center max-h-svh min-h-svh">
			<Motion className="flex flex-col items-center py-16 my-auto lg:flex-row lg:items-center lg:justify-between lg:py-0">
				<div className="flex flex-col items-start w-full max-w-[527px] space-y-8 text-start">
					<h1 className="!font-sans font-semibold leading-none text-4xl md:text-[64px]">{tAbout('greeting')}</h1>
					<div className="flex flex-col space-y-2 text-lg md:text-2xl">
						<span className="font-semibold">{tAbout('title')}</span>
						<p className="font-light max-w-xs sm:max-w-lg lg:max-w-2xl">{tAbout('description')}</p>
					</div>
					<div className="flex justify-center">
						<a
							href="/archive"
							className="font-semibold text-center cursor-pointer text-periw hocus:text-berry hover:underline hover:underline-offset-4">
							See what I've built
							<LinkArrowNext />
						</a>
					</div>
				</div>
				<Badge3D className="w-full max-w-2/5 aspect-[2/3] shrink-0" />
			</Motion>
			<ScrollCue label={tAbout('scrollCue')} className="hidden lg:flex" />
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
	const t = useTranslations();

	const projects = mergeProjects(t.raw('projects'));
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<Section id="projects">
			<Motion className="flex flex-col">
				<ul className="space-y-4" data-motion-stagger>
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
