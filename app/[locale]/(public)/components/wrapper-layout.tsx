import {ChildrenProps} from '@/types/common';

const WrapperLayout: React.FC<ChildrenProps> = ({children}) => (
	<div className="flex w-full flex-col sm:max-w-[376px] sm:gap-[60px]">
		{children}
	</div>
);
export default WrapperLayout;
