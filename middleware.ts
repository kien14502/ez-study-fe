import {NextRequest, NextResponse} from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './locale/routing';
import {PUBLIC_ROUTES} from './lib/constants/common';

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get('refreshToken')?.value;
	const pathname = request.nextUrl.pathname;
	if (PUBLIC_ROUTES.includes(pathname) && refreshToken) {
		const url = request.nextUrl.clone();
		url.pathname = '/';
		return NextResponse.redirect(url);
	}
	if (!PUBLIC_ROUTES.includes(pathname) && !refreshToken) {
		const url = request.nextUrl.clone();
		url.pathname = '/login';
		return NextResponse.redirect(url);
	}

	return intlMiddleware(request);
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
