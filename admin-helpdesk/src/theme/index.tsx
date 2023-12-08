import { extendTheme } from '@chakra-ui/react';
import Text from './text';
import Tabs from './tabs';
import Button from './button';
import Table from './table';
import Datepicker from './datepicker';

const overrides = {
	components: {
		Text,
		Tabs,
		Button,
		Table,
		Datepicker
	},
};

export default extendTheme(overrides);