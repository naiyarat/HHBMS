import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, HStack } from '@chakra-ui/react'
import React from 'react'

interface IFormModal {
    triggerButton: React.ReactElement;
    submitButton: React.ReactElement;
    cancelButton: React.ReactElement;
    title: React.ReactElement;
    isDone: boolean;
    children: React.ReactElement;
    w?: string;
    h?: string;
}

export const FormModal = ({
    triggerButton,
    submitButton,
    cancelButton,
    title,
    isDone,
    children,
    w,
    h
} : IFormModal) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    React.useEffect(() => {
        isDone && onClose()
    }, [isDone, onClose])

    return (
        <>
            {React.cloneElement(triggerButton, { onClick: onOpen })}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                	overflowY={'auto'}
					px="32px"
					pt="24px"
					pb="32px"
					h={h}
					minWidth={w ? w : '55rem'}
					borderRadius="16px"
                >
                    <ModalHeader>
                        {title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>

                    <ModalFooter pb="0px">
                        <HStack spacing="12px" w="100%" justifyContent="center">
                            {submitButton}
                            {React.cloneElement(cancelButton, { onClick: onClose })}
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
