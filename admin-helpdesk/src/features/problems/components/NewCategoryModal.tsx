import { Button, Divider, Text, VStack } from '@chakra-ui/react';
import { FormModal } from 'components/Modal/FormModal';
import { FiPlus } from 'react-icons/fi';
import { FormRow } from '../../../components/Form/FormRow';

export const NewCategoryModal = () => {
  return (
    <FormModal
        w="35rem"
        triggerButton={
            <Button variant="primary" w="158px" h="44px" leftIcon={<FiPlus size="24px" />}>
                New Category
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
                Create a New Category
            </Text>
        }
        isDone={false}
    >
        <VStack spacing="12px" align="flex-start">
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Category Information
            </Text>
            <FormRow label="Name" placeholder="Peter Parker" required />
            <FormRow label="Description" placeholder="Mary Jane(dropdown)" />
            <Divider borderColor="blackAlpha.400" my="12px" />
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Subcategory Information #1
            </Text>
            <FormRow label="Name" placeholder="Peter Parker" required />
            <FormRow label="Description" placeholder="Mary Jane(dropdown)" />
            <Divider borderColor="blackAlpha.400" my="12px" />
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Subcategory Information #2
            </Text>
            <FormRow label="Name" placeholder="Peter Parker" required />
            <FormRow label="Description" placeholder="Mary Jane(dropdown)" />
        </VStack>
    </FormModal>
  )
}
