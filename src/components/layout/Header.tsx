'use client';
import { SocialLinkProps, socialLinks } from '@/data/Info';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const SocialLink = ({ icon: Icon, link, size }: SocialLinkProps) => (
	<a
		href={link}
		className="p-2 rounded-full text-cloud hocus:text-berry"
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
	const pathname = usePathname();
	if (pathname !== '/') return null;

	const [isBtnHovered, setBtnHovered] = useState(false);

	return (
		<header className="fixed top-0 flex w-screen">
			<div className="z-50 flex mx-auto my-8 overflow-hidden border-2 rounded-full border-misty bg-lilac backdrop-blur">
				<SocialLinks isHidden={isBtnHovered} />
				<a
					href="mailto:dejesusbg5@gmail.com?subject=Let's build something!"
					className={clsx('py-2 mx-2 font-medium rounded-full cursor-pointer self-center flow', {
						'px-[91px] ': isBtnHovered,
						'px-4': !isBtnHovered,
					})}
					onMouseEnter={() => setBtnHovered(true)}
					onMouseLeave={() => setBtnHovered(false)}>
					<span>Book a call</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
