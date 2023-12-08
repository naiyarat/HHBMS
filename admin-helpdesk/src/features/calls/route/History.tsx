import { Flex } from '@chakra-ui/react'
import React from 'react'
import { HistoryTable } from '../components/HistoryTable'

export const History = () => {
  return (
    <Flex flexDir="column" w="100%">
        <HistoryTable />
    </Flex>
  )
}
