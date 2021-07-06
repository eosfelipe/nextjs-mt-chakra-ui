import React, { Children } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Stack, useColorModeValue } from '@chakra-ui/react'
import { NAV_ITEMS } from './NAV_ITEMS'

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)

  const color = asPath === props.href || asPath === props.as ? 'highlight' : ''

  return (
    <NextLink {...props}>
      {React.cloneElement(child, {
        color: color || null
      })}
    </NextLink>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('dark', 'light')
  const linkHoverColor = useColorModeValue('pink.400', 'pink.400')
  const popoverContentBgColor = useColorModeValue('light', 'dark')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <ActiveLink href={navItem.href} passHref>
            <Button
              as={'a'}
              variant="highlight"
              fontSize={'md'}
              fontWeight={'normal'}
              aria-label={navItem.aria}
              color={'inherit'}
            >
              {navItem.label}
            </Button>
          </ActiveLink>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
