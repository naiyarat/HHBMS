import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Datepicker: ComponentStyleConfig = {
	baseStyle: {},
	variants: {
		primary: {
			'.react-datepicker-wrapper': {
				h: '100%',
			},
			'.react-datepicker-popper': {
				pt: '8px',
				w: '280px',
			},
			'.react-datepicker': {
				w: '100%',
				border: 'none',
				borderRadius: '8px',
				background: 'primary.white',
				boxShadow: '2px 5px 30px 0px #25355F1A',
				padding: '16px',
			},
			'.react-datepicker__input-container': {
				h: '100%',
			},
			'.react-datepicker__input-container > input': {
				w: '100%',
				h: '100%',
				border: '1px solid',
				borderRadius: '8px',
				borderColor: 'primary.darkblue_20',
				background: 'primary.white',
				padding: '6px 12px 6px 12px',
				fontSize: '14px',
				lineHeight: '20px',
				fontWeight: '400',
				color: 'primary.darkblue_80',
			},
			'.react-datepicker__month-container': {
				w: '100%',
			},
			'.react-datepicker__header': {
				background: 'none',
				border: 'none',
				h: '70px',
				pt: '0px',
				pb: '4px',
			},
			'.react-datepicker__current-month': {
				py: '4px',
				color: 'primary.darkblue_80',
				fontSize: '16px',
				lineHeight: '24px',
				fontWeight: '700',
			},
			'.react-datepicker__day-name': {
				py: '6px',
				mr: '4px',
				w: '32px',
				my: '0px',
				ml: '0px',
				color: 'primary.darkblue_40',
				fontSize: '14px',
				lineHeight: '20px',
				fontWeight: '500',
			},
			'.react-datepicker__day-name:last-of-type': {
				mr: '0px',
			},
			'.react-datepicker__month': {
				m: '0px',
			},
			'.react-datepicker__week': {
				pb: '4px',
			},
			'.react-datepicker__week:last-of-type': {
				p: '0px',
			},
			'.react-datepicker__day': {
				w: '24px',
				m: '4px 8px 4px 4px',
				borderRadius: '4px',
				fontSize: '16px',
				lineHeight: '24px',
				fontWeight: '400',
			},
			'.react-datepicker__day:last-of-type': {
				m: '4px',
			},
			'.react-datepicker__day--selected': {
				background: 'primary.darkblue_100',
				color: 'primary.white',
			},
			'.react-datepicker__day--keyboard-selected': {
				background: 'primary.darkblue_100',
				color: 'primary.white',
			},
			'.react-datepicker__day--disabled': {
				background: 'primary.bg_grey',
				color: 'primary.darkblue_20',
			},
			'.react-datepicker__day--in-range ': {
				background: 'primary.darkblue_40',
				color: 'primary.bg_grey',
			},
			'.react-datepicker__day--range-start': {
				background: 'primary.darkblue_100',
				color: 'primary.white',
			},
			'.react-datepicker__day--range-end': {
				background: 'primary.darkblue_100',
				color: 'primary.white',
			},
			'.react-datepicker__day--in-selecting-range': {
				background: 'primary.darkblue_40',
				color: 'primary.bg_grey',
			},
			'.react-datepicker__day--outside-month': {
				color: 'primary.darkblue_20',
			},
			'.react-datepicker__navigation': {
				top: '16px',
			},
			'.react-datepicker__navigation--next': {
				right: '16px',
			},
			'.react-datepicker__navigation--previous': {
				left: '16px',
			},
			'.react-datepicker__navigation-icon': {
				top: '4px',
			},
			'.react-datepicker__navigation-icon--next::before': {
				borderColor: 'primary.darkblue_80',
				borderWidth: '1.5px 1.5px 0px 0px',
			},
			'.react-datepicker__navigation-icon--previous::before': {
				borderColor: 'primary.darkblue_80',
				borderWidth: '1.5px 1.5px 0px 0px',
			},
		},
		secondary: {},
		time_select_only: {
			'.react-datepicker-wrapper': {
				height: '100%',
			},
			'.react-datepicker__input-container': {
				height: '100%',
			},
			'.react-datepicker__input-container > input': {
				width: '81px',
				height: '100%',
				background: 'primary.white',
				border: '1px solid',
				borderColor: 'primary.darkblue_20',
				borderRadius: '8px',
				textAlign: 'center',
				'.react-datepicker-ignore-onclickoutside': {
					borderColor: 'primary.darkblue_100',
				},
			},
			'.react-datepicker__time-container': {
				width: '79px',
			},
			'.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ': {
				width: 'inherit',
			},
		},
	},
};

export default Datepicker;
