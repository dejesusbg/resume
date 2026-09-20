import Link, { Icon } from '@/components/ui/Link';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { StatTag, TechTag } from '@/components/ui/Tag';
import { ProjectProps } from '@/i18n/locale';

const ProjectCard = ({ link, title, description, imageSrc, stat, tags, date }: ProjectProps) => {
	return (
		<li>
			<a
				{...(link ? { href: link, target: '_blank', rel: 'noreferrer noopener' } : {})}
				data-project-card
				className="flex flex-col justify-center px-4 py-4 space-y-4 border-2 md:justify-start md:flex-row md:space-x-4 rounded-2xl border-misty group hocus:shadow">
				<div className="flex flex-col items-center space-y-2">
					<Image
						alt={title}
						src={`${imageSrc}`}
						className="drop-shadow min-w-[54px] max-w-[54px] group-hocus:brightness-105"
						width={512}
						height={512}
						unoptimized
					/>
					<div className="text-xs font-medium tracking-wide text-cloud/80">{date}</div>
				</div>
				<div className="flex flex-col space-y-2 md:text-lg">
					<h3 className="font-semibold text-center md:text-start text-periw group-hocus:text-berry group-hover:underline group-hover:underline-offset-4">
						{title}
						{link && <Icon type="out" />}
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


const Featured = () => {
	const t = useTranslations('featured');

	const projects = useTranslations().raw('projects') as ProjectProps[];
	const featuredProjects = projects.filter((project) => project.featured);

	const heading = t('heading');
	const body = t('body');
	const cta = t('cta');
	const contact = t('contact');

	return (
		<Section id="featured" className="pt-[64px] pb-[72px] px-[6vw]" aria-labelledby="featured-heading">
			<Motion className="flex flex-col my-auto space-y-6">
				<h2 id="featured-heading" className="sr-only">{heading}</h2>
				<p className="text-lg text-cloud/80">
					{body}
				</p>
				<ul className="space-y-4" data-motion-stagger>
					{featuredProjects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ul>
				<div className="flex flex-col items-center justify-center gap-6 mt-2 sm:flex-row sm:gap-8">
					<Link href="/archive">{cta}</Link>
					<Link href="#contact" type='down'>{contact}</Link>
				</div>
			</Motion>
		</Section>
	);
};

export default Featured;
