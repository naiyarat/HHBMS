import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Table: ComponentStyleConfig = {
	variants: {
		primary: {
			table: {
                tableLayout: 'auto',
			},
			thead: {
				tr: {
					height: '48px',
					bg: 'red.400',
					color: 'white',
				},
				th: {
					px: '8px',
					py: '12px',
					'&:first-of-type': {
						pl: '16px',
						pr: '8px',
					},
					'&:last-of-type': {
						pl: '8px',
						pr: '16px',
					},
					fontSize: '14px',
					lineHeight: '18px',
					fontWeight: 700,
				},
			},
			td: {
				whiteSpace: 'normal',
				px: '8px',
				py: '12px',
				'&:first-of-type': {
					pl: '16px',
					pr: '8px',
				},
				'&:last-of-type': {
					pl: '8px',
					pr: '16px',
				},
			},
			tbody: {
				tr: {
					borderBottom: '1px solid #D2D8DE',
					'&:last-of-type': {
						borderBottom: 'none',
					},
					bg: 'white',
					color: 'blackAlpha.900',
				},
			},
		},
	},
};

export default Table;