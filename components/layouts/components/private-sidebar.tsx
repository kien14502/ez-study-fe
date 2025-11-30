import {Button} from '@/components/ui/button';
import {privateRoutes} from '@/lib/constants/routes';
import {cn} from '@/lib/utils';
import {useAuthStore} from '@/stores/auth-store';
import {
	CircleAlert,
	PanelLeftClose,
	PanelRightClose,
	Settings,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import {memo} from 'react';

type Props = {
	collapse: boolean;
	setCollapse: () => void;
};

const PrivateSidebar: React.FC<Props> = memo(({collapse, setCollapse}) => {
	const {user} = useAuthStore();

	return (
		<div
			className={cn(
				'bg-dark-blue-800 fixed left-0 hidden h-screen flex-col gap-6 transition-all duration-300 sm:flex',
				collapse ? 'w-20 px-2 py-4' : 'w-[280px] px-4 py-8',
			)}>
			<div
				className={cn(
					'flex items-center',
					collapse ? 'justify-center' : 'justify-between',
				)}>
				{!collapse && (
					<Image src={'/icons/logo.svg'} width={140} height={48} alt="Logo" />
				)}
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							className="[&_svg]:size-[20px]"
							size={'icon'}
							onClick={setCollapse}>
							{collapse ? <PanelRightClose /> : <PanelLeftClose />}
						</Button>
					</TooltipTrigger>
					<TooltipContent side="right">
						{collapse ? 'Expand sidebar' : 'Collapse sidebar'}
					</TooltipContent>
				</Tooltip>
			</div>

			{/* Navigation Links */}
			<nav className="flex flex-1 flex-col gap-1">
				{privateRoutes.map((route) => (
					<Tooltip key={route.path} delayDuration={0}>
						<TooltipTrigger asChild>
							<Link
								className={cn(
									'hover:bg-dark-blue-700 flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white transition-colors',
									collapse && 'justify-center',
								)}
								href={route.path}>
								<route.icon size={20} className="shrink-0" />
								{!collapse && <span>{route.name}</span>}
							</Link>
						</TooltipTrigger>
						{collapse && <TooltipContent side="right">{route.name}</TooltipContent>}
					</Tooltip>
				))}
			</nav>

			{/* Footer */}
			<div className="flex flex-col gap-1">
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<Link
							className={cn(
								'hover:bg-dark-blue-700 flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white transition-colors',
								collapse && 'justify-center',
							)}
							href={'/setting'}>
							<Settings size={20} className="shrink-0" />
							{!collapse && <span>Setting</span>}
						</Link>
					</TooltipTrigger>
					{collapse && <TooltipContent side="right">Setting</TooltipContent>}
				</Tooltip>

				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<Link
							className={cn(
								'hover:bg-dark-blue-700 flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-white transition-colors',
								collapse && 'justify-center',
							)}
							href={'/support'}>
							<CircleAlert size={20} className="shrink-0" />
							{!collapse && <span>Support</span>}
						</Link>
					</TooltipTrigger>
					{collapse && <TooltipContent side="right">Support</TooltipContent>}
				</Tooltip>

				{/* User Profile */}
				<div
					className={cn(
						'mt-6 flex items-center border-t border-gray-600 pt-6 text-white',
						collapse ? 'flex-col gap-2' : 'gap-3',
					)}>
					<Image
						className="shrink-0 rounded-full"
						width={collapse ? 40 : 48}
						height={collapse ? 40 : 48}
						src={user?.avatarUrl ?? '/icons/avatar.svg'}
						alt={user?.fullName ?? 'User avatar'}
					/>
					{!collapse && (
						<div className="flex flex-col gap-1 overflow-hidden">
							<div className="truncate font-semibold">{user?.fullName}</div>
							<div className="truncate text-sm text-neutral-200 capitalize">
								{user?.role}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
});

PrivateSidebar.displayName = 'PrivateSidebar';

export default PrivateSidebar;
