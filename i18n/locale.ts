export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export interface CredentialProps {
	title: string;
	institution: string;
	logo: string;
}

export interface ProjectProps {
	title: string;
	description: string;
	stat?: string;
	link?: string;
	imageSrc?: string;
	tags: string[];
	featured?: boolean;
	date: string;
}

export interface CertificationProps {
	title: string;
	description: string;
	issuer: string;
	tags: string[];
	link: string;
	date: string;
}

export interface MetaProps {
	title: string;
	description: string;
	short: string;
	jobTitle: string;
	alt: string;
	archiveTitle: string;
	archiveDescription: string;
	certificationsTitle: string;
	certificationsDescription: string;
	keywords: string[];
	thumbnail: string;
}

export interface MessagesProps {
	meta: MetaProps;
	hero: {
		skip: string;
		alt: string;
		texture: string;
		model: string;
		cta: string;
		language: string;
		code: string;
	};
	about: {
		heading: string;
		body: string;
		credentials: CredentialProps[];
		resume: string;
		cta: string;
	};
	featured: {
		heading: string;
		body: string;
		cta: string;
		contact: string;
	};
	footer: {
		heading: string;
		body: string;
		back: string;
		scroll: string;
	};
	archive: {
		heading: string;
		columns: string[];
		source: string;
		demo: string;
	};
	certificationsPage: {
		heading: string;
		columns: string[];
		verify: string;
	};
	projects: ProjectProps[];
	certifications: CertificationProps[];
}
