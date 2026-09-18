export interface ProjectData {
	link?: string;
	imageSrc?: string;
	tags: string[];
	featured?: boolean;
	date: string;
}

export interface LocalizedProject {
	title: string;
	description: string;
	stat?: string;
}

export interface Project extends ProjectData, LocalizedProject { }

export const projects: ProjectData[] = [
	{ link: 'https://hdl.handle.net/20.500.14923/25334', imageSrc: 'logo/pages.webp', tags: ['Figma', 'Research', 'UX', 'Accessibility', 'React', 'TypeScript', 'Tailwind'], featured: true, date: '03/26' },
	{ link: 'https://github.com/dejesusbg/ecobot', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Gemini API'], date: '10/25' },
	{ link: 'https://github.com/dejesusbg/shorts', tags: ['Python', 'Docker', 'FFmpeg', 'Gemini API'], date: '09/25' },
	{ link: 'https://github.com/dejesusbg/truenavi', imageSrc: 'logo/maps.webp', tags: ['React Native', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'Node.js', 'Expo', 'Docker', 'Express'], featured: true, date: '03/25' },
	{ link: 'https://github.com/dejesusbg/ecommerce', tags: ['Spring Boot', 'Java', 'Docker', 'Keycloak', 'Netflix Eureka', 'Redis', 'PostgreSQL', 'MongoDB', 'Grafana', 'Prometheus'], date: '02/25' },
	{ link: 'https://rdingnova.com.co/', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Netlify', 'Decap CMS'], date: '02/25' },
	{ link: 'https://github.com/dejesusbg/mangifera', imageSrc: 'logo/photos.webp', tags: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'], featured: true, date: '10/24' },
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
