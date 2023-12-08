import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'

const tableHeaders = [
    'name',
    'operating system',
    'software',
    'serial number',
    'license',
]

export type EquipmentRow = {
    id: string,
    name: string,
    os: string,
    software?: string,
    serialNumber: string,
    licenseIsValid: 0 | 1,
}

type TTableData = {
    equipment: EquipmentRow[];
}

export const EquipmentTable = ({ equipment } : TTableData) => {
    return (
        <TableContainer style={{ borderRadius: '12px', boxShadow: '1px 1px 5px #999' }}>
            <Table variant="primary">
                <Thead>
                    <Tr>
                        {tableHeaders.map(header => (
                            <Th key={header}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {equipment.map((row: EquipmentRow) => (
                        <Tr key={row.id}>
                            <Td>
                                <Text>
                                    {row.name}
                                </Text>
                            </Td>
                            <Td>
                                <Text>
                                    {row.os}
                                </Text>
                            </Td>
                            <Td>
                                <Text>
                                    {row.software || '-'}
                                </Text>
                            </Td>
                            <Td>
                                <Text>
                                    {row.serialNumber}
                                </Text>
                            </Td>
                            <Td>
                                <Text>
                                    {row.licenseIsValid === 1 ? (
                                        "Valid"
                                    ) : (
                                        "Invalid"
                                    )}
                                </Text>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
