import z from 'zod';

export const authSchema = z.object({
	email: z.string().email(),
	fullName: z.string().min(1, 'Họ tên không được rỗng'),
	role: z.string(),
	isActive: z.boolean().default(true),
	avatar: z.string().url().optional(),
	provider: z.string(),
});

export type AuthSchema = z.infer<typeof authSchema>;

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({}).extend({
	email: z.string().email(),
	fullName: z.string().min(1, 'Họ tên không được rỗng'),
	password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
	confirmPassword: z
		.string()
		.min(6, 'Mật khẩu xác nhận phải có ít nhất 6 ký tự'),
	role: z.enum(['student', 'teacher']),
});
export type RegisterSchema = z.infer<typeof registerSchema>;
