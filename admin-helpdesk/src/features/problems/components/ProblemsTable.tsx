import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Icon, Flex } from '@chakra-ui/react'
import { BiPencil } from "react-icons/bi";

const tableHeaders = [
    'Id',
    'Topic',
    'Category/Subcategory',
    'Equipment Serial No.',
    'Resolution Time',
    'Specialist',
    'Solution',
]

export const ProblemsTable = () => {
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
                  <Td>Mac broke</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Text variant="paragraph">
                        Equipment failure/CPU outdated
                      </Text>
                      <Button variant="link_primary" p="0">
                        <Icon boxSize="24px" as={BiPencil} ml="8px" />
                      </Button>
                    </Flex>
                  </Td>
                  <Td>12345</Td>
                  <Td>2 hours</Td>
                  <Td>Doraemon</Td>
        
                  <Td>Replaced CPU</Td>
                </Tr>
                 <Tr>
                    <Td>2</Td>
                    <Td>Mac broke</Td>
                    <Td>Equipment failure/CPU outdated</Td>
                    <Td>12345</Td>
                    <Td>2 hours</Td>
                    <Td>Doraemon</Td>
                    <Td>
                      <Button variant="link_primary">
                        + Add Solution
                      </Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
