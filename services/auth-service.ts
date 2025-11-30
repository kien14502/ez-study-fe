import axiosInstance from '@/config/axios';
import {AUTH_ENDPOINTS} from '@/lib/constants/endpoint';
import {LoginSchema, RegisterSchema} from '@/lib/schemas/auth-schema';
import {LoginResponse} from '@/types/response';
import {Mutex} from 'async-mutex';

const mutex = new Mutex();

const getMe = async () => {
	const res = await axiosInstance.get(AUTH_ENDPOINTS.GET_USER);
	return res.data;
};

const login = async (payload: LoginSchema): Promise<LoginResponse> => {
	const res = await axiosInstance.post(AUTH_ENDPOINTS.LOGIN, {
		username: payload.email,
		password: payload.password,
	});
	return res.data;
};

const logout = async () => {
	const res = await axiosInstance.post(AUTH_ENDPOINTS.LOGOUT);
	return res.data;
};

const refreshToken = async () => {
	return await mutex.runExclusive(async () => {
		const res = await axiosInstance.get(AUTH_ENDPOINTS.REFRESH_TOKEN);
		if (res && res.data) return res.data.accessToken;
		else return null;
	});
};

const register = async (
	payload: Omit<RegisterSchema, 'term' | 'confirmPassword'>,
) => {
	const res = await axiosInstance.post(AUTH_ENDPOINTS.REGISTER, payload);
	return res.data;
};

const forgotPassword = async (payload: {email: unknown}) => {
	const res = await axiosInstance.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, payload);
	return res.data;
};

const verifyForgotPassword = async (token: string) => {
	const res = await axiosInstance.get(AUTH_ENDPOINTS.VERIFY_FORGOT_PASSWORD, {
		params: {
			token,
		},
	});
	return res.data;
};

const verifyEmail = async (token: string) => {
	const res = await axiosInstance.get(AUTH_ENDPOINTS.VERIFY_EMAIL, {
		params: {
			token,
		},
	});
	return res.data;
};

const resetPassword = async (payload: {token: string; password: string}) => {
	const res = await axiosInstance.post(
		AUTH_ENDPOINTS.RESET_PASSWORD,
		{},
		{
			params: {
				token: payload.token,
				password: payload.password,
			},
		},
	);
	return res.data;
};

export const authService = {
	getMe,
	login,
	logout,
	register,
	refreshToken,
	forgotPassword,
	verifyForgotPassword,
	resetPassword,
	verifyEmail,
};
