import {ReactNode} from 'react';
import {Control, FieldValues, Path} from 'react-hook-form';

export interface ChildrenProps {
	children: ReactNode;
}

export interface FormProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	className?: string;
}
