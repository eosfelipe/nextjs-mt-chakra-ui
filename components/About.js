import NextImage from 'next/image'
import {
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  VStack,
  useColorModeValue,
  useBreakpointValue,
  useTheme
} from '@chakra-ui/react'
import { MorphIcon } from 'react-svg-buttons'
import TextReveal from './TextReveal'

const features = [
  {
    id: 1,
    icon: 'ban',
    color: '#D53F8C',
    text: 'Business Planning'
  },
  {
    id: 2,
    icon: 'ban',
    color: '#D53F8C',
    text: 'Financial Planning'
  },
  {
    id: 3,
    icon: 'ban',
    color: '#D53F8C',
    text: 'Market Analysis'
  }
]

const Feature = ({ icon, text }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'}>
        {icon}
      </Flex>
      <Text color={useColorModeValue('dark', 'light')} fontWeight={'normal'}>
        {text}
      </Text>
    </Stack>
  )
}
const About = () => {
  const { colors } = useTheme()
  return (
    <VStack w={'full'} h={'full'} justify={'center'} px={useBreakpointValue({ base: 10, md: 20 })}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} p={5}>
          <Text
            color={'highlight'}
            fontWeight={'normal'}
            fontSize={'md'}
            p={2}
            alignSelf={'flex-start'}
            fontFamily={'mono'}
          >
            {'<about />'}
          </Text>
          <Text
            as={'h1'}
            color={useColorModeValue('dark', 'text')}
            position={'relative'}
            fontWeight={'bold'}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            <TextReveal>A digital Product design agency</TextReveal>
          </Text>
          <Text color={useColorModeValue('dark', 'light')} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illo sequi sint consectetur in repellat
            nesciunt ipsam est. Culpa, error dolore. Fuga, molestiae odit. Hic, voluptatem. Asperiores quidem est ex.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue('dark', 'light')} />}>
            {features.map(feature => (
              <Feature
                key={feature.id}
                icon={<MorphIcon type={feature.icon} color={colors.highlight} size={30} />}
                text={feature.text}
              />
            ))}
          </Stack>
        </Stack>
        <Flex alignItems={'center'} p={5}>
          <Image
            boxSize={'max-content'}
            objectFit="cover"
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            }
          />
          {/* <NextImage
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            alt="feature image"
            width={500}
            height={500}
          /> */}
        </Flex>
      </SimpleGrid>
    </VStack>
  )
}

export default About
