import { ProjectProps } from '@/components/ui/Project';

export const locales = ['en', 'es', 'fr'];
export const defaultLocale = 'en';

export interface Messages {
	about: {
		name: string;
		title: string;
		description: string;
		manifest: string;
	};
	layout: {
		book: string;
		archive: string;
		projects: string;
		table: string[];
		source: string;
		demo: string;
		credits: string;
	};
	data: {
		projects: ProjectProps[];
	};
}
