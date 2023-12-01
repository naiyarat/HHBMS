import { VStack, Flex, Text, Spacer } from '@chakra-ui/react'
import { ProblemsTable } from '../components/ProblemsTable'
import { NewCategoryModal } from '../components/NewCategoryModal'

export const ProblemsRoute = () => {
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
      <Flex flexDir="column" w="100%" mt="8px">
          <ProblemsTable />
      </Flex>
  </VStack>
  )
}