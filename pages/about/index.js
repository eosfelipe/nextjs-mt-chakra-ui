import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
const About = () => {
  return (
    <>
      <Navbar />
      <Flex
        w={'full'}
        h={'100vh'}
        position={'relative'}
        zIndex={1}
        backgroundColor={useColorModeValue('light', 'dark')}
      >
        <Text position={'absolute'} w={'full'} h={'100vh'} top={0} left={0} pt={'90px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum magnam veniam deserunt? Tempora quas
          modi unde rem quis id iste, corporis suscipit fuga itaque et provident sapiente quibusdam at.
        </Text>
      </Flex>
    </>
  )
}

export default About
