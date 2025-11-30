import {useAuthStore} from '@/stores/auth-store';
import Image from 'next/image';

const GreetingCard = () => {
	const {user} = useAuthStore();
	return (
		<div className="shadow-main flex h-40 w-full items-end justify-between rounded-[20px] border bg-white">
			<Image width={174} height={220} src={'/images/space-1.png'} alt="" />
			<div className="flex h-full flex-1 flex-col items-center justify-center gap-6">
				<p className="text-[36px] font-semibold tracking-[-0.02em] text-yellow-500">
					Xin Chào, {user?.fullName}!
				</p>
				<span className="text-2xl font-medium">
					Cùng khám phá các hành tinh thôi nào
				</span>
			</div>
			<Image width={185} height={160} src={'/images/space-2.png'} alt="" />
		</div>
	);
};
export default GreetingCard;
