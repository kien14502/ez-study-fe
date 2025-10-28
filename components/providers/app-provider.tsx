'use client';

import {PropsWithChildren} from 'react';
import {CounterStoreProvider} from './counter-store-provider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from '@/components/ui/sonner';

const queryClient = new QueryClient();

const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CounterStoreProvider>
				{children}
				<Toaster />
			</CounterStoreProvider>
		</QueryClientProvider>
	);
};

export default AppProvider;
