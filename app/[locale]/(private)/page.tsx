'use client';

import GreetingCard from '@/components/elements/greeting-card';
import LearningJourney from './components/LearningJourney';

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-6">
			<GreetingCard />
			<LearningJourney />
		</div>
	);
}
