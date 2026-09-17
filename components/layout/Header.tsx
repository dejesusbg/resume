'use client';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavLink = ({ href, label, active }: { href: string; label: string; active?: boolean }) => {
	return (
		<a
			href={href}
			aria-current={active ? 'page' : undefined}
			className={clsx(
				'text-sm leading-none tracking-tight whitespace-nowrap transition-colors duration-150',
				active ? 'text-berry font-semibold underline underline-offset-4 px-0' : 'text-cloud hocus:text-berry px-[0.5px] hocus:font-semibold hocus:px-0 hocus:underline hocus:underline-offset-4 font-medium',
			)}>
			{label}
		</a>
	);
};

const Header = () => {
	const tLayout = useTranslations('layout');
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 72);
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			data-site-header
			data-scrolled={isScrolled}
			className={`fixed top-0 z-50 flex w-screen border-b transition-colors duration-500 ${isScrolled ? 'border-misty bg-frost/75 backdrop-blur-md' : 'border-transparent bg-transparent'
				}`}>
			<nav className="flex items-center justify-center px-16 pt-8 pb-4 mx-auto">
				<div className="flex flex-row items-start gap-8">
					<NavLink href="/#projects" label={tLayout('nav.work')} />
					<NavLink href="/archive" label={tLayout('nav.projects')} active={pathname === '/archive'} />
					<NavLink href="/#about" label={tLayout('nav.about')} />
					<NavLink href="mailto:dejesusbg5@gmail.com?subject=Let's build something!" label={tLayout('nav.contact')} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
