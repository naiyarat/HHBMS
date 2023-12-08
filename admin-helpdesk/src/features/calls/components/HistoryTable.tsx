import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query';
import axiosClient from 'utils/axiosClient';

const tableHeaders = [
    'Caller',
    'Operator',
    'Time of Call',
    'Description',
    'Problem Id',
]

type TCallRow = {
  id: string;
  caller: string;
  operator: string;
  timeOfCall: Date;
  description?: string;
  problemId?: string;
}

export const HistoryTable = () => {
    const { data, isLoading, isError } = useQuery({
      queryKey: ['calls'],
      queryFn: () =>
        axiosClient.get('/call/getAll').then(res => res.data),
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
                  {data.map((row: TCallRow) => (
                     <Tr key={row.id}>
                          <Td>
                            <Text>
                              {row.caller}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.operator}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {new Date(row.timeOfCall).toLocaleString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                hour12: true,
                              })}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {row.description || "-"}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              #{row.problemId}
                            </Text>
                          </Td>
                    </Tr>
                  ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
