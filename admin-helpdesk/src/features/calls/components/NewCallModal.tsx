import { Button, Divider, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import { FormModal } from 'components/Modal/FormModal'
import { zodResolver } from '@hookform/resolvers/zod'

import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { FormControl } from 'components/Form/FormControl'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormInput } from './FormInput'
import { Dropdown } from 'components/Dropdown/Dropdown'
import { getFormDropdownOptions, getProblemDropdownOptions, getSerialNumberOptions } from 'utils/getDropdownOptions'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axiosClient from 'utils/axiosClient'
import { FormSingleDatePicker } from 'components/Datepicker/Datepicker'
import { CreateCallWithProblemRequest } from '../types/CreateCallWithProblemRequestType'
import { FormNumberInput } from './FormNumberInput'

const schema = z.object({
    caller: z.number().min(1, { message: 'Caller cannot be empty' }),
    operator: z.number().min(1, { message: 'Operator cannot be empty' }),
    timeOfCall: z.date(),
    description: z.string().optional(),
    problem: z.object({
        id: z.number()
    }).or(
        z.object({
                topic: z.string().min(1, { message: 'Topic cannot be empty' }),
                description: z.string().optional(),
                subcategory: z.number().min(1, { message: 'Subcategory cannot be empty' }),
                equipmentSerialNo: z.string().min(1),
                resolutionTime: z.number().optional(),
                solution: z.string().optional(),
                specialist: z.number().optional(),
        })
    ),
});
type CreateCall = z.infer<typeof schema>

