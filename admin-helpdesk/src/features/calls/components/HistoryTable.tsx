import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const tableHeaders = [
    'Caller',
    'Operator',
    'Time of Call',
    'Description',
    'Problem Id',
]

export const HistoryTable = () => {
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
                  <Tr>
                      <Td>Nike</Td>
                      <Td>Doramee</Td>
                      <Td>November 18th, 2023</Td>
                      <Td>-</Td>
                      <Td>1</Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
