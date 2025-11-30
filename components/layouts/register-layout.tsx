import {cn} from '@/lib/utils';
import {ChildrenProps} from '@/types/common';

const RegisterLayout: React.FC<ChildrenProps & {className?: string}> = ({
	children,
	className = '',
}) => (
	<div
		className={cn(
			'h-screen w-screen bg-contain bg-no-repeat sm:bg-[url(/images/register-bg.png)] sm:bg-cover sm:bg-center',
			className,
		)}>
		{children}
	</div>
);
export default RegisterLayout;
