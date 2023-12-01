import { Tabs, TabList, Tab as TabItem, Flex, Box, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

export interface ITabs {
	tabs: {
		label: string;
		destination: string;
	}[];
}

export const Tab = ({ tabs }: ITabs) => {
	const location = useLocation();

	return (
		<Tabs variant="primary">
			<TabList>
				<Flex flexWrap="wrap" alignItems="center">
					{tabs.map((tab, index) => (
						<TabItem key={index} as={NavLink} to={tab.destination}>
							<Flex flexDir="column" alignItems="flex-start">
								<Text
									variant={location.pathname === tab.destination ? 'header3' : 'paragraph'}
									color={
										location.pathname === tab.destination ? 'blackAlpha.700' : 'gray.400'
									}
								>
									{tab.label}
								</Text>
							<Box
									mt="8px"
									bg={location.pathname === tab.destination ? 'blackAlpha.700' : 'none'}
									h="3px"
									w="48px"
									borderRadius="4px"
								/>
							</Flex>
						</TabItem>
					))}
				</Flex>
			</TabList>
		</Tabs>
	);
};