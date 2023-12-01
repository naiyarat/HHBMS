import { BoxProps, useColorModeValue, Flex, Box, Text, Divider, Image } from "@chakra-ui/react"
import { LinkItems } from "./LinkItems"
import { NavItem } from "./NavItems"
import { useNavigate } from "react-router-dom"

interface SidebarProps extends BoxProps {
    onClose: () => void
  }
  
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const navigate = useNavigate()
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="4" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="red.500">
            HHBMS Helpdesk
          </Text>
          <Image
            boxSize='60px'
            src='https://i.ibb.co/QNkvbLy/mini.jpg'
            alt='mini'
          />
        </Flex>
        <Divider borderColor="blackAlpha.500" w="95%" my="12px" />
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} onClick={() => navigate(link.link)}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
  }