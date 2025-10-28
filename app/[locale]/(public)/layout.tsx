import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/header'), {
	loading: () => <div className="h-14 w-full" />,
});

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
export default Layout;
