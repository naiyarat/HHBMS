import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axiosClient from 'utils/axiosClient'

const tableHeaders = [
    'Id',
    'Name',
    'Expertise Subcategory(Category)',
    'Current Problems(Problem Number)',
]

type TSpecialistRow = {
  id: string;
  name: string;
  subcategories: string[];
  problems: string[];
}

export const SpecialistsTable = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['specialist'],
    queryFn: () =>
      axiosClient.get('/specialist/getAll').then(res => res.data),
  })

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

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
                  {data.map((row: TSpecialistRow) => (
                     <Tr key={row.id}>
                          <Td>
                            <Text>
                              {row.id}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.name}
                            </Text>
                          </Td>
                          <Td>
                            <VStack spacing="2px" align="flex-start">
                              {row.subcategories.map(subcat => (
                                <Text key={subcat}>
                                    {subcat}
                                </Text>
                              ))}
                            </VStack>
                          </Td>
                          <Td>
                            <VStack align="flex-start" spacing="2px" p="0px">
                              {row.problems.length > 0 ? row.problems.map(problem => (
                                <Text key={problem}>
                                    {problem}
                                </Text>
                              )) : <Text>-</Text>}
                            </VStack>
                          </Td>
                    </Tr>
                  ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
