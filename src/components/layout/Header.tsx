'use client';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

interface SocialLinkProps {
	icon: IconType;
	link: string;
	size: number;
}

const socialLinks = [
	{ icon: LuMail, link: 'mailto:dejesusbg5@gmail.com', size: 22 },
	{ icon: LuGithub, link: 'https://github.com/dejesusbg', size: 24 },
	{ icon: LuLinkedin, link: 'https://linkedin.com/in/dejesusbg', size: 22 },
];

const SocialLink = ({ icon: Icon, link, size }: SocialLinkProps) => (
	<a
		href={link}
		className="px-2 py-1 rounded-full text-cloud hocus:text-berry"
		target="_blank"
		rel="noopener noreferrer">
		<Icon size={size} />
	</a>
);

const SocialLinks = ({ isHidden }: { isHidden: boolean }) => {
	return (
		<div
			className={clsx('flex space-x-2 py-2 border-misty flow', {
				'max-w-0 px-0 border-none opacity-0 pointer-events-none overflow-hidden': isHidden,
				'max-w-[150px] px-2 border-r-2 opacity-100': !isHidden,
			})}>
			<div className="flex space-x-2">
				{socialLinks.map((link) => (
					<SocialLink key={link.link} {...link} />
				))}
			</div>
		</div>
	);
};

const Header = () => {
	const tLayout = useTranslations('layout');
	const [isBtnHovered, setBtnHovered] = useState(false);

	return (
		<header className="fixed top-0 flex w-screen">
			<div className="absolute w-full h-full blur-to-t" />
			<div className="z-50 flex mx-auto my-4 overflow-hidden border-2 rounded-full shadow border-misty bg-lilac backdrop-blur">
				<SocialLinks isHidden={isBtnHovered} />
				<a
					href="mailto:dejesusbg5@gmail.com?subject=Let's build something!"
					className={clsx('py-1 mx-2 font-medium rounded-full cursor-pointer self-center flow', {
						'px-[91px]': isBtnHovered,
						'px-4': !isBtnHovered,
					})}
					onMouseEnter={() => setBtnHovered(true)}
					onMouseLeave={() => setBtnHovered(false)}>
					<span>{tLayout('book')}</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
