import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export interface NavigationItemProps {
	item: string;
	isActive?: boolean;
	onClick: () => void;
}

export interface SocialLinkProps {
	icon: IconType;
	link: string;
	size: number;
}

export const navigationItems = ['about', 'projects', 'gallery'];

export const socialLinks = [
	{ icon: FaGithub, link: 'https://github.com/dejesusbg', size: 24 },
	{ icon: FaLinkedin, link: 'https://linkedin.com/in/dejesusbg', size: 22 },
	{ icon: FaInstagram, link: 'https://www.instagram.com/dejesusbg/', size: 25 },
];

export const info = {
	name: 'Ricardo Barrios',
	title: 'Full Stack Engineer',
	description: 'I love to build experiences that help others.',
};
