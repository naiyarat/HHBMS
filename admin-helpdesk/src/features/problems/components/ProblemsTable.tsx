import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Flex, Center } from '@chakra-ui/react'
import { convertResolutionTime } from '../utils/convertResolutionTime';
import { AddSolutionModal } from './AddSolutionModal';
import { EditSubcatModal } from './EditSubcatModal';

const tableHeaders = [
    'Id',
    'Topic',
    'Subcategory',
    'Equipment Serial No.',
    'Resolution Time',
    'Specialist',
    'Solution',
]

export type TProblemRow = {
  id: number;
  topic: string;
  subcategory: string;
  equipmentSerialNo: string;
  resolutionTime?: number;
  specialist?: string;
  solution?: string;
}

export const ProblemsTable = ({ data } : { data: TProblemRow[] }) => {
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
                {data.length > 0 ? data.map((row: TProblemRow) => (
                   <Tr key={row.id}>
                          <Td>
                            <Text>
                              {row.id}
                            </Text>                          
                          </Td>
                          <Td>
                            <Text>
                              {row.topic}
                            </Text>                          
                          </Td>
                          <Td>
                            <Flex alignItems="center">
                              <Text>
                                {row.subcategory}
                              </Text>   
                              <EditSubcatModal id={row.id}/>
                            </Flex>
                          </Td>
                          <Td>
                            <Text>
                              {row.equipmentSerialNo}
                            </Text>                          
                          </Td>
                          <Td>
                            <Text>
                              {row.resolutionTime ? convertResolutionTime(row.resolutionTime) : "-"}
                            </Text>                          
                          </Td>
                          <Td>
                            <Text>
                              {row.specialist || '-'}
                            </Text>                          
                          </Td>
                          <Td>
                            <Text>
                              {row.solution || (
                                <AddSolutionModal id={row.id} />
                              )}
                            </Text>                          
                          </Td>
                    </Tr>
                )) : (
                  <Tr>
                    <Td colSpan={8}>
                      <Center>
                        <Text variant="paragraph">
                          No data found :(
                        </Text> 
                      </Center>
                    </Td>
                  </Tr>
                )}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
