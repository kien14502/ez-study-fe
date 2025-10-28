import RegisterLayout from '@/components/layouts/register-layout';
import RegisterForm from '../components/register-form';

const RegisterPage = () => {
	return (
		<RegisterLayout className="px-[100px] py-[124px]">
			<RegisterForm />
		</RegisterLayout>
	);
};

export default RegisterPage;
