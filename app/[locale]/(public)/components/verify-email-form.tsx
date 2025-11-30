'use client';

import {Button} from '@/components/ui/button';
import {authService} from '@/services/auth-service';
import {useQuery} from '@tanstack/react-query';
import {Loader, TriangleAlert} from 'lucide-react';
import Image from 'next/image';

type Props = {
	token: string;
};

const VerifyEmailForm = ({token}: Props) => {
	const {data, isLoading, isError, error, isSuccess} = useQuery({
		queryKey: ['verifyEmail', token],
		queryFn: () => authService.verifyEmail(token),
		enabled: !!token,
		retry: false,
	});

	if (isLoading) {
		return <Loader className="animate-spin" />;
	}

	if (error)
		return (
			<div className="flex flex-col gap-4">
				<Image width={320} height={320} src={'/images/bee-1.png'} alt="" />
				<div className="text-destructive flex items-center gap-2">
					<TriangleAlert size={24} />
					<span>{error.message}</span>
				</div>
				<Button className="">Resend Verify</Button>
			</div>
		);

	return <div>{token}</div>;
};
export default VerifyEmailForm;
