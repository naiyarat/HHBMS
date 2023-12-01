import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, VStack } from '@chakra-ui/react'

const tableHeaders = [
    'Id',
    'Name',
    'Expertise Category/Subcategory',
    'Current Problems',
]

export const SpecialistsTable = () => {
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
                      <Td>1</Td>
                      <Td>June Pichaya</Td>
                      <Td>
                        <VStack spacing="2px" align="flex-start">
                          <Text>
                            Equipment failure/CPU
                          </Text>
                          <Text>
                            Equipment failure/GPU
                          </Text>
                          <Text>
                            Equipment failure/SSD
                          </Text>
                        </VStack>
                      </Td>
                      <Td>
                        <VStack align="flex-start" spacing="2px" p="0px">
                          <Text>
                            Problem #1: CPU failure
                          </Text>
                          <Text>
                            Problem #1: By my side
                          </Text>
                        </VStack>
                      </Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
