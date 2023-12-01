import { Flex, Input, Text } from '@chakra-ui/react'

interface ICallerFormRow {
    label: string
    placeholder: string
    required?: boolean
    labelW?: string;
    inputW?: string;
}

export const FormRow = ({ placeholder, label, required, labelW, inputW } : ICallerFormRow) => {
    return (
    <Flex w="100%" alignItems="center" justifyContent="center">
        <Flex w={labelW ? labelW : "35%"}>
            <Text variant="header3" color="blackAlpha.700">
                {label}{required && <Text as="span" color="red.500">*</Text>}:
            </Text>
         </Flex>
        <Flex w={inputW ? inputW : "65%"}>
            <Input w="264px" placeholder={placeholder} />
        </Flex>
    </Flex>
  )
}
