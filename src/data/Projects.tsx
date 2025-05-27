import { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa';

export interface StatsProps {
	icon: IconType;
	value: string;
}

export interface ProjectProps {
	title: string;
	description?: string;
	link: string;
	imageSrc?: string;
	tags: string[];
	stats?: StatsProps;
	date: string;
	featured?: boolean;
}

export const projects = [
	{
		title: 'Conversational Influence Analysis',
		description:
			'A smart conversation analysis tool to uncover patterns of influence, emotional tone, manipulation tactics, and reasoning flaws.',
		link: 'https://github.com/dejesusbg/convolens',
		tags: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
			'Flask',
			'Python',
			'Docker',
			'Hugging Face',
			'TensorFlow',
			'Keras',
		],
		date: '05/25',
		ongoing: true,
	},
	{
		title: 'Blind-First Navigation App',
		description:
			'Accessible mobile app with real-time voice feedback, designed to assist visually impaired users in navigating urban environments.',
		link: 'https://github.com/dejesusbg/truenavi',
		imageSrc: 'navigation.png',
		tags: [
			'React Native',
			'Node.js',
			'TypeScript',
			'MongoDB',
			'React',
			'Tailwind',
			'Next.js',
			'Expo',
			'Docker',
			'Express',
		],
		featured: true,
		date: '03/25',
	},
	{
		title: 'eCommerce',
		description:
			'System built with microservices architecture, featuring order, inventory, payment management and processing, with API gateway caching.',
		link: 'https://github.com/dejesusbg/e-commerce',
		tags: [
			'Spring Boot',
			'Java',
			'Spring Cloud',
			'Docker',
			'Keycloak',
			'Eureka',
			'PostgreSQL',
			'MongoDB',
			'Grafana',
			'Prometheus',
		],
		date: '02/25',
	},
	{
		title: 'Corporate Website for Engineering Firm',
		description:
			'Fast, modern, and content-managed website for INGNOVA SAS, improving its online presence.',
		link: 'https://rdingnova.com.co/',
		imageSrc: 'ingnova.png',
		tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Netlify'],
		featured: true,
		date: '02/25',
	},
	{
		title: 'Mango Classification using AI',
		description:
			'Machine learning models for automated mango ripeness classification, helping optimize agricultural processes.',
		link: 'https://github.com/dejesusbg/mangifera',
		imageSrc: 'mangifera.png',
		tags: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'],
		stats: { icon: FaStar, value: '95%+ accuracy' },
		featured: true,
		date: '10/24',
	},
	{
		title: 'Wordflow Bot',
		link: 'https://github.com/dejesusbg/wordflow-bot',
		description: 'Just a silly automation script that submits valid words for an online game.',
		tags: ['JavaScript'],
		date: '10/24',
	},
	{
		title: 'Bio-inspired Traveling Salesman Problem',
		link: 'https://github.com/dejesusbg/bioinsipired-tsp',
		tags: ['Python', 'NumPy'],
		date: '10/24',
	},
	{
		title: 'Aura Habit Tracking',
		description:
			'PWA for habit tracking, offering offline support and gamification features to enhance user motivation and progress.',
		link: 'https://auraby.netlify.app',
		imageSrc: 'aura.png',
		tags: ['React', 'JavaScript', 'CSS'],
		featured: true,
		date: '08/24',
	},
	{
		title: 'Educational Tracking Software',
		link: '#',
		tags: ['Spring Boot', 'Java', 'Docker', 'JavaScript', 'CSS'],
		date: '05/24',
	},
	{
		title: 'Bulls & Cows',
		link: 'https://github.com/dejesusbg/bulls-and-cows',
		tags: ['JavaScript', 'CSS', 'HTML'],
		date: '04/24',
	},
	{
		title: 'Monet Palette Library',
		description:
			'Library for customizable Material You colour palettes with full Tailwind V3 support, helping developers create beautiful UIs.',
		link: 'https://github.com/dejesusbg/monet',
		imageSrc: 'monet.png',
		tags: ['TypeScript', 'JavaScript', 'CSS', 'Tailwind'],
		featured: true,
		date: '03/24',
	},
	{
		title: 'Electronic Voting System',
		link: 'https://github.com/dejesusbg/acme-voting',
		tags: ['PHP', 'CSS', 'MySQL', 'Apache'],
		date: '03/24',
	},
	{
		title: 'Recursive Descendant Parser',
		description: 'Parser for arithmetic expressions using postfix and infix notation.',
		link: 'https://github.com/dejesusbg/rdparser',
		tags: ['Java'],
		date: '05/23',
	},
	{
		title: 'Legal Education Platform',
		link: '#',
		tags: ['Flask', 'Python', 'CSS', 'Google Cloud', 'SQLite'],
		date: '04/23',
	},
	{
		title: 'Deterministic Finite Automaton',
		description: 'DFA for numberic expressions and roman numerals.',
		link: 'https://github.com/dejesusbg/dfautomaton',
		tags: ['Java'],
		date: '03/23',
	},
	{
		title: 'Data Structures',
		link: 'https://github.com/dejesusbg/data-structures',
		tags: ['Java', 'C++'],
		date: '09/22',
	},
	{
		title: 'Simple Notes App',
		link: 'https://notes-mui.netlify.app/',
		tags: ['JavaScript', 'CSS', 'HTML'],
		date: '04/22',
	},
	{
		title: 'Material Design 3 Components',
		link: 'https://github.com/dejesusbg/md3',
		tags: ['JavaScript', 'CSS', 'HTML'],
		date: '12/21',
	},
];