export const NewCallModal = () => {
    const formId = "create-call-with-problem";
    const [ isNewProblem, setIsNewProblem ] = React.useState('true')
    const [ hasSolution, setHasSolution ] = React.useState('true')
    const formMethods = useForm<CreateCall, typeof schema>({
        resolver: zodResolver(schema),
    })
    const queryClient = useQueryClient()

    const createCallWithProblem = useMutation({
        mutationKey: ['call-with-problem'],
        mutationFn: (data: CreateCallWithProblemRequest) =>
            axiosClient.post('/call/createWithProblem', data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['call-with-problem'] })
        },
    })
    const subcategoryQuery = useQuery({
        queryKey: ['subcategory'],
        queryFn: () =>
            axiosClient.get('/subcategory/getAll').then(res => res.data),
    })
    const employeeQuery = useQuery({
        queryKey: ['employee'],
        queryFn: () =>
            axiosClient.get('/employee/getAll').then(res => res.data),
    })
    const specialistQuery = useQuery({
        queryKey: ['specialist'],
        queryFn: () =>
            axiosClient.get('/specialist/getAll').then(res => res.data),
    })
    const problemQuery = useQuery({
        queryKey: ['problem'],
        queryFn: () =>
            axiosClient.get('/problem/getAll').then(res => res.data),
    })
    const equipmentQuery = useQuery({
        queryKey: ['equipment'],
        queryFn: () =>
            axiosClient.get('/equipment/getAll').then(res => res.data),
    })

    if (subcategoryQuery.isLoading || employeeQuery.isLoading || problemQuery.isLoading || specialistQuery.isLoading || equipmentQuery.isLoading) return <div>Loading...</div>;
    if (subcategoryQuery.isError || employeeQuery.isError || problemQuery.isError || specialistQuery.isError || equipmentQuery.isError) return <div>Error</div>;


    const onSubmit: SubmitHandler<CreateCallWithProblemRequest> = async (data) => {
        const req: any = data
        if ('specialist' in req.problem && typeof req.problem.specialist === 'undefined') {
            req.problem.specialist = null
            if (req.problem.resolutionTime === 0) {
                req.problem.resolutionTime = null
            }
        }
        return await createCallWithProblem.mutateAsync(data)
    }

  return (
    <FormModal
        w="28rem"
        triggerButton={
            <Button variant="primary" w="118px" h="44px" leftIcon={<FiPlus size="24px" />}>
                New Call
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
                Create a New Call
            </Text>
        }
        isDone={createCallWithProblem.isSuccess}
    >
        <VStack spacing="12px" align="flex-start" w="100%">
            <Text variant="header2" color="blackAlpha.900" mb="4px">
                Call Information
            </Text>
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)} id={formId}>
                    <VStack spacing="8px" w="100%" align="flex-start">
                            <FormControl label="Caller" required>
                                <Controller
                                    name="caller"
                                    control={formMethods.control}
                                    render={({ field: { value, onChange, } }) => {
                                        return (
                                             <VStack align="flex-start">
                                                <Dropdown
                                                    placeholder="Choose Caller"
                                                    selectOptions={getFormDropdownOptions(employeeQuery.data.filter((row: any) => row.title !== "operator"))}
                                                    onChange={e => onChange(e.value)}
                                                    value={value}
                                                    width="202px"
                                                />
                                                {formMethods.formState.errors.caller?.message && (
                                                    <Text color="red.500" variant="label1">{formMethods.formState.errors.caller?.message as string}</Text>
                                                )}
                                            </VStack>
                                        );
                                    }}
                                />
                            </FormControl>
                            <FormControl label="Operator" required>
                                <Controller
                                    name="operator"
                                    control={formMethods.control}
                                    render={({ field: { value, onChange, } }) => {
                                        return (
                                             <VStack align="flex-start">
                                                <Dropdown
                                                    placeholder="Choose Operator"
                                                    selectOptions={getFormDropdownOptions(employeeQuery.data.filter((row: any) => row.title === "operator"))}
                                                    onChange={e => onChange(e.value)}
                                                    value={value}
                                                    width="202px"
                                                />
                                                {formMethods.formState.errors.operator?.message && (
                                                    <Text color="red.500" variant="label1">{formMethods.formState.errors.operator?.message as string}</Text>
                                                )}
                                            </VStack>
                                           
                                        );
                                    }}
                                />
                            </FormControl>
                            <FormControl label="Time of Call" required>
                                <FormSingleDatePicker defaultValue={new Date()} control={formMethods.control} name={'timeOfCall'} formState={formMethods.formState} errorField={'timeOfCall'}/>
                            </FormControl>
                            <FormInput placeholder="description" name="description" label="Description" required={false} />
                            <Divider borderColor="blackAlpha.400" my="12px" />
                            <Text variant="header2" color="blackAlpha.900" mb="4px">
                                Problem Information
                            </Text>
                            <RadioGroup
                                onChange={(value) => {
                                    setIsNewProblem(value);
                                    formMethods.resetField('problem')
                                }}
                                value={isNewProblem}
                                colorScheme="red"
                            >
                                <Stack direction="row">
                                    <Radio value="true"> 
                                        <Text variant="header3">
                                            New
                                        </Text>
                                    </Radio>
                                    <Radio value="false">
                                        <Text variant="header3">
                                            Old 
                                        </Text>
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                            {isNewProblem === "true" ? (
                                <>  
                                    <FormInput placeholder="topic" name="problem.topic" label="Topic" />
                                    <FormInput placeholder="lorem ipsum" name="problem.description" label="Description" required={false}/>
                                    <FormControl label="Subcategory" required>
                                        <Controller
                                            name="problem.subcategory"
                                            control={formMethods.control}
                                            render={({ field: { value, onChange } }) => {
                                                return (
                                                    <VStack align="flex-start">
                                                        <Dropdown
                                                            placeholder="Choose Subcategory"
                                                            selectOptions={getFormDropdownOptions(subcategoryQuery.data)}
                                                            onChange={e => onChange(e.value)}
                                                            value={value}
                                                            width="202px"
                                                        />
                                                        {formMethods.formState.errors.problem?.root?.message && (
                                                            <Text color="red.500" variant="label1">{formMethods.formState.errors.problem.root.message as string}</Text>
                                                        )}
                                                    </VStack>
                                                );
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl label="Serial Number" required>
                                        <Controller
                                            name="problem.equipmentSerialNo"
                                            control={formMethods.control}
                                            render={({ field: { value, onChange } }) => {
                                                return (
                                                    <VStack align="flex-start">
                                                        <Dropdown
                                                            placeholder="Choose serial number"
                                                            selectOptions={getSerialNumberOptions(equipmentQuery.data)}
                                                            onChange={e => onChange(e.value)}
                                                            value={value}
                                                            width="202px"
                                                        />
                                                        {formMethods.formState.errors.problem?.root?.message && (
                                                            <Text color="red.500" variant="label1">{formMethods.formState.errors.problem?.root?.message as string}</Text>
                                                        )}
                                                    </VStack>
                                                );
                                            }}
                                        />
                                    </FormControl>
                                    <RadioGroup onChange={setHasSolution} value={hasSolution} colorScheme="red" my="6px">
                                        <Stack direction='row'>
                                            <Radio value="true"> 
                                                <Text variant="header3">
                                                    Solved
                                                </Text>
                                            </Radio>
                                            <Radio value="false"> 
                                                <Text variant="header3">
                                                    Unsolved
                                                </Text>
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                    {hasSolution === "true" && (
                                        <>
                                            <FormNumberInput placeholder="in seconds" name="problem.resolutionTime" label="Resolution Time" />
                                            <FormInput placeholder="text" name="problem.solution" label="Solution" />
                                            <FormControl label="Specialist" required>
                                                <Controller
                                                    name="problem.specialist"
                                                    control={formMethods.control}
                                                    render={({ field: { value, onChange, } }) => {
                                                        return (
                                                            <VStack align="flex-start">
                                                                <Dropdown
                                                                    placeholder="Choose Specialist"
                                                                    selectOptions={getFormDropdownOptions(specialistQuery.data)}
                                                                    onChange={e => onChange(e.value)}
                                                                    value={value}
                                                                    width="202px"
                                                                />
                                                            </VStack>
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                        </>
                                    )}
                                </>
                            ) : (
                                <FormControl label="Problem Id" required>
                                    <Controller
                                        name="problem.id"
                                        control={formMethods.control}
                                        render={({ field: { value, onChange, } }) => {
                                            return (
                                                <VStack align="flex-start">
                                                    <Dropdown
                                                        placeholder="Choose Id"
                                                        selectOptions={getProblemDropdownOptions(problemQuery.data)}
                                                        onChange={e => onChange(e.value)}
                                                        value={value}
                                                        width="202px"
                                                    />
                                                    {formMethods.formState.errors.problem?.root?.message && (
                                                        <Text color="red.500" variant="label1">{formMethods.formState.errors.problem?.root?.message as string}</Text>
                                                    )}
                                                </VStack>
                                            );
                                        }}
                                    />
                                </FormControl>
                            )}
                    </VStack>
                </form>
            </FormProvider>
        </VStack>
    </FormModal>
  )
}
