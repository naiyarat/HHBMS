import { Flex, Input, Text, VStack } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

interface IFormInput {
    label: string;
    placeholder: string;
    name: string;
    required?: boolean;
    type?: string;
}

export const FormInput = ({ placeholder, name, label, required = true, type = "text" } : IFormInput) => {
    const {
		register,
		formState: { errors },
	} = useFormContext()
    return (
        <Flex w="100%" alignItems="center" justifyContent="center">
            <Flex w={"40%"}>
                <Text variant="header3" color="blackAlpha.700">
                    {label}{required && <Text as="span" color="red.500">*</Text>}:
                </Text>
            </Flex>
            <Flex w={"60%"}>
                <VStack alignItems="flex-start" spacing="6px" w="100%">
                    <Input
                        w="100%"
                        type={type}
                        {...register(name)}
                        placeholder={placeholder}
                        isInvalid={!!errors[name]?.message}
                    />
                    {errors[name]?.message && (
                        <Text color="red.500" variant="label1">{errors[name]?.message as string}</Text>
                    )}
                </VStack>
            </Flex>
        </Flex>
    )
}