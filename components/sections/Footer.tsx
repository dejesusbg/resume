'use client';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';
import MarkdownRaw from '../ui/MarkdownRaw';
import Link from '../ui/Link';
import { usePathname, useRouter } from 'next/navigation';
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
		<div onClick={() => handleLocaleChange()}>
			<Link className="text-sm" type="none" styleOnly>
				{text}
			</Link>
		</div>
	);
}


const Footer = () => {
	const pathname = usePathname();
	const t = useTranslations('footer');

	const back = t('back');
	const title = t('title');
	const body = t('body');
	const toggleProps = { newLocale: t('code'), text: t('language') };
	const showBackLink = pathname !== '/';

	return (
		<footer>
			<Section id="contact" className="pt-[149px] pb-[160px] px-[6vw]">
				<Motion className="flex flex-col items-center justify-center my-auto space-y-4">
					<span className="font-serif text-ebony text-4xl md:text-5xl lg:text-6xl text-center tracking-tighter leading-[110%]">
						{title}
					</span>
					<div className="pb-2.5">
						<MarkdownRaw
							classNames={{
								p: 'text-ebony text-center md:text-lg',
								a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
							}}>
							{body}</MarkdownRaw>
					</div>
					<div className="flex flex-row flex-wrap items-center justify-center gap-6 pt-7">
						{showBackLink && (
							<Link href="/" className="text-sm" type="back">
								{back}
							</Link>
						)}
						<Link href="https://github.com/dejesusbg" className="text-sm" type="out" external>
							GitHub
						</Link>
						<Link href="https://www.linkedin.com/in/dejesusbg" className="text-sm" type="out" external>
							LinkedIn
						</Link>
						<Link href="mailto:dejesusbg5@gmail.com" className="text-sm" type="out" external>
							Email
						</Link>
						<LanguageToggle {...toggleProps} />
					</div>
				</Motion>
			</Section >
		</footer >
	);
}

export default Footer;
