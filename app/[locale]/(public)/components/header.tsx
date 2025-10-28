'use client';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next/navigation';

const Header = () => {
	const pathname = usePathname();
	const router = useRouter();
	const isLoginPage = pathname === '/login';

	const onClick = () => router.push(isLoginPage ? '/register' : '/login');

	return (
		<header className="bg-dark-blue-600 fixed flex h-14 w-full items-center justify-between px-[100px] opacity-95">
			<Image width={140} height={48} src={'/icons/logo.svg'} alt={'Logo'} />
			<Button onClick={onClick} className="border shadow-sm" variant={'default'}>
				{isLoginPage ? 'Sign Up' : 'Login'}
			</Button>
		</header>
	);
};
export default Header;
