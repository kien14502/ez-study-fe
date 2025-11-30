import LoginLayout from '@/components/layouts/login-layout';
import LoginForm from '../components/login-form';
import WrapperLayout from '../components/wrapper-layout';

const LoginPage = () => (
	<LoginLayout className="flex sm:items-center sm:justify-center">
		<WrapperLayout>
			<h1 className="hidden text-center text-[48px] leading-[60px] font-bold tracking-[-2%] sm:block">
				Đăng nhập
			</h1>
			<div className="mt-[56px] flex h-[250px] items-center justify-center bg-[url(/images/login-bg.png)] bg-cover bg-no-repeat text-lg text-[36px] font-semibold sm:hidden">
				Đăng nhập
			</div>
			<LoginForm />
		</WrapperLayout>
	</LoginLayout>
);

export default LoginPage;
