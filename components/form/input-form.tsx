import {FieldValues} from 'react-hook-form';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import {cn} from '@/lib/utils';
import {ReactNode} from 'react';
import {FormProps} from '@/types/common';
import {InputWithPrefix} from '../elements/input-prefix';

type Props<T extends FieldValues> = FormProps<T> & {
	prefix?: ReactNode;
	type?: string;
};

const InputForm = <T extends FieldValues>({
	control,
	name,
	label,
	className,
	prefix,
	type,
}: Props<T>) => (
	<FormField
		control={control}
		name={name}
		render={({field, fieldState}) => {
			return (
				<FormItem className={cn('flex flex-col gap-2 space-y-0', className)}>
					{label && <FormLabel className="text-sm font-semibold">{label}</FormLabel>}
					<FormControl>
						<InputWithPrefix
							prefix={prefix}
							className={cn(
								'h-11 rounded-md text-sm outline-none',
								fieldState.error && 'border-destructive',
							)}
							{...field}
							type={type}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			);
		}}
	/>
);

export default InputForm;
