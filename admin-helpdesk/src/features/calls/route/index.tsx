import { VStack, Text, Flex, Spacer} from '@chakra-ui/react'
import { Tab } from 'components/Tabs/Tabs'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CallerAndEquipment } from './CallerAndEquipment'
import { History } from './History'
import { NewCallModal } from '../components/NewCallModal'

export const CallsRoute = () => {
    const tabs = [{
      label: "Calls List",
      destination: "/calls/list"
    }, {
        label: "Caller and Equipment",
        destination: "/calls/caller-and-equipment"
    }]
  return (
    <VStack w="100%" spacing="12px" align="flex-start">
      <Flex w="100%">
        <VStack spacing="4px" align="flex-start">
            <Text variant="topic">Calls</Text>
            <Text variant="topic_description">Manage your calls</Text>
        </VStack>
        <Spacer />
        <NewCallModal />
      </Flex>
        <Tab tabs={tabs} />
        <Routes>
          <Route path="caller-and-equipment" element={<CallerAndEquipment />} />
          <Route path="list" element={<History />} />
          <Route path="" element={<Navigate to={'list'} />} />
        </Routes>
    </VStack>
  )
}
