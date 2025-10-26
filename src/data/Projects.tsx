import { features } from 'process';
import { IconType } from 'react-icons';
import { FaStar, FaGoogle } from 'react-icons/fa';

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
	ongoing?: boolean;
}

export const projects = [
	{
		title: 'Blind-First Navigation App',
		description:
			'Accessible mobile app with real-time voice feedback, designed to assist visually impaired users in navigating urban environments.',
		link: 'https://github.com/dejesusbg/truenavi',
		imageSrc: 'maps_logo.webp',
		tags: [
			'React Native',
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
			'MongoDB',
			'Node.js',
			'Expo',
			'Docker',
			'Express',
		],
		featured: true,
		date: '03/25',
	},
	{
		title: 'Microservices Store',
		description:
			'System built with microservices architecture, featuring order, inventory, payment management and processing, with API gateway caching and security.',
  imageSrc: 'health_logo.webp',
		link: 'https://github.com/dejesusbg/ecommerce',
		tags: [
			'Spring Boot',
			'Java',
			'Docker',
			'Keycloak',
			'Netflix Eureka',
			'Redis',
			'PostgreSQL',
			'MongoDB',
			'Grafana',
			'Prometheus',
		],
  featured: true
		date: '02/25',
	},
	{
		title: 'Engineering Corporate Website',
		description:
			'Fast, modern, and content-managed website for INGNOVA SAS, improving its online presence.',
		link: 'https://rdingnova.com.co/',
		imageSrc: 'pages_logo.webp',
		tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Netlify'],
  stats: { icon: FaGoogle, value: 'Top results' },
		featured: true,
		date: '02/25',
	},
	{
		title: 'AI-Powered Mango Classifier',
		description:
			'Machine learning models for automated mango ripeness classification, helping optimize agricultural processes.',
		link: 'https://github.com/dejesusbg/mangifera',
		imageSrc: 'photos_logo.webp',
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
		imageSrc: 'reminders_logo.webp',
		tags: ['React', 'JavaScript', 'CSS'],
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
		imageSrc: 'freeform_logo.webp',
		tags: ['TypeScript', 'JavaScript', 'CSS', 'Tailwind'],
		featured: true,
		date: '03/24',
	},
	{
		title: 'Electronic Voting System',
		description:
			'School election system with secure authentication and real-time results tallying.',
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
