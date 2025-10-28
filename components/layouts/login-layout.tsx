import {cn} from '@/lib/utils';
import {ChildrenProps} from '@/types/common';

const LoginLayout: React.FC<ChildrenProps & {className?: string}> = ({
	children,
	className = '',
}) => (
	<div
		className={cn(
			'h-screen w-screen bg-[url(/images/login-bg.png)] bg-contain bg-no-repeat sm:bg-cover sm:bg-center',
			className,
		)}>
		{children}
	</div>
);
export default LoginLayout;
