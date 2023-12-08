import { Button, Icon, Text, VStack } from '@chakra-ui/react';
import { FormModal } from 'components/Modal/FormModal';
import { BiPencil } from 'react-icons/bi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useForm, SubmitHandler, FormProvider, Controller } from 'react-hook-form';
import axiosClient from 'utils/axiosClient';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { getFormDropdownOptions } from 'utils/getDropdownOptions';
import { FormControl } from 'components/Form/FormControl';

const schema = z.object({
    subcategory: z.number().min(1, { message: 'Subcategory cannot be empty' }),
});
type EditSubcategory = z.infer<typeof schema>

export const EditSubcatModal = ({id} : { id: number }) => {
    const queryClient = useQueryClient()

    const editSolution = useMutation({
        mutationKey: ['add-subcategory'],
        mutationFn: (data: EditSubcategory & { id: number }) =>
            axiosClient.patch('/problem/editSubcategory', data).then(res => console.log(res)),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['add-subcategory'] })
        },
    })
    const subcategoryQuery = useQuery({
        queryKey: ['subcategory'],
        queryFn: () =>
            axiosClient.get('/subcategory/getAll').then(res => res.data),
    })
    const formMethods = useForm<EditSubcategory, typeof schema>({
        resolver: zodResolver(schema),
    })
    
    const formId = "edit-subcategory";
    
    if (subcategoryQuery.isLoading) return <div>Loading...</div>;
    if (subcategoryQuery.isError) return <div>Error</div>;


    const onSubmit: SubmitHandler<EditSubcategory> = async (data) => {
        return await editSolution.mutateAsync({
            subcategory: data.subcategory,
            id: id,
        })
    }

  return (
    <FormModal
        w="26rem"
        triggerButton={
            <Button variant="link_primary" p="0">
                <Icon boxSize="24px" as={BiPencil} ml="8px" />
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
                Create a New Subcategory
            </Text>
        }
        isDone={editSolution.isSuccess}
    >
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)} id={formId}>
                 <FormControl label="Subcategory" required>
                    <Controller
                        name="subcategory"
                        control={formMethods.control}
                        render={({ field: { value, onChange, } }) => {
                            return (
                                    <VStack align="flex-start">
                                    <Dropdown
                                        placeholder="Choose Subcategory"
                                        selectOptions={getFormDropdownOptions(subcategoryQuery.data)}
                                        onChange={e => onChange(e.value)}
                                        value={value}
                                        width="202px"
                                    />
                                    {formMethods.formState.errors.subcategory?.message && (
                                        <Text color="red.500" variant="label1">{formMethods.formState.errors.subcategory?.message as string}</Text>
                                    )}
                                </VStack>
                            );
                        }}
                    />
                </FormControl>
            </form>
        </FormProvider>
    </FormModal>
  )
}
