import { ResponsiveValue } from '@chakra-ui/react';
import { FieldValues, FormState, Path } from 'react-hook-form';
import {
	ControlProps,
	CSSObjectWithLabel,
	DropdownIndicatorProps,
	MultiValueProps,
	OptionProps,
	Options,
	StylesConfig,
} from 'react-select';

export const customStyles = (width: string, isError?: boolean) => {
	const selectStyle: StylesConfig = {
		control: (provided: any, state: any) => ({
			...provided,
			paddingLeft: '12px',
			paddingRight: '12px',
			fontSize: '14px',
			lineHeight: '20px',
			fontWeight: 400,
			borderRadius: '8px',
			width: width,
			height: '40px',
			background: state.isDisabled ? '#F4F4F4' : isError ? '#FEF7F7' : '#FFFFFF',
			borderColor: state.isDisabled ? '#AFB0B9' : isError ? '#F15A5A' : state.isFocused ? '#0D0D2E' : '#AFB0B9',
			boxShadow: 'none',
			'&:hover': {
				outline: 'none',
			},
		}),
		valueContainer: (provided: any) => ({
			...provided,
			padding: '0px',
		}),
		indicatorSeparator: (provided: any) => ({
			...provided,
			display: 'none',
		}),
		dropdownIndicator: (provided: any, state: any) => ({
			...provided,
			paddingLeft: '0px',
			paddingRight: '0px',
			color: state.isDisabled ? '#AFB0B9' : isError ? '#F15A5A' : '#0D0D2E',
			'> svg': {
				paddingTop: '2px',
				paddingBottom: '2px',
				transform: `rotate(${state.selectProps.menuIsOpen ? -180 : 0}deg)`,
			},
		}),
		placeholder: (provided: any) => ({
			...provided,
			color: '#AFB0B9',
			margin: '0px',
		}),
		menu: (provided: any) => ({
			...provided,
			boxShadow: 'none',
		}),
		menuList: (provided: any) => ({
			...provided,
			width: width,
			fontSize: '14px',
			lineHeight: '20px',
			fontWeight: 400,
			paddingTop: '8px',
			paddingBottom: '8px',
			boxShadow: '2px 2px 20px 0px #25355F1F',
			borderRadius: '8px',
			border: 'none',
			background: '#FFFFFF',
			maxHeight: '416px',
			paddingLeft: '6px',
			paddingRight: '1px',
			overflow: 'scroll',
			'&::-webkit-scrollbar': {
				width: '6px',
				height: '100%',
			},
			'&::-webkit-scrollbar-thumb': {
				background: '#D2D8DE',
				borderRadius: '100vw',
				border: '1px solid rgba(0, 0, 0, 0)',
				backgroundClip: 'padding-box',
			},
			'&::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			position: 'fixed',
		}),
		option: (provided: any, state: any) => ({
			...provided,
			minHeight: '40px',
			borderRadius: '8px',
			'&:hover': {
				background: '#F4F4F4',
			},
			color: '#0D0D2E',
			background: state.isSelected ? '#F4F4F4' : 'none',
			paddingInline: '0.5rem',
			paddingBlock: '10px',
			alignItems: 'center',
			marginBottom: '1px',
		}),
	};
	return selectStyle;
};

type ReactSelectStyleProps<TFormValues extends FieldValues> = {
	formState: FormState<TFormValues>;
	name: Path<TFormValues>;
	isFixed?: boolean;
	w?: ResponsiveValue<any>;
	isMulti?: boolean;
};

