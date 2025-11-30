import RegisterLayout from '@/components/layouts/register-layout';
import RegisterForm from '../components/register-form';

const RegisterPage = () => {
	return (
		<RegisterLayout className="pt-14 sm:px-[100px] sm:py-[124px]">
			<div className="w-full sm:max-w-[376px]">
				<div className="flex h-[332px] items-end bg-[url(/images/register-bg.png)] bg-cover bg-no-repeat px-5 pb-20 text-lg text-[36px] font-semibold sm:hidden">
					<span>Register</span>
				</div>
				<div className="mb-12 hidden text-center text-[48px] font-bold sm:block">
					Register
				</div>
				<RegisterForm />
			</div>
		</RegisterLayout>
	);
};

export default RegisterPage;
