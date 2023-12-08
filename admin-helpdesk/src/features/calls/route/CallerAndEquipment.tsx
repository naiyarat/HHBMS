import { Button, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormRow } from '../../../components/Form/FormRow'
import { useNavigate } from 'react-router-dom';

export const CallerAndEquipment = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const navigate = useNavigate()

    return (
        <VStack spacing="8px" align="flex-start" w="100%" mt="12px">
            <Text variant="header2" mb="24px" color="blackAlpha.900">Retrieve caller and equipment information</Text>
            <FormRow
                label="Caller Name"
                placeholder="John Doe"
                inputW="80%"
                labelW="20%"
                onChange={(e: any) => setEmployeeName(e.target.value)}

            />
            <FormRow
                label="Equipment Serial Number"
                placeholder="0001"
                inputW="80%"
                labelW="20%"
                onChange={(e: any) => setSerialNumber(e.target.value)}
            />
            <Button
                mt="8px"
                variant="primary"
                h="44px"
                w="76px"
                isDisabled={employeeName.length === 0 && serialNumber.length === 0}
                onClick={() => navigate(`view/search?name=${employeeName}&serialNumber=${serialNumber}`)}
            >
                Submit
            </Button>
        </VStack>
    )
}
