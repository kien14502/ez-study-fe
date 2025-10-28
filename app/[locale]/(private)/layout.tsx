import AuthStoreProvider from '@/components/providers/auth-store-provider';
import {PropsWithChildren} from 'react';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
	return <AuthStoreProvider>{children}</AuthStoreProvider>;
};

export default Layout;
