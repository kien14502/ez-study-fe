'use client';

import InputForm from '@/components/form/input-form';
import {registerSchema, RegisterSchema} from '@/lib/schemas/auth-schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {User, Lock} from 'lucide-react';
import {useForm} from 'react-hook-form';
import {Form} from '@/components/ui/form';
import {authService} from '@/services/auth-service';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';

const RegisterForm = () => {
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			password: '',
			email: '',
			confirmPassword: '',
			role: 'student',
			fullName: '',
		},
	});

	const onSubmit = async (data: RegisterSchema) => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const {confirmPassword, ...props} = data;
			const res = await authService.register(props);
			toast.success(res.message);
		} catch (error) {
			return error;
		}
	};

	return (
		<div className="w-full max-w-[376px]">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<h1 className="text-lg font-semibold">Register Form</h1>
					<InputForm
						label="Full Name"
						control={form.control}
						name={'fullName'}
						prefix={<User size={20} />}
					/>
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
					<InputForm
						type="password"
						label="Confirm Password"
						control={form.control}
						name={'confirmPassword'}
						prefix={<Lock size={20} />}
					/>
					<Button type="submit">Register</Button>
				</form>
			</Form>
		</div>
	);
};
export default RegisterForm;
