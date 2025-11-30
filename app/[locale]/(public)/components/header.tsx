'use client';
import {Button} from '@/components/ui/button';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next/navigation';
const HeaderCollapse = dynamic(() => import('./header-collapse'), {
	loading: () => <div className="h-14 w-full" />,
	ssr: false,
});

const Header = () => {
	const pathname = usePathname();
	const router = useRouter();
	const isLoginPage = pathname === '/login';

	const onClick = () => router.push(isLoginPage ? '/register' : '/login');

	return (
		<header className="bg-header fixed flex h-14 w-full items-center justify-between px-5 opacity-95 sm:px-[100px]">
			<Image width={140} height={48} src={'/icons/logo.svg'} alt={'Logo'} />
			<Button
				onClick={onClick}
				className="hidden border shadow-sm sm:block"
				variant={'default'}>
				{isLoginPage ? 'Sign Up' : 'Login'}
			</Button>
			<HeaderCollapse />
		</header>
	);
};
export default Header;
