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

export interface MetaProps {
	title: string;
	description: string;
	short: string;
	jobTitle: string;
	alt: string;
	archiveTitle: string;
	archiveDescription: string;
	keywords: string[];
}

export interface MessagesProps {
	meta: MetaProps;
	hero: {
		alt: string;
		texture: string;
		model: string;
		cta: string;
		language: string;
		code: string;
	};
	about: {
		body: string;
		credentials: CredentialProps[];
		resume: string;
		cta: string;
	};
	featured: {
		body: string;
		cta: string;
		contact: string;
	};
	footer: {
		back: string;
		title: string;
		body: string;
		scroll: string;
	};
	archive: {
		columns: string[];
		source: string;
		demo: string;
	};
	projects: ProjectProps[];
}
