import PrivateLayout from '@/components/layouts/private-layout';
import AuthStoreProvider from '@/components/providers/auth-store-provider';
import {PropsWithChildren} from 'react';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<AuthStoreProvider>
			<PrivateLayout>{children}</PrivateLayout>
		</AuthStoreProvider>
	);
};

export default Layout;
