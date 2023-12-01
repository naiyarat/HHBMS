import { FlexProps, Flex, Box } from "@chakra-ui/react"

interface NavItemProps extends FlexProps {
    icon: React.ReactNode
    children: string
}
  
export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
      <Box
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'red.400',
            color: 'white',
          }}
          {...rest}>
          {icon && icon}
          <Flex ml="4px">
            {children}
          </Flex>
        </Flex>
      </Box>
    )
  }
  