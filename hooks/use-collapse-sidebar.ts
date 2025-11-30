'use client';

import {useEffect, useState} from 'react';
import {useIsMobile} from './use-mobile';
import {getItem, setItem} from '@/lib/app-storage';

const useCollapseSidebar = () => {
	const isMobile = useIsMobile();
	const [collapse, setCollapse] = useState<boolean>(false);

	useEffect(() => {
		const saved = getItem<boolean>('HEADER_COLLAPSE');
		if (typeof saved === 'boolean') {
			setCollapse(saved);
		}
	}, []);

	useEffect(() => {
		if (isMobile) {
			setCollapse(true);
		}
	}, [isMobile]);

	const toggle = () => {
		setCollapse((prev) => {
			const next = !prev;
			setItem('HEADER_COLLAPSE', next);
			return next;
		});
	};

	return {collapse, toggle};
};

export default useCollapseSidebar;
