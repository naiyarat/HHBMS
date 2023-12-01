import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FormRow } from '../../../components/Form/FormRow'

export const CallerAndEquipment = () => {
    return (
        <VStack spacing="8px" align="flex-start" w="100%" mt="12px">
            <Text variant="header2" mb="24px" color="blackAlpha.900">Retrieve caller and equipment information</Text>
            <FormRow label="Caller Name" placeholder="John Doe" inputW="80%" labelW="20%" />
            <FormRow label="Equipment Serial Number" placeholder="0001" inputW="80%" labelW="20%" />
            <Button mt="8px" variant="primary" h="44px" w="76px">Submit</Button>
        </VStack>
    )
}
