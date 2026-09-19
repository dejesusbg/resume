'use client';
import Badge from '@/components/ui/Badge';
import Link from '@/components/ui/Link';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const LanguageToggle = ({ newLocale, text }: { newLocale: string; text: string }) => {
	const router = useRouter();
	const [_, startTransition] = useTransition();

	const handleLocaleChange = () => {
		startTransition(() => {
			document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
			router.refresh();
		});
	};

	return (
		<div className="flex items-center justify-center pb-0.5" onClick={() => handleLocaleChange()}>
			<Link type="globe" reverse>{text}</Link>
		</div>
	);
}

const Hero = () => {
	const t = useTranslations('hero');

	const badgeProps = { textureSrc: t('texture'), tagSrc: t('model') };
	const cta = t('cta');
	const toggleProps = { newLocale: t('code'), text: t('language') };

	return (
		<Section id="hero" className='min-h-dvh'>
			<Motion className="flex flex-col items-center justify-between my-auto">
				<Badge className="w-full max-h-[80vh] aspect-[2/3] shrink-0" {...badgeProps} />
				<div className="flex justify-center flex-wrap mt-8 gap-6 px-3">
					<Link href="#featured" type="down">{cta}</Link>
					<LanguageToggle {...toggleProps} />
				</div>
			</Motion >
		</Section>
	)
}

export default Hero;