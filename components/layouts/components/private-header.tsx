'use client';

import {Button} from '@/components/ui/button';
import {useIsMobile} from '@/hooks/use-mobile';
import {Bell, Menu} from 'lucide-react';

const PrivateHeader = () => {
	const isMobile = useIsMobile();

	return (
		<div className="flex h-[52px] items-center justify-between px-4 sm:hidden">
			<Button size={'icon'}>
				<Menu size={24} />
			</Button>
			<Button size={'icon'}>
				<Bell size={24} />
			</Button>
		</div>
	);
};
export default PrivateHeader;
