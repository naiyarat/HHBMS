import { Flex, Text } from '@chakra-ui/react'

interface ICallerFormControl {
    label: string
    required?: boolean
    labelW?: string;
    inputW?: string;
    children: React.ReactNode;
}

export const FormControl = ({ label, required, labelW, inputW, children } : ICallerFormControl) => {
    return (
    <Flex w="100%" alignItems="center" justifyContent="center">
        <Flex w={labelW ? labelW : "40%"}>
            <Text variant="header3" color="blackAlpha.700">
                {label}{required && <Text as="span" color="red.500">*</Text>}:
            </Text>
         </Flex>
        <Flex w={inputW ? inputW : "60%"}>
            {children}
        </Flex>
    </Flex>
  )
}