export const ReactSelectStyle = <TFormValues extends Record<string, any>>({
	formState,
	name,
	isFixed,
	w,
	isMulti,
}: ReactSelectStyleProps<TFormValues>) => {
	const selectStyle: StylesConfig = {
		control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
			...provided,
			paddingInline: '0.75rem',
			fontSize: '14px',
			lineHeight: '20px',
			fontWeight: 400,
			borderRadius: '8px',
			width: '100%',
			minHeight: '40px',
			background: state.isDisabled ? '#F4F4F4' : formState?.errors[name]?.message ? '#FEF7F7' : '#FFFFFF',
			borderColor: state.isDisabled
				? '#AFB0B9'
				: formState?.errors[name]?.message
				? '#F15A5A'
				: state.isFocused
				? '#0D0D2E'
				: '#AFB0B9',
			boxShadow: 'none',
			'&:hover': {
				outline: 'none',
			},
		}),
		valueContainer: (provided: CSSObjectWithLabel) => ({
			...provided,
			padding: '0rem',
		}),
		indicatorSeparator: (provided: CSSObjectWithLabel) => ({
			...provided,
			display: 'none',
		}),
		dropdownIndicator: (provided: CSSObjectWithLabel, state: DropdownIndicatorProps) => ({
			...provided,
			paddingInline: '0rem',
			color: state.isDisabled ? '#AFB0B9' : formState?.errors[name]?.message ? '#F15A5A' : '#0D0D2E',
			'> svg': {
				paddingBlock: '2px',
				transform: `rotate(${state.selectProps.menuIsOpen ? -180 : 0}deg)`,
			},
		}),
		placeholder: (provided: CSSObjectWithLabel) => ({
			...provided,
			color: '#AFB0B9',
			margin: '0rem',
		}),
		menu: (provided: CSSObjectWithLabel) => ({
			...provided,
			boxShadow: 'none',
		}),
		menuList: (provided: CSSObjectWithLabel) => ({
			...provided,
			width: w ? w : '100%',
			fontSize: '14px',
			lineHeight: '20px',
			fontWeight: 400,
			paddingBlock: '8px',
			boxShadow: '2px 2px 20px 0px #25355F1F',
			borderRadius: '8px',
			border: 'none',
			background: '#FFFFFF',
			maxHeight: '128px',
			paddingLeft: '0.375rem',
			paddingRight: '0.0625rem',
			overflow: 'scroll',
			'&::-webkit-scrollbar': {
				width: '0.375rem',
				height: '100%',
			},
			'&::-webkit-scrollbar-thumb': {
				background: '#D2D8DE',
				borderRadius: '100vw',
				border: '1px solid rgba(0, 0, 0, 0)',
				backgroundClip: 'padding-box',
			},
			'&::-webkit-scrollbar-track': {
				background: 'transparent',
			},
			position: isFixed ? 'fixed' : 'relative',
		}),
		option: (provided: CSSObjectWithLabel, state: OptionProps) => ({
			...provided,
			minHeight: '40px',
			borderRadius: '0.5rem',
			'&:hover': {
				background: '#F4F4F4',
			},
			color: '#0D0D2E',
			background: state.isSelected && !isMulti ? '#F4F4F4' : '#FFFFFF',
			paddingInline: '0.5rem',
			paddingBlock: '10px',
			alignItems: 'center',
			marginBottom: '1px',
		}),
	};
	return selectStyle;
};

export const isConsecutive = (arr: Options<any>, n: number) => {
	const arrayValues: number[] = arr.map(item => item.value);
	arrayValues.sort();
	for (let i = 1; i < n; i++) if (arrayValues[i] !== arrayValues[i - 1] + 1) return false;
	return true;
};

export const ReactSelectMultiWeekdayStyle: StylesConfig = {
	multiValue: (provided: CSSObjectWithLabel, state: MultiValueProps) => ({
		...provided,
		background: 'none',
		display: !isConsecutive(state.getValue(), state.getValue().length)
			? 'block'
			: state.index === 0 || state.index === state.getValue().length - 1
			? 'block'
			: 'none',
	}),
	multiValueLabel: (provided: CSSObjectWithLabel) => ({
		...provided,
		paddingInline: '0rem',
	}),
	multiValueRemove: (provided: CSSObjectWithLabel) => ({
		...provided,
		display: 'none',
	}),
};
