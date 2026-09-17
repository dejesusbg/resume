'use client';
import { emojiLocale, languageLocale, locales } from '@/i18n/locale';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useId, useTransition } from 'react';
import { LuGithub, LuLanguages, LuLinkedin } from 'react-icons/lu';

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex border-2 rounded-full shadow border-misty bg-lilac backdrop-blur">{children}</div>
	);
};

const LanguageButton = () => {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const languageId = useId();

	const handleLocaleChange = (newLocale: string) => {
		startTransition(() => {
			document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
			router.refresh();
		});
	};

	return (
		<HeaderContainer>
			<button className="header-btn" tabIndex={-1}>
				<label htmlFor={languageId} className="sr-only">
					Language
				</label>
				<select
					id={languageId}
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

const HeroActions = () => {
	const tAbout = useTranslations('about');

	return (
		<div className="flex gap-2">
			<HeaderContainer>
				<a
					href="mailto:dejesusbg5@gmail.com?subject=Let's build something!"
					className="header-btn font-medium rounded-full leading-[100%] px-4">
					{tAbout('cta')}
				</a>
			</HeaderContainer>
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
			<LanguageButton />
		</div>
	);
};

export default HeroActions;
