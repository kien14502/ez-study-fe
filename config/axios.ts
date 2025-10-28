import axios, {AxiosResponse} from 'axios';
import {toast} from 'sonner';
import {API_URL} from './env';
import {getItem, removeItem, setItem} from '@/lib/app-storage';
import {authService} from '@/services/auth-service';
import {PUBLIC_ROUTES} from '@/lib/constants/common';

const NO_RETRY_HEADER = 'x-no-retry';

const axiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: API_URL + '/',
	responseType: 'json',
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getItem<string>('ACCESS_TOKEN');
		if (token) {
			config.headers = config.headers || {};
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		if (!response?.data) {
			return {
				success: true,
			};
		}

		if (typeof response?.data === 'string') {
			try {
				response.data = JSON.parse(response.data);
			} catch (e) {
				console.error('Failed to parse response data', e);
			}
		}

		response.data = {
			...response?.data,
			success: true,
		};

		return response.data;
	},
	async (error) => {
		const isPublicRoute = PUBLIC_ROUTES.some((route) =>
			error.config.url?.includes(route),
		);

		if (isPublicRoute) {
			toast.error(
				error.response?.data?.message || 'Server error please try again',
			);
			return Promise.reject(error.response?.data || error);
		}

		switch (error.response?.status) {
			case 403:
				toast.error(
					error.response?.data?.message || 'Server error please try again',
				);
				return Promise.reject(error.response?.data || error);

			case 401: {
				const originalRequest = error.config;
				if (!originalRequest._retry && !originalRequest.headers[NO_RETRY_HEADER]) {
					originalRequest._retry = true;
					try {
						const access_token = await authService.refreshToken();
						if (access_token) {
							setItem('ACCESS_TOKEN', access_token);
							originalRequest.headers.Authorization = `Bearer ${access_token}`;
							return axiosInstance(originalRequest);
						} else {
							throw new Error('Failed to refresh token');
						}
					} catch (error) {
						removeItem('ACCESS_TOKEN');
						// window.location.replace('/login');
						return Promise.reject(error);
					}
				} else {
					removeItem('ACCESS_TOKEN');
					window.location.replace('/login');
				}
				break;
			}

			default:
				toast.error(
					error.response?.data?.message || 'Server error please try again',
				);
		}

		return Promise.reject(error.response?.data || error);
	},
);

export default axiosInstance;
