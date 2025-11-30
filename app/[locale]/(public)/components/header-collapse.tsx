import {Button} from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {landingRoutes} from '@/lib/constants/routes';
import Link from 'next/link';
import {useIsMobile} from '@/hooks/use-mobile';

const HeaderCollapse = () => {
	const [open, setOpen] = useState<boolean>(false);
	const isMobile = useIsMobile();
	const onClose = () => setOpen(false);

	useEffect(() => {
		if (!isMobile) {
			setOpen(false);
		}
	}, [isMobile]);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="sm:hidden" asChild>
				<Button className="hover:bg-inherit" variant="ghost" size={'icon'}>
					<Menu color="white" size={20} />
				</Button>
			</SheetTrigger>
			<SheetContent showIconClose={false} side="top" className="gap-0">
				<SheetHeader className="bg-header">
					<SheetTitle className="flex items-center justify-between">
						<Image src={'/icons/logo.svg'} height={32} width={88} alt={''} />
						<Button onClick={onClose} variant={'ghost'}>
							<X className="hover:bg-black" size={20} />
						</Button>
					</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex flex-col py-3">
					{landingRoutes.map((route) => (
						<Link
							className="px-4 py-3 text-sm font-medium hover:bg-blue-50"
							key={route.path}
							href={route.path}>
							{route.name}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-4 border-t p-4">
					<Link
						className="bg-dark-blue-700 shadow-main rounded px-3 py-2.5 text-center text-sm font-medium text-white"
						href={'/login'}>
						Login
					</Link>
					<Link
						className="border-dark-blue-700 shadow-main rounded border px-3 py-2.5 text-center text-sm font-medium"
						href={'/register'}>
						Sign Up
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};
export default HeaderCollapse;
