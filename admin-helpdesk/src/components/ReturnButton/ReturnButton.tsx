import { Button, Icon, Text } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

type ReturnButtonProps = {
	destination?: string;
	onClick?: () => void;
};
export const ReturnButton = ({ destination, onClick }: ReturnButtonProps) => {
	const navigate = useNavigate();
	const onClickHandler = () => {
		typeof onClick === 'function' && onClick();
		if (!destination) {
			navigate(-1);
		} else {
			navigate(destination);
		}
	};

	return (
		<Button onClick={onClickHandler} variant="ghost" px="0rem" py="0rem" h="24px">
			<Icon as={FiChevronLeft} boxSize="24px" p="4px" color="red.500" />
			<Text variant="header3" color="red.500">Return</Text>
		</Button>
	);
};
