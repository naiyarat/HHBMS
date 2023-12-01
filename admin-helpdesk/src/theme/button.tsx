import type { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
	variants: {
		primary: {
			bg: 'red.400',
			color: 'white',
			boxShadow: '2px 2px 20px rgba(37, 53, 95, 0.12)',
			borderRadius: '12px',
			fontWeight: 700,
		},
		primary_disabled: {
			bg: 'primary.darkblue_5',
			color: 'primary.darkblue_20',
			boxShadow: '2px 2px 20px 0px #25355F1F',
			fontWeight: 700,
		},
		ghost_icon: {
			bg: 'none',
			boxShadow: 'none',
			color: 'primary.darkblue_40',
			_focus: { boxShadow: 'none' },
			_hover: { bg: 'none' },
			_active: { bg: 'none' },
			fontWeight: 700,
		},
		ghost: {
			bg: 'none',
			boxShadow: 'none',
			border: 'none',
			color: 'primary.darkblue_80',
			_hover: {
				color: 'primary.darkblue_100',
			},
			_disabled: {
				color: 'primary.darkblue_20',
			},
			fontWeight: 700,
		},
		secondary: {
			bg: 'white',
			color: 'red.400',
			border: '2px solid #F56565',
			borderRadius: '12px',
			boxShadow: '2px 2px 20px rgba(37, 53, 95, 0.12)',
			_hover: {
				boxShadow: 'md',
				transform: 'scale(1.02)',
			},
			_disabled: {
				bg: 'gray',
			},
			fontWeight: 700,
		},
		secondary_disabled: {
			bg: '#F4F4F4',
			color: 'primary.darkblue_20',
			border: '1.5px solid #AFB0B9',
			fontWeight: 700,
		},
		link_primary: {
			bg: 'none',
			border: 'none',
			color: '#4C4CBF',
			_hover: {
				color: '#3838BF',
			},
			fontWeight: 700,
		},
		image_icon: {
			bg: 'primary.darkblue_5',
			boxShadow: 'none',
			borderRadius: '4px',
			color: 'primary.darkblue_20',
			_focus: { boxShadow: 'none' },
		},
	},
	defaultProps: {
		size: '48',
		variant: 'primary',
	},
};

export default Button;