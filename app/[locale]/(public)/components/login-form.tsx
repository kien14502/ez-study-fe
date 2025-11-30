'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form} from '@/components/ui/form';
import InputForm from '@/components/form/input-form';
import {loginSchema, LoginSchema} from '@/lib/schemas/auth-schema';
import {useAuthStore} from '@/stores/auth-store';
import {Button} from '@/components/ui/button';
import {Lock, User} from 'lucide-react';
import {useRouter} from 'next/navigation';
import CheckboxForm from '@/components/form/checkbox-form';
import Link from 'next/link';

const LoginForm = () => {
	const router = useRouter();
	const {login} = useAuthStore();
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {password: '', email: ''},
	});

	const onSubmit = async (data: LoginSchema) => {
		try {
			const {rememberMe, ...payload} = data;
			await login(payload);
			router.push('/');
		} catch (error) {
			return error;
		}
	};

	return (
		<Form {...form}>
			<form
				className="flex flex-col gap-4 px-5 sm:px-0"
				onSubmit={form.handleSubmit(onSubmit)}>
				<InputForm
					label="Account"
					control={form.control}
					name={'email'}
					prefix={<User size={20} />}
				/>
				<InputForm
					type="password"
					label="Password"
					control={form.control}
					name={'password'}
					prefix={<Lock size={20} />}
				/>
				<div className="flex items-center justify-between">
					<CheckboxForm
						control={form.control}
						name={'rememberMe'}
						label={'Remember me'}
					/>
					<Link className="underline" href={'/forgot-password'}>
						Quên mật khẩu?
					</Link>
				</div>
				<Button type="submit">Login</Button>
				<span className="text-center">
					Bạn chưa có tài khoản?{' '}
					<Link
						className="font-semibold text-yellow-500 hover:underline"
						href={'/register'}>
						Đăng ký ngay
					</Link>
				</span>
			</form>
		</Form>
	);
};
export default LoginForm;
