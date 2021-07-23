import { Stack, Button, Text, VStack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import TextReveal from './TextReveal'

const Hero = () => {
  return (
    <VStack
      __css={{
        backgroundImage:
          'radial-gradient(#8892b02b 1px, transparent 1px), radial-gradient(#8892b02b 1px, transparent 1px)',
        backgroundPosition: '0 0, 25px 25px',
        backgroundSize: '50px 50px'
      }}
      w={'full'}
      h={'100vh'}
      justify={'center'}
      mt={useBreakpointValue({ base: 6, md: 10 })}
      py={'90px'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
    >
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
          as={'h1'}
          color={useColorModeValue('dark', 'text')}
          position={'relative'}
          fontWeight={'bold'}
          fontSize={useBreakpointValue({ base: '5xl', md: '6xl' })}
        >
          <TextReveal>Major Tom</TextReveal>
        </Text>
        <Text
          color={useColorModeValue('dark', 'light')}
          fontWeight={'bold'}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        >
          <TextReveal>Lorem ipsum, dolor sit amet</TextReveal>
          <TextReveal>consectetur adipisicing elit. Iure, harum?</TextReveal>
        </Text>
        <Stack direction={'row'}>
          <Button variant={'primary'} fontSize={'sm'} fontWeight={'normal'} size={'lg'}>
            Show me more
          </Button>
          <Button variant={'secondary'} fontSize={'sm'} fontWeight={'normal'} size={'lg'}>
            Activate
          </Button>
        </Stack>
      </Stack>
    </VStack>
  )
}

export default Hero
