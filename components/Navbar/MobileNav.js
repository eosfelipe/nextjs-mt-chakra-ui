import NextLink from 'next/link'
import { Stack, Flex, Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { NAV_ITEMS } from './NAV_ITEMS'

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <NextLink href={href} passHref>
          <Button as={'a'} variant="ghost" fontSize={'sm'} fontWeight={'normal'} _hover={{ color: 'highlight' }}>
            {label}
          </Button>
        </NextLink>
      </Flex>
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('light', 'dark')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

export default MobileNav
