import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { CallsRoute } from 'features/calls/route';
import { ProblemsRoute } from 'features/problems/route';
import { SpecialistRoute } from 'features/specialist/route';
import { Suspense } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom';


const App = () => {
	return (
        <Flex>
            <Box
                minH="100vh"
                flex={1}
                py="24px"
                px="12px"
            >
                <Suspense
                    fallback={
                        <Flex flexDir="column" alignItems="center" justifyContent="center" h="100%">
                            <div>...loading</div>
                        </Flex>
                    }
                >
                    <Sidebar>
                        <Outlet />
                    </Sidebar>
                </Suspense>
            </Box>
        </Flex>
	);
};

const appRoutes = [
	{
		path: '',
		element: <App />,
		children: [
			{ path: '/landing/*', element: <>landing!</> },
            { path: '/calls/*', element: <CallsRoute /> },
			{ path: '/specialist/*', element: <SpecialistRoute /> },
			{ path: '/problems/*', element: <ProblemsRoute /> },
			{
				path: '',
				element: <Navigate to="/landing/*" />,
			},
		],
	},
];


export const AppRoutes = () => {
    const element = useRoutes(appRoutes);
	return <>{element}</>;
}
