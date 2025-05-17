import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';

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
	{ icon: FaSpotify, link: 'https://open.spotify.com/user/31zwlj7mwcvu3w2oklmyhna4s62a', size: 22 },
];

export const info = {
	name: 'Ricardo Barrios',
	title: 'Full Stack Engineer',
	description: 'I love to build experiences that help others.',
};
