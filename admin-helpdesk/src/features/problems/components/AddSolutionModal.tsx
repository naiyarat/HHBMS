import { Button, Text } from '@chakra-ui/react';
import { FormModal } from 'components/Modal/FormModal';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from 'features/calls/components/FormInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from 'utils/axiosClient';

const schema = z.object({
    solution: z.string().min(1, { message: 'Solution cannot be empty' }),
});
type AddSolution = z.infer<typeof schema>

export const AddSolutionModal = ({ id }: { id: number }) => {
    const queryClient = useQueryClient()

    const addSolution = useMutation({
        mutationKey: ['add-solution'],
        mutationFn: (data: AddSolution & { id: number }) =>
            axiosClient.post('/problem/addSolution', data).then(res => console.log(res)),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['add-solution'] })
        },
    })
    const formMethods = useForm<AddSolution, typeof schema>({
        resolver: zodResolver(schema),
    })
    
    const formId = "add-solution";

    const onSubmit: SubmitHandler<AddSolution> = async (data) => {
        return await addSolution.mutateAsync({
            solution: data.solution,
            id: id,
        })
    }

    return (
        <FormModal
            w="27rem"
            triggerButton={
                <Button variant="link_primary">
                    + Add Solution
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
                    Add Solution
                </Text>
            }
            isDone={addSolution.isSuccess}
        >
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)} id={formId}>
                    <FormInput placeholder="Add solution" name="solution" label="Solution" required/>
                </form>
            </FormProvider>
        </FormModal>
    )
}
