export interface LoginResponse {
	accessToken: string;
}

export interface Account {
	_id: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	lastLoginAt: string;
}

export interface User {
	_id: string;
	accountId: string;
	fullName: string;
	avatarUrl: string | null;
	dateOfBirth: string | null;
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	account: Account;
}
