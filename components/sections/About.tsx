import ArrowLink from '@/components/ui/ArrowLink';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Motion from '@/components/ui/Motion';
import { ScrollCue } from '@/components/ui/ScrollCue';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const About = () => {
	const tAbout = useTranslations('about');
	const tLayout = useTranslations('layout');

	return (
		<Section id="about">
			<Motion className="flex flex-col my-auto">
				<MarkdownRaw
					classNames={{
						p: 'text-ebony text-2xl text-center md:text-4xl leading-[150%]',
						a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
					}}>
					{tAbout.raw('manifest')}
				</MarkdownRaw>
				<div className="flex justify-center mt-8">
					<ArrowLink href={tLayout('resumeUrl')} external>
						{tLayout('seeResume')}
					</ArrowLink>
				</div>
			</Motion>

			<ScrollCue label={tLayout('projectsLead')} fade className="absolute inset-x-0 bottom-6" />
		</Section>
	);
};

export default About;
