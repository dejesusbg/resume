'use client';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Section from '@/components/ui/Section';
import { locales } from '@/i18n/locale';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

const colours = [
	'bg-ebony',
	'bg-cloud',
	'bg-periw',
	'bg-berry',
	'bg-lovie',
	'bg-blush',
	'bg-misty',
	'bg-lilac',
	'bg-frost',
];

const Footer = () => {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const tLayout = useTranslations('layout');

	const pathname = usePathname();
	if (pathname !== '/') return null;

	const handleLocaleChange = (newLocale: string) => {
		startTransition(() => {
			document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
			router.refresh();
		});
	};

	return (
		<Section id="footer">
			<footer className="flex flex-col max-w-xs gap-6 mx-auto text-sm text-center sm:max-w-lg lg:max-w-2xl">
				<MarkdownRaw classNames={{ a: 'font-semibold text-periw hocus:text-berry' }}>
					{tLayout('credits')}
				</MarkdownRaw>
				<div className="flex mx-auto border-2 rounded-full shadow border-misty h-min w-min overflow-clip">
					{colours.map((className, i) => (
						<div className={clsx('w-6 h-6', className)} key={i}></div>
					))}
					<select
						value={locale}
						onChange={(e) => handleLocaleChange(e.target.value)}
						disabled={isPending}
						className="px-2 py-0">
						{locales.map((loc) => (
							<option key={loc} value={loc}>
								{loc.toUpperCase()}
							</option>
						))}
					</select>
				</div>
			</footer>
		</Section>
	);
};

export default Footer;
