import { VStack, Flex, Text, Spacer } from '@chakra-ui/react'
import { SpecialistsTable } from '../components/SpecialistTable'
// import { NewSpecialistModal } from '../components/NewSpecialistModal'

export const SpecialistRoute = () => {
  return (
    <VStack w="100%" spacing="12px" align="flex-start">
      <Flex w="100%">
        <VStack spacing="4px" align="flex-start">
            <Text variant="topic">Specialist</Text>
            <Text variant="topic_description">View specialists</Text>
        </VStack>
        <Spacer />
        {/* <NewSpecialistModal /> */}
      </Flex>
      <Flex flexDir="column" w="100%" mt="8px">
          <SpecialistsTable />
      </Flex>
  </VStack>
  )
}
