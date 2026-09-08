export interface ProjectData {
	slug?: string;
	link?: string;
	imageSrc?: string;
	images?: string[];
	tags: string[];
	featured?: boolean;
	date: string;
}

export interface LocalizedProject {
	title: string;
	description: string;
	stat?: string;
}

export interface Project extends ProjectData, LocalizedProject {}

export const projects: ProjectData[] = [
	{ slug: 'wade', link: 'https://getwade.netlify.app/', imageSrc: 'logo/pages.webp', images: [], tags: ['Rust', 'TypeScript', 'Docker', 'Python', 'FastAPI', 'Neo4j', 'Tauri', 'React', 'Vite', 'Ollama CLI', 'Qwen AI'], featured: true, date: '05/26' },
	{ slug: 'unimag-ux', imageSrc: 'logo/photos.webp', images: ['01.png', '02.png', '03.png', '04.png', '05.png'], tags: ['Figma', 'Research', 'UX', 'Accessibility', 'React', 'TypeScript', 'Tailwind', 'Vite'], featured: true, date: '03/26' },
	{ link: 'https://github.com/dejesusbg/ecobot', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Gemini API'], date: '10/25' },
	{ link: 'https://github.com/dejesusbg/shorts', tags: ['Python', 'Docker', 'FFmpeg', 'Gemini API'], date: '09/25' },
	{ slug: 'truenavi', link: 'https://github.com/dejesusbg/truenavi', imageSrc: 'logo/maps.webp', images: ['01.jpg', '02.jpg', '03.png', '04.png', '05.png', '06.png'], tags: ['React Native', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'Node.js', 'Expo', 'Docker', 'Express'], featured: true, date: '03/25' },
	{ slug: 'ecommerce', link: 'https://github.com/dejesusbg/ecommerce', tags: ['Spring Boot', 'Java', 'Docker', 'Keycloak', 'Netflix Eureka', 'Redis', 'PostgreSQL', 'MongoDB', 'Grafana', 'Prometheus'], date: '02/25' },
	{ link: 'https://rdingnova.com.co/', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Netlify', 'Decap CMS'], date: '02/25' },
	{ slug: 'mangifera', link: 'https://github.com/dejesusbg/mangifera', tags: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'], date: '10/24' },
	{ link: 'https://github.com/dejesusbg/wordflow-bot', tags: ['JavaScript'], date: '10/24' },
	{ link: 'https://github.com/dejesusbg/bioinsipired-tsp', tags: ['Python', 'NumPy'], date: '10/24' },
	{ link: 'https://auraby.netlify.app', tags: ['React', 'JavaScript', 'CSS'], date: '08/24' },
	{ tags: ['Spring Boot', 'Java', 'Docker', 'JavaScript', 'CSS', 'HTML'], date: '05/24' },
	{ link: 'https://github.com/dejesusbg/bulls-and-cows', tags: ['JavaScript', 'CSS', 'HTML', 'Material Design 3'], date: '04/24' },
	{ link: 'https://github.com/dejesusbg/monet', tags: ['TypeScript', 'JavaScript', 'CSS', 'Tailwind'], date: '03/24' },
	{ link: 'https://github.com/dejesusbg/acme-voting', tags: ['PHP', 'CSS', 'MySQL', 'Apache'], date: '03/24' },
	{ link: 'https://github.com/dejesusbg/rdparser', tags: ['Java'], date: '05/23' },
	{ tags: ['Flask', 'Python', 'CSS', 'Google Cloud', 'SQLite'], date: '04/23' },
	{ link: 'https://github.com/dejesusbg/dfautomaton', tags: ['Java'], date: '03/23' },
	{ link: 'https://github.com/dejesusbg/data-structures', tags: ['Java', 'C++'], date: '09/22' },
	{ link: 'https://notes-mui.netlify.app/', tags: ['JavaScript', 'CSS', 'HTML', 'Material Design 3'], date: '04/22' },
	{ link: 'https://github.com/dejesusbg/md3', tags: ['JavaScript', 'CSS', 'HTML', 'Material Design 3'], date: '12/21' },
];

export const mergeProjects = (localizedProjects: LocalizedProject[]): Project[] =>
	projects.map((project, index) => ({ ...project, ...localizedProjects[index] }));
