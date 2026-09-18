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

export interface MessagesProps {
	hero: {
		texture: string;
		model: string;
		cta: string;
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
	};
	footer: {
		back: string;
		title: string;
		body: string;
		language: string;
		code: string;
	};
	archive: {
		columns: string[];
		source: string;
		demo: string;
	};
	projects: ProjectProps[];
}
