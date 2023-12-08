import { Box, StyleProps, Text, useStyleConfig } from '@chakra-ui/react';
import { Control, Controller, FieldValues, Path, FormState, FieldName, FieldErrors } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message';

type DatePickerProps<TFormValues extends FieldValues> = {
	control: Control<TFormValues>;
	name: Path<TFormValues>;
	formState: FormState<TFormValues>;
	errorField: FieldName<FieldValuesFromFieldErrors<FieldErrors<TFormValues>>>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	defaultValue?: any;
	styleProps?: StyleProps;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormSingleDatePicker = <TFormValues extends Record<string, any>>({
	control,
	name,
	formState,
	errorField,
	defaultValue,
	styleProps,
}: DatePickerProps<TFormValues>) => {
	const datePickerStyle = useStyleConfig('Datepicker', { variant: 'primary' });

	const minDate = new Date();

	return (
		<Box flexDir="column" {...styleProps}>
			<Controller
				control={control}
				name={name}
				defaultValue={defaultValue}
				render={({ field: { value, onChange, ...fieldProps } }) => {
					return (
						<Box __css={datePickerStyle} {...styleProps}>
							<DatePicker
								selected={value}
								placeholderText="วันที่"
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								onChange={(e: any) => onChange(e)}
								dateFormat="dd MMM. yy"
								showPopperArrow={false}
								minDate={minDate}
								{...fieldProps}
							/>
						</Box>
					);
				}}
			/>
			<ErrorMessage
				errors={formState.errors}
				name={errorField}
				render={({ message }) => (
					<Text variant="label" color="tertiary.red_100" pl="12px">
						{message}
					</Text>
				)}
			/>
		</Box>
	);
};
