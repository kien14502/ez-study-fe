'use client';

import {useAuthStore} from '@/stores/auth-store';
import {PropsWithChildren, useEffect} from 'react';

const AuthStoreProvider: React.FC<PropsWithChildren> = ({children}) => {
	const {getMe, isAuthenticated} = useAuthStore();

	useEffect(() => {
		if (!isAuthenticated) {
			getMe();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return <>{children}</>;
};

export default AuthStoreProvider;
