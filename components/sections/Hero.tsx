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
		<div lang={newLocale}>
			<Link type="globe" onClick={() => handleLocaleChange()} reverse>{text}</Link>
		</div>
	);
}

const Hero = () => {
	const t = useTranslations('hero');

	const skip = t('skip');
	const badgeProps = { textureSrc: t('texture'), tagSrc: t('model'), alt: t('alt') };
	const cta = t('cta');
	const toggleProps = { newLocale: t('code'), text: t('language') };

	return (
		<Section id="hero" className='min-h-dvh'>
			<Link href="#about" className="transition left-8 top-6 absolute -translate-y-16 focus:translate-y-0 z-10" type="down">{skip}</Link>
			<Motion className="flex flex-col items-center justify-between my-auto">
				<Badge className="w-full max-h-[80vh] aspect-[2/3] shrink-0" {...badgeProps} />
				<div className="flex flex-wrap justify-center gap-6 px-3 mt-8">
					<Link href="#featured" type="down">{cta}</Link>
					<LanguageToggle {...toggleProps} />
				</div>
			</Motion >
		</Section>
	)
}

export default Hero;