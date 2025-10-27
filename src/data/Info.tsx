import { IconType } from 'react-icons';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

export interface SocialLinkProps {
	icon: IconType;
	link: string;
	size: number;
}

export const socialLinks = [
	{ icon: LuMail, link: 'mailto:dejesusbg5@gmail.com', size: 22 },
	{ icon: LuGithub, link: 'https://github.com/dejesusbg', size: 24 },
	{ icon: LuLinkedin, link: 'https://linkedin.com/in/dejesusbg', size: 22 },
];

export const info = {
	name: `# <img src="./me.webp" alt="Animal Crossing Profile Picture" class="h1-logo" /> [Ricardo <br/> Barrios](https://dejesusbg.netlify.app) <img src="./maps_logo.webp" alt="Maps Logo" class="h1-logo" /> <img src="./pages_logo.webp" alt="Pages Logo" class="h1-logo" /> <img src="./photos_logo.webp" alt="Photos Logo" class="h1-logo" />`,
	title: 'Full Stack Engineer',
	description: 'I love to build experiences that help others.',
};

export const bookText = 'Book a call';
