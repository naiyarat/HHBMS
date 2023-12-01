import { Button, Text, VStack } from '@chakra-ui/react';
import { FormModal } from 'components/Modal/FormModal';
import { FiPlus } from 'react-icons/fi';
import { FormRow } from '../../../components/Form/FormRow';

export const NewSpecialistModal = () => {
    
    return (
        <FormModal
            w="35rem"
            triggerButton={
                <Button variant="primary" w="158px" h="44px" leftIcon={<FiPlus size="24px" />}>
                    New Specialist
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
                    Create a New Specialist
                </Text>
            }
            isDone={false}
        >
            <VStack spacing="12px" align="flex-start">
                <Text variant="header2" color="blackAlpha.900" mb="4px">
                    Specialist Information
                </Text>
                <FormRow label="Employee" placeholder="dropdown" required />
                <FormRow label="Subcategory" placeholder="multi select dropdown" required />
            </VStack>
        </FormModal>
    )
}
