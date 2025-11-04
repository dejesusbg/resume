'use client';
import { emojiLocale, languageLocale, locales } from '@/i18n/locale';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LuGithub, LuLanguages, LuLinkedin } from 'react-icons/lu';

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex border-2 rounded-full shadow border-misty bg-lilac backdrop-blur">
			{children}
		</div>
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
							<span>{emojiLocale[loc.toUpperCase()]}</span>
							<span>{languageLocale[loc.toUpperCase()]}</span>
						</option>
					))}
				</select>
				<LuLanguages size={20} />
			</button>
		</HeaderContainer>
	);
};

const Header = () => {
	const tLayout = useTranslations('layout');

	return (
		<header className="fixed top-0 z-50 flex w-screen ">
			<div className="flex gap-2 mx-auto my-4">
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
		</header>
	);
};

export default Header;
