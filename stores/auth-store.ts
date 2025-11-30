'use client';
import {removeItem, setItem} from '@/lib/app-storage';
import {LoginSchema, User} from '@/lib/schemas/auth-schema';
import {authService} from '@/services/auth-service';
import {create} from 'zustand';

interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	token: string | null;
	login: (payload: LoginSchema) => void;
	logout: () => void;
	initialize: (user: User | null, token: string | null) => void;
	getMe: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	user: null,
	token: null,
	login: async (payload) => {
		const {accessToken} = await authService.login(payload);
		setItem('ACCESS_TOKEN', accessToken);
		return set({
			isAuthenticated: true,
		});
	},

	logout: async () => {
		await authService.logout();
		removeItem('ACCESS_TOKEN');
		return set({
			isAuthenticated: false,
			user: null,
			token: null,
		});
	},

	initialize: (user, token) =>
		set({
			isAuthenticated: !!user && !!token,
			user,
			token,
		}),
	getMe: async () => {
		try {
			const res = await authService.getMe();
			set({user: res, isAuthenticated: true});
		} catch (error) {
			return error;
		}
	},
}));
