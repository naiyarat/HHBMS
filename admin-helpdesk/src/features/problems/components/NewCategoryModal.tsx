import { Button, Divider, Text, VStack } from '@chakra-ui/react';
import { FormModal } from 'components/Modal/FormModal';
import { FiPlus } from 'react-icons/fi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from 'features/calls/components/FormInput';
import { useMutation } from '@tanstack/react-query';
import axiosClient from 'utils/axiosClient';

const schema = z.object({
    category: z.string().min(1, { message: 'name cannot be empty' }),
    description: z.string().optional(),
    subcategory: z.object({
        name: z.string().min(1, { message: 'name cannot be empty' }),
        description: z.string().optional(),
    }).array(),
});
type CreateWithSubcat = z.infer<typeof schema>

export const NewCategoryModal = () => {
    const formId = "create-category";

    const createWithSubcat = useMutation({
        mutationKey: ['create-category'],
        mutationFn: (data: CreateWithSubcat) =>
            axiosClient.post('/category/createWithSubcat', data),
    })
    const formMethods = useForm<CreateWithSubcat, typeof schema>({
        resolver: zodResolver(schema),
    })
    
    const onSubmit: SubmitHandler<CreateWithSubcat> = async (data) => {
        console.log(data)
        return await createWithSubcat.mutateAsync(data);
    }

    return (
        <FormModal
            w="35rem"
            triggerButton={
                <Button variant="primary" w="158px" h="44px" leftIcon={<FiPlus size="24px" />}>
                    New Category
                </Button>
            }
            submitButton={
                <Button
                    variant="primary"
                    w="90px"
                    h="44px"
                    form={formId}
                    type="submit"
                >
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
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)} id={formId}>
                    <VStack spacing="12px" align="flex-start">
                        <Text variant="header2" color="blackAlpha.900" mb="4px">
                            Category Information
                        </Text>
                        <FormInput placeholder="Add name" name="category" label="Name" required/>
                        <FormInput placeholder="Add description" name="description" label="Description"/>
                        <Divider borderColor="blackAlpha.400" my="12px" />
                        <Text variant="header2" color="blackAlpha.900" mb="4px">
                            Subcategory Information #1
                        </Text>
                        <FormInput placeholder="Add name" name="subcategory.0.name" label="Name" required/>
                        <FormInput placeholder="Add description" name="subcategory.0.description" label="Description" />
                        <Divider borderColor="blackAlpha.400" my="12px" />
                        <Text variant="header2" color="blackAlpha.900" mb="4px">
                            Subcategory Information #2
                        </Text>
                        <FormInput placeholder="Add name" name="subcategory.1.name" label="Name" required/>
                        <FormInput placeholder="Add description" name="subcategory.1.description" label="Description" />
                    </VStack>
                </form>
            </FormProvider>
        </FormModal>
    )
}
