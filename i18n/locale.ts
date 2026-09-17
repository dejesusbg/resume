import type { LocalizedProject } from '@/lib/data';

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export const emojiLocale: Record<string, string> = { EN: '🇬🇧', ES: '🇨🇴' };
export const languageLocale: Record<string, string> = { EN: 'English', ES: 'Español' };

export interface Messages {
	about: {
		name: string;
		greeting: string;
		title: string;
		description: string;
		cta: string;
		scrollCue: string;
		manifest: string;
	};
	layout: {
		book: string;
		archive: string;
		projects: string;
		nav: {
			work: string;
			projects: string;
			about: string;
			contact: string;
		};
		table: string[];
		source: string;
		demo: string;
		credits: string;
	};
	projects: LocalizedProject[];
}
