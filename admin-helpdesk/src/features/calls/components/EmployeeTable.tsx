import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'

const tableHeaders = [
    'id',
    'title',
    'name',
    'department'
]

export type EmployeeRow = {
  id: string,
  title: string,
  name: string,
  department: string
}

type TTableData = {
  employees: EmployeeRow[];
}

export const EmployeeTable = ({ employees } : TTableData) => {
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
                  {employees.map((row: EmployeeRow) => (
                     <Tr key={row.id}>
                          <Td>
                            <Text>
                              {row.id}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.title}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.name}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.department}
                            </Text>
                          </Td>
                    </Tr>
                  ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
