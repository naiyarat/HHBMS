import { Button, Divider, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import { FormModal } from 'components/Modal/FormModal'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { FormRow } from '../../../components/Form/FormRow'

export const NewCallModal = () => {
    const [value, setValue] = React.useState('new')

  return (
    <FormModal
        w="35rem"
        triggerButton={
            <Button variant="primary" w="118px" h="44px" leftIcon={<FiPlus size="24px" />}>
                New Call
            </Button>  
        }
        submitButton={
            <Button variant="primary" w="90px" h="44px">
                Submit
            </Button>  
        }
        cancelButton={
            <Button variant="secondary" w="90px" h="44px">
                Cancel
            </Button>  
        }
        title={
            <Text variant="header1" color="red.600">
                Create a New Call
            </Text>
        }
        isDone={false}
    >
        <VStack spacing="12px" align="flex-start">
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Call Information
            </Text>
            <FormRow label="Caller" placeholder="Peter Parker(dropdown)" required />
            <FormRow label="Operator" placeholder="Mary Jane(dropdown)" required />
            <FormRow label="Time of Call" placeholder="00:00" required />
            <FormRow label="Description" placeholder="ex. having him by my side" />
            <Divider borderColor="blackAlpha.400" my="12px" />
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Problem Information
              </Text>
            <RadioGroup onChange={setValue} value={value} colorScheme="red">
                <Stack direction='row'>
                    <Radio value='new'>New</Radio>
                    <Radio value='old'>Old</Radio>
                </Stack>
              </RadioGroup>
              {value === 'new' ? (
                  <>
                    <FormRow label="Topic" placeholder="ex. Computer crashing" required />
                    <FormRow label="Description" placeholder="ex. having him by my side" />
                    <FormRow label="Subcategory" placeholder="dropdown" required />
                    <FormRow label="Serial Number" placeholder="dropdown" required />
                    <FormRow label="Resolution Time" placeholder="ex. 2 hours" required />
                    <FormRow label="Solution" placeholder="ex. was like the icing" />
                    <FormRow label="Specialist" placeholder="dropdown" />
                  </>
              ) : (
                <FormRow label="Problem Id" placeholder="dropdown" required />
            )}
        </VStack>
    </FormModal>
  )
}
