import { useQuery } from '@tanstack/react-query'
import { Center, Flex, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'
import { EmployeeRow, EmployeeTable } from '../components/EmployeeTable'
import { EquipmentRow, EquipmentTable } from '../components/EquipmentTable'
import { ReturnButton } from 'components/ReturnButton/ReturnButton'

export const ViewCallerAndEquipment = () => {
    const [ params ] = useSearchParams()
    const name = params.get('name');
    const serialNumber = params.get('serialNumber');

    const employeeQuery = useQuery<EmployeeRow[]>({
        queryKey: ['caller', name],
        queryFn: () =>
            axiosClient.get(`/employee/getByName/${name || ':'}`).then(res => res.data), 
    })

    const equipmentQuery = useQuery<EquipmentRow[]>({
        queryKey: ['equipment', serialNumber],
        queryFn: () =>
            axiosClient.get(`/equipment/getBySerialNumber/${serialNumber || ':'}`).then(res => res.data), 
    })

    if (employeeQuery.isLoading || equipmentQuery.isLoading) return <div>Loading...</div>;
    if (employeeQuery.isError || equipmentQuery.isError) return <div>Error</div>;

  return (
    <Flex flexDir="column" w="100%">
        <Flex mb="32px">
            <ReturnButton />
        </Flex>
        {employeeQuery.data && employeeQuery.data.length !== 0 && (
            <Flex flexDir="column" mb="36px">
                <Text variant="header2" color="blackAlpha.700" mb="22px">
                    Employee(s):
                </Text>
                <EmployeeTable employees={employeeQuery.data}/>
            </Flex>
        )}
        {equipmentQuery.data && equipmentQuery.data.length !== 0 ? (
            <Flex flexDir="column" >
                <Text variant="header2" color="blackAlpha.700" mb="22px">
                    Equipment(s):
                </Text>
                <EquipmentTable equipment={equipmentQuery.data}/>
            </Flex>
        ) : serialNumber && (
            <Center color="blackAlpha.600">
                <Text variant="header2">Could not find equipment with serial number "{serialNumber}"</Text>
            </Center>
        )}
        {!(employeeQuery.data && employeeQuery.data.length !== 0) && name && (
            <Center mt="36px" color="blackAlpha.600">
                <Text variant="header2">Could not find employee with name "{name}"</Text>
            </Center>
        )}
    </Flex>
  )
}
