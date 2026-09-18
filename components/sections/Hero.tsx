import Badge3D from '@/components/ui/Badge3D';
import HeroActions from '@/components/layout/HeroActions';
import Motion from '@/components/ui/Motion';
import { ScrollCue } from '@/components/ui/ScrollCue';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const tAbout = useTranslations('about');

	return (
		<Section id="hero">
			<Motion className="flex flex-row items-center justify-between my-auto">
				<div className="flex flex-col items-center w-full space-y-6 text-center lg:items-start lg:max-w-3/5 md:space-y-8 lg:text-start">
					<h1 className="font-semibold text-[40px] md:text-[64px]">{tAbout('greeting')}</h1>
					<div className="flex flex-col space-y-1 text-base md:space-y-2 md:text-2xl">
						<span className="font-semibold">{tAbout('title')}</span>
						<p className="font-light">{tAbout('description')}</p>
					</div>
					<HeroActions />
				</div>
				<Badge3D className="hidden lg:flex w-full max-w-2/5 aspect-[2/3] shrink-0" />
			</Motion>
			<ScrollCue label={tAbout('scrollCue')} fade className="absolute inset-x-0 bottom-6" />
		</Section>
	);
};

export default Hero;
