import VerifyEmailForm from '../components/verify-email-form';

type Props = {
	searchParams: Promise<{token: string}>;
};

const VerifyEmail = async ({searchParams}: Props) => {
	const {token} = await searchParams;

	return (
		<div className="flex h-full w-full items-center justify-center">
			<VerifyEmailForm token={token} />
		</div>
	);
};

export default VerifyEmail;
