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
		archive: string;
		projects: string;
		table: string[];
		source: string;
		demo: string;
		credits: string;
	};
	projects: LocalizedProject[];
}
