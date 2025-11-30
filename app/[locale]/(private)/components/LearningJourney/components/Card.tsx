import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import Image from 'next/image';

type Props = {
	type: 'receive' | 'do' | 'done';
	description: string;
	point: number;
	icon?: string; // Optional icon path
};

const Card: React.FC<Props> = ({description, point, type, icon}) => {
	// Use explicit color classes to ensure they're compiled by Tailwind
	const colorClasses = {
		receive: {
			border: 'border-yellow-500',
			bg: 'bg-yellow-50',
			button: 'bg-yellow-500 hover:bg-yellow-600',
		},
		do: {
			border: 'border-blue-600',
			bg: 'bg-white',
			button: 'bg-blue-600 hover:bg-blue-700',
		},
		done: {
			border: 'border-green-700',
			bg: 'bg-green-50',
			button: 'bg-green-700 hover:bg-green-800',
		},
	};

	const currentColors = colorClasses[type];

	const buttonText = {
		do: 'Thực hiện',
		receive: 'Nhận thưởng',
		done: 'Hoàn thành',
	};

	return (
		<div
			className={cn(
				'w-fit rounded-md border-2 px-6 py-8 shadow-md transition-all hover:shadow-lg',
				currentColors.border,
				currentColors.bg,
			)}>
			{/* Header with icon and button */}
			<div className="mb-4 flex items-center justify-between gap-4">
				{/* Icon */}
				{icon && (
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
						<Image width={28} height={28} src={icon} alt="milestone icon" />
					</div>
				)}

				{/* Button */}
				<Button className={cn('text-white', currentColors.button)}>
					{buttonText[type]}
				</Button>
			</div>

			{/* Description */}
			<p className="text-dark-blue-600 mb-2.5">{description}</p>

			{/* Points */}
			<div className="flex items-center gap-2">
				<span className="text-warning-500 text-[32px] font-medium">+{point}</span>
				<Image
					width={32}
					height={32}
					src="/icons/start-award.svg"
					alt="star award"
				/>
			</div>
		</div>
	);
};

export default Card;
