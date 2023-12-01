import type { ComponentStyleConfig } from '@chakra-ui/react';

const Tabs: ComponentStyleConfig = {
	variants: {
		primary: {
			tab: {
				px: '0rem',
				mr: '32px',
				color: 'gray.500',
				_focus: { boxShadow: 'none' },
				_hover: { bg: 'none' },
				_selected: {
					bg: 'none',
					color: 'blackAlpha.800',
				},
			},
			tabpanel: {
				px: '0rem',
				mb: '10px',
			},
		},
	},
};

export default Tabs;