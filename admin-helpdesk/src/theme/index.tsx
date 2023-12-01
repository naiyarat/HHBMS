import { extendTheme } from '@chakra-ui/react';
import Text from './text';
import Tabs from './tabs';
import Button from './button';
import Table from './table';

const overrides = {
	components: {
		Text,
		Tabs,
		Button,
		Table
	},
};

export default extendTheme(overrides);