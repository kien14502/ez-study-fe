import {
	House,
	SquarePen,
	Clipboard,
	BookOpen,
	Clock,
	ChartNoAxesColumn,
	Archive,
	UsersRound,
} from 'lucide-react';

export const landingRoutes = [
	{name: 'Home', path: '/'},
	{name: 'Learning', path: '/learning'},
	{name: 'News - Promotions', path: '/news-promotions'},
	{name: 'About Us', path: '/about-us'},
];

export const privateRoutes = [
	{name: 'Home', path: '/', icon: House},
	{name: 'Mission', path: '/mission', icon: Clipboard},
	{name: 'Study', path: '/study', icon: SquarePen},
	{name: 'Learn', path: '/learn', icon: BookOpen},
	{name: 'Exam', path: '/exam', icon: Clock},
	{name: 'Report', path: '/report', icon: ChartNoAxesColumn},
	{name: 'Collection', path: '/collection', icon: Archive},
	{name: 'Friends', path: '/friends', icon: UsersRound},
];
