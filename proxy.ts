import { defaultLocale, locales } from '@/i18n/locale';
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
	const cookieLocale = request.cookies.get('locale')?.value;
	let locale = cookieLocale;

	if (!locale) {
		const acceptLanguage = request.headers.get('accept-language') || '';
		const preferredLocale = acceptLanguage
			.split(',')
			.map((lang) => lang.split(';')[0].split('-')[0])
			.find((lang) => locales.includes(lang));

		locale = preferredLocale || defaultLocale;
	}

	if (!locales.includes(locale)) {
		locale = defaultLocale;
	}

	const response = NextResponse.next();
	if (cookieLocale !== locale) {
		response.cookies.set('locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
	}

	return response;
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };
