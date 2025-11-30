'use client';

import {ReactNode} from 'react';
import PrivateSidebar from './components/private-sidebar';
import {cn} from '@/lib/utils';
import useCollapseSidebar from '@/hooks/use-collapse-sidebar';
import PrivateHeader from './components/private-header';
import PrivateFooter from './components/private-footer';
import {Button} from '../ui/button';
import {Bell} from 'lucide-react';

type Props = {
	children: ReactNode;
};

const PrivateLayout: React.FC<Props> = ({children}) => {
	const {collapse, toggle} = useCollapseSidebar();

	return (
		<div className="bg-dark-blue-600 h-screen w-screen overflow-hidden">
			<PrivateSidebar collapse={collapse} setCollapse={toggle} />
			<PrivateHeader />
			<div
				className={cn(
					'bg-dark-blue-50 min-h-screen overflow-x-hidden rounded-t-[20px] transition-all duration-300 sm:rounded-t-none sm:rounded-l-[40px] sm:p-8',
					collapse ? 'sm:ml-20' : 'sm:ml-[280px]',
				)}>
				<div className="mb-6 flex justify-end">
					<Button size={'icon-lg'} className="shadow-main rounded-full">
						<Bell />
					</Button>
				</div>
				{children}
			</div>
			<PrivateFooter />
		</div>
	);
};
export default PrivateLayout;
