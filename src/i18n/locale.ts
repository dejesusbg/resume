import { ProjectProps } from '@/components/ui/Project';

export const locales = ['en', 'es', 'fr', 'fi'];
export const defaultLocale = 'en';

export const emojiLocale: Record<string, string> = {
	EN: '🇬🇧',
	ES: '🇨🇴',
	FR: '🇫🇷',
	FI: '🇫🇮',
};

export const languageLocale: Record<string, string> = {
	EN: 'English',
	ES: 'Español',
	FR: 'Français',
	FI: 'Suomi',
};

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
