import { Flex, Text, Spinner } from '@chakra-ui/react';
import * as React from 'react';
import Select from 'react-select';
import { customStyles } from './ReactSelectStyles';

export interface ISelectOption {
	value: string;
	label: string;
}

export interface IDropdown {
	placeholder: string;
	width: string;
	selectOptions?: ISelectOption[];
	isDisabled?: boolean;
	isSearchable?: boolean;
	isError?: boolean;
	onChange?: (e: any) => void;
	value?: string | number;
	defaultValue?: string | ISelectOption;
	isClearable?: boolean;
}

export const mockOptions: ISelectOption[] = [
	{
		value: 'hello world',
		label: 'hello world',
	},
];

export const Dropdown = ({
	placeholder,
	width,
	selectOptions,
	isDisabled,
	isSearchable,
	isError,
	onChange,
	value,
	defaultValue,
	isClearable,
}: IDropdown) => {
	const selectStyles = customStyles(width, isError);
	return (
		<Flex flexDir="column" alignItems="flex-start" w={width}>
			<Select
				defaultValue={
					selectOptions && typeof defaultValue === 'string'
						? selectOptions.find(option => option.value === defaultValue)
						: !selectOptions && typeof defaultValue === 'string'
						? mockOptions.find(option => option.value === defaultValue)
						: defaultValue
				}
				value={
					selectOptions
						? selectOptions.find(option => option.value === value)
						: mockOptions.find(option => option.value === value)
				}
				onChange={onChange}
				isSearchable={isSearchable}
				options={selectOptions ? selectOptions : mockOptions}
				placeholder={placeholder}
				styles={selectStyles}
				isDisabled={isDisabled}
				isClearable={isClearable}
			/>
			{isError && (
				<Flex alignItems="center" pl="4px" mt="4px">
					<Spinner color="tertiary.red_100" boxSize="12px" />
					<Text variant="label" color="tertiary.red_100" ml="6px">
						กรุณารีเฟรชอีกรอบ
					</Text>
				</Flex>
			)}
		</Flex>
	);
};
