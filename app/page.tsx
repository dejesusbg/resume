import Badge3D from '@/components/ui/Badge3D';
import HeroActions from '@/components/layout/HeroActions';
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
		<Section id="hero" className="flex flex-col justify-center min-h-dvh max-h-svh">
			<Motion className="flex my-auto flex-row items-center justify-between py-0">
				<div className="flex flex-col items-center lg:items-start w-full lg:max-w-3/5 md:space-y-8 space-y-6 text-center lg:text-start">
					<h1 className="font-semibold text-[40px] md:text-[64px]">{tAbout('greeting')}</h1>
					<div className="flex flex-col space-y-1 md:space-y-2 text-base md:text-2xl">
						<span className="font-semibold">{tAbout('title')}</span>
						<p className="font-light">{tAbout('description')}</p>
					</div>
					<HeroActions />
				</div>
				<Badge3D className="hidden lg:flex w-full max-w-2/5 aspect-[2/3] shrink-0" />
			</Motion>
			<ScrollCue label={tAbout('scrollCue')} />
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
