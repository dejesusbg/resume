import { LinkArrowNext } from '@/components/ui/LinkArrow';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import ProjectCard from '@/components/ui/ProjectsCard';
import Section from '@/components/ui/Section';
import { bio } from '@/data/About';
import { info } from '@/data/Info';
import { projects } from '@/data/Projects';

const Hero = () => {
	return (
		<Section className="flex flex-col justify-center space-y-8 h-svh">
			<MarkdownRaw>{info.name}</MarkdownRaw>
			<div className="flex flex-col space-y-2 text-lg text-center md:text-2xl">
				<h2 className="font-semibold">{info.title}</h2>
				<p>{info.description}</p>
			</div>
		</Section>
	);
};

const About = () => {
	return (
		<Section id="about">
			<MarkdownRaw
				classNames={{
					p: 'text-ebony text-2xl not-first:mt-[36px] md:not-first:mt-[48px] md:text-4xl leading-[120%]',
					a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
				}}>
				{bio}
			</MarkdownRaw>
		</Section>
	);
};

const Projects = () => {
	return (
		<Section id="projects">
			<ul className="space-y-4">
				{projects
					.filter((project) => project.featured)
					.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
			</ul>
			<div className="flex justify-end mt-8">
				<a
					className="flex items-center font-semibold cursor-pointer flow text-periw hocus:text-berry hover:underline hover:underline-offset-4"
					href="/archive">
					View Full Project Archive
					<LinkArrowNext />
				</a>
			</div>
		</Section>
	);
};

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
		</div>
	);
}
