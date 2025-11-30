import z from 'zod';

export const AccountSchema = z.object({
	_id: z.string(),
	email: z.string().email(),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
	__v: z.number(),
	lastLoginAt: z.string().datetime(),
});

export const UserSchema = z.object({
	_id: z.string(),
	accountId: z.string(),
	fullName: z.string(),
	avatarUrl: z.string().nullable(),
	dateOfBirth: z.string().datetime().nullable(),
	role: z.enum(['student', 'teacher', 'admin']),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
	__v: z.number(),
	account: AccountSchema,
});

// Export types
export type Account = z.infer<typeof AccountSchema>;
export type User = z.infer<typeof UserSchema>;

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	rememberMe: z.boolean().optional(),
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
