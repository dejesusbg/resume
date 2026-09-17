'use client';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Section from '@/components/ui/Section';
import { emojiLocale, languageLocale, locales } from '@/i18n/locale';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LuGithub, LuLanguages, LuLinkedin } from 'react-icons/lu';

const COLOURS = [
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

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex border-2 rounded-full shadow border-misty bg-lilac backdrop-blur">{children}</div>
	);
};

const LanguageButton = () => {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleLocaleChange = (newLocale: string) => {
		startTransition(() => {
			document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
			router.refresh();
		});
	};

	return (
		<HeaderContainer>
			<button className="header-btn" tabIndex={-1}>
				<label htmlFor="language" className="sr-only">
					Language
				</label>
				<select
					id="language"
					value={locale}
					onChange={(e: any) => handleLocaleChange(e.target.value)}
					disabled={isPending}
					className="absolute w-full h-full text-transparent cursor-pointer header-btn">
					{locales.map((loc) => (
						<option key={loc} value={loc}>
							{`${emojiLocale[loc.toUpperCase()]} ${languageLocale[loc.toUpperCase()]}`}
						</option>
					))}
				</select>
				<LuLanguages size={20} />
			</button>
		</HeaderContainer>
	);
};

const Footer = () => {
	const pathname = usePathname();
	const tLayout = useTranslations('layout');

	if (pathname !== '/') return null;

	return (
		<Section id="footer">
			<footer className="flex flex-col items-center gap-8 max-w-xs mx-auto text-sm text-center sm:max-w-lg lg:max-w-2xl">
				{/* Relocated from the old sitewide Header, temporarily, until it's redesigned. */}
				<div className="flex gap-2">
					<HeaderContainer>
						<a
							href="https://github.com/dejesusbg"
							target="blank"
							rel="noopener noreferer"
							className="header-btn">
							<LuGithub size={20} />
							<span className="sr-only">Github</span>
						</a>
						<a
							href="https://linkedin.com/in/dejesusbg"
							target="blank"
							rel="noopener noreferer"
							className="header-btn">
							<LuLinkedin size={20} />
							<span className="sr-only">Linkedin</span>
						</a>
					</HeaderContainer>
					<HeaderContainer>
						<a
							href="mailto:dejesusbg5@gmail.com?subject=Let's build something!"
							className={'header-btn font-medium rounded-full leading-[100%] px-4'}>
							{tLayout('book')}
						</a>
					</HeaderContainer>
					<LanguageButton />
				</div>
				<div className="flex flex-col gap-6">
					<MarkdownRaw classNames={{ a: 'font-semibold text-periw hocus:text-berry' }}>
						{tLayout('credits')}
					</MarkdownRaw>
					<div className="flex mx-auto border-2 rounded-full shadow border-misty h-min w-min overflow-clip">
						{COLOURS.map((className, index) => (
							<div className={clsx('w-6 h-6', className)} key={index}></div>
						))}
					</div>
				</div>
			</footer>
		</Section>
	);
};

export default Footer;
