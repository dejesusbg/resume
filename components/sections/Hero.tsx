import Badge from '@/components/ui/Badge';
import Link from '@/components/ui/Link';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const t = useTranslations('hero');

	const badgeProps = { textureSrc: t('texture'), tagSrc: t('model') };
	const cta = t('cta');

	return (
		<Section id="hero" className='min-h-dvh'>
			<Motion className="flex flex-col items-center justify-between my-auto">
				<Badge className="w-full max-h-[80vh] aspect-[2/3] shrink-0" {...badgeProps} />
				<div className="flex justify-center mt-8">
					<Link href="#featured" type="down">
						{cta}
					</Link>
				</div>
			</Motion >
		</Section>
	)
}

export default Hero;