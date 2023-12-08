import { VStack, Flex, Text, Spacer, Input } from '@chakra-ui/react'
import { ProblemsTable, TProblemRow } from '../components/ProblemsTable'
import { NewCategoryModal } from '../components/NewCategoryModal'
import { Dropdown } from 'components/Dropdown/Dropdown'
import axiosClient from 'utils/axiosClient'
import { useQuery } from '@tanstack/react-query'
import { getDropdownOptions } from 'utils/getDropdownOptions'
import { useState } from 'react'

export const ProblemsRoute = () => {
  const problemQuery = useQuery<TProblemRow[]>({
    queryKey: ['problem'],
    queryFn: () =>
      axiosClient.get('/problem/getAll').then(res => res.data),
  })

  const subcategoryQuery = useQuery({
    queryKey: ['subcategory'],
    queryFn: () =>
      axiosClient.get('/subcategory/getAll').then(res => res.data),
  })
  const [ subcat, setSubcat ] = useState<string>();
  const [ search, setSearch ] = useState<string>();

  if (subcategoryQuery.isLoading || problemQuery.isLoading) return <div>Loading...</div>;
  if (subcategoryQuery.isError || problemQuery.isError) return <div>Error</div>;

  return (
    <VStack w="100%" spacing="12px" align="flex-start">
        <Flex w="100%">
          <VStack spacing="4px" align="flex-start">
              <Text variant="topic">Problems</Text>
              <Text variant="topic_description">View problems</Text>
          </VStack>
          <Spacer />
          <NewCategoryModal />
        </Flex>
        <Flex w="100%">
          <Input
            w="204px"
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Problem ID"
            mr="12px"
          />
          <Dropdown
            placeholder="Subcategory"
            width="204px"
            selectOptions={getDropdownOptions(subcategoryQuery.data)}
            onChange={target => setSubcat(target.value)}
          />
        </Flex>
        <Flex flexDir="column" w="100%" mt="8px">
          <ProblemsTable
            data={
              problemQuery.data?.filter(
                (problem) => 
                  (!subcat || problem.subcategory === subcat) &&
                  (!search || Boolean(problem.id.toString().includes(search)))
              ) || []
            }
          />
        </Flex>
    </VStack>
  )
}