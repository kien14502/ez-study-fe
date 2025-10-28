'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form} from '@/components/ui/form';
import InputForm from '@/components/form/input-form';
import WrapperLayout from './wrapper-layout';
import {loginSchema, LoginSchema} from '@/lib/schemas/auth-schema';
import {useAuthStore} from '@/stores/auth-store';
import {Button} from '@/components/ui/button';
import {Lock, User} from 'lucide-react';
import {useRouter} from 'next/navigation';

const LoginForm = () => {
	const router = useRouter();
	const {login} = useAuthStore();
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {password: '', email: ''},
	});

	const onSubmit = async (data: LoginSchema) => {
		try {
			await login(data);
			router.push('/');
		} catch (error) {
			return error;
		}
	};

	return (
		<WrapperLayout>
			<Form {...form}>
				<form
					className="flex flex-col gap-4"
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
					<Button type="submit">Login</Button>
				</form>
			</Form>
		</WrapperLayout>
	);
};
export default LoginForm;
