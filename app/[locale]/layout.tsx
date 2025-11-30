import {Geist, Geist_Mono} from 'next/font/google';
import AppProvider from '@/components/providers/app-provider';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/locale/routing';
import {getTranslations} from 'next-intl/server';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

interface MetadataParams {
	params: Promise<{
		locale: string;
	}>;
}

export async function generateMetadata({params}: MetadataParams) {
	const {locale} = await params;

	const t = await getTranslations({locale, namespace: 'Common.Metadata'});

	return {
		title: t('title'),
		description: t('description'),
		openGraph: {
			title: t('title'),
			description: t('description'),
		},
	};
}

interface LayoutProps {
	params: Promise<{locale: string}>;
	children: React.ReactNode;
}

export default async function LocaleLayout({params, children}: LayoutProps) {
	const {locale} = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang={locale}>
			<NextIntlClientProvider locale={locale}>
				<body
					className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen overflow-hidden antialiased`}>
					<AppProvider>{children}</AppProvider>
				</body>
			</NextIntlClientProvider>
		</html>
	);
}
