import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { NavButton, CloseButton } from 'react-svg-buttons'
import DarkModeSwitch from '../DarkModeSwitch'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box position={'fixed'} w={'full'} zIndex={2}>
      <Flex
        bg={'transparent'}
        backdropFilter={'blur(10px)'}
        color={useColorModeValue('dark', 'light')}
        minH={'90px'}
        py={{ base: 2 }}
        px={{ base: 4, lg: 10 }}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }} align={'center'}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseButton size={40} color="#D53F8C" /> : <NavButton size={40} color="#D53F8C" />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            ml={3}
          />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('dark', 'light')}
            ml={5}
            p={2}
          >
            Logo
          </Text>
        </Flex>
        <Text color={useColorModeValue('dark', 'light')} p={2} display={['none', 'none', 'block', 'block']}>
          Major Tom
        </Text>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-end' }}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            as={'a'}
            fontSize={'sm'}
            fontWeight={'normal'}
            variant={'link'}
            href={'#'}
          >
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={'normal'}
            color={'light'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300'
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
        <DarkModeSwitch />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Navbar
