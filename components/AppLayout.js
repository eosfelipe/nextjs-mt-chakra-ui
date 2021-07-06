import { Flex, useColorModeValue } from '@chakra-ui/react'
const AppLayout = ({ children }) => {
  return (
    <Flex
      w={'full'}
      position={'relative'}
      zIndex={1}
      backgroundColor={useColorModeValue('light', 'dark')}
      flexDir={'column'}
    >
      {children}
    </Flex>
  )
}

export default AppLayout
