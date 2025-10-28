import {ChildrenProps} from '@/types/common';

const WrapperLayout: React.FC<ChildrenProps> = ({children}) => (
	<div className="flex w-full max-w-[376px] flex-col gap-12">{children}</div>
);
export default WrapperLayout;
