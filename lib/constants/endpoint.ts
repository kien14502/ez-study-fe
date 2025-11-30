export enum AUTH_ENDPOINTS {
	LOGIN = `/auth/login`,
	REGISTER = `/auth/register`,
	GET_USER = `/auth/profile`,
	LOGOUT = `/auth/logout`,
	REFRESH_TOKEN = `/auth/refresh`,
	FORGOT_PASSWORD = `/auth/forgot-password`,
	RESET_PASSWORD = `/auth/reset-password`,
	VERIFY_EMAIL = `/auth/verify-email`,
	RESEND_OTP = `/auth/resend-email`,
	VERIFY_FORGOT_PASSWORD = `/auth/verify-forgot-password`,
}
