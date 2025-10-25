import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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

export const navigationItems = ['about', 'experience', 'projects'];

export const socialLinks = [
	{ icon: FaEnvelope, link: 'mailto:dejesusbg5@gmail.com', size: 22 },
	{ icon: FaGithub, link: 'https://github.com/dejesusbg', size: 24 },
	{ icon: FaLinkedin, link: 'https://linkedin.com/in/dejesusbg', size: 22 },
];

export const info = {
	name: 'Ricardo Barrios',
	title: 'Full Stack Engineer',
	description: 'I love to build experiences that help others.',
};
