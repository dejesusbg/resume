'use client';
import {
	info,
	NavigationItemProps,
	navigationItems,
	SocialLinkProps,
	socialLinks,
} from '@/data/Header';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const NavigationItem = ({ item, isActive = false, onClick }: NavigationItemProps) => (
	<a
		href={`#${item}`}
		className={clsx(
			'block w-min font-normal text-lg tracking-tight transition-all duration-300 hocus:font-bold hocus:tracking-tighter hocus:text-frost',
			{ 'translate-x-0 text-frost !font-bold !tracking-tighter': isActive }
		)}
		onClick={() => setTimeout(onClick, 300)}>
		{item}
	</a>
);

const SocialLink = ({ icon: Icon, link, size }: SocialLinkProps) => (
	<a href={link} className="hover:text-frost" target="_blank" rel="noopener noreferrer">
		<Icon size={size} />
	</a>
);

const Navigation = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const sections = navigationItems;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveIndex(sections.indexOf(entry.target.id));
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach((section, index) => {
			const element = document.getElementById(section);
			if (element) {
				observer.observe(element);
				if (index === sections.indexOf(section)) setActiveIndex(index);
			}
		});

		return () => observer.disconnect();
	}, [sections]);

	return (
		<nav className="relative hidden gap-3 mt-16 select-none lg:flex">
			<span
				className="text-xl font-semibold transition-all duration-100 ease-in-out h-9 text-lovie"
				style={{ transform: `translateY(${activeIndex * 100}%)` }}>
				{'>'}
			</span>
			<div className="space-y-2">
				{sections.map((name, index) => (
					<NavigationItem
						key={name}
						item={name}
						isActive={activeIndex === index}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>
		</nav>
	);
};

const SocialLinks = () => {
	return (
		<div className="flex items-center px-1 mt-8 space-x-5">
			{socialLinks.map((link) => (
				<SocialLink key={link.link} {...link} />
			))}
		</div>
	);
};

const Header = () => {
	return (
		<header className="flex flex-col justify-between lg:top-0 w-full lg:w-[48%] lg:max-h-screen lg:sticky lg:py-24">
			<div>
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					<a href="https://dejesusbg.netlify.app">{info.name}</a>
				</h1>
				<h2 className="mt-3 text-lg font-medium sm:text-xl">{info.title}</h2>
				<p className="max-w-xs mt-4 leading-normal">{info.description}</p>
				<Navigation />
			</div>
			<div>
				<SocialLinks />
			</div>
		</header>
	);
};

export default Header;
