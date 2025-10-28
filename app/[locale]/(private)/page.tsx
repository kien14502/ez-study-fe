'use client';

import {useCounterStore} from '@/components/providers/counter-store-provider';
import {Button} from '@/components/ui/button';
import {useAuthStore} from '@/stores/auth-store';

export default function Home() {
	const {count, incrementCount, decrementCount} = useCounterStore(
		(state) => state,
	);
	const {logout} = useAuthStore();

	return (
		<div>
			Count: {count}
			<hr />
			<Button onClick={logout}>Logout</Button>
			<button type="button" onClick={incrementCount}>
				Increment Count
			</button>
			<button type="button" onClick={decrementCount}>
				Decrement Count
			</button>
		</div>
	);
}
