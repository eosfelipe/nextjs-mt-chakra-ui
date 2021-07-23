import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { socialMedia } from '../config'
import Icon from './Icon'

const Footer = () => {
  return (
    <Box bg={useColorModeValue('light', 'dark')}>
      <Container>
        <SimpleGrid>
          <Stack>
            <Box>
              <Text>Major Tom</Text>
            </Box>
            <Text>&copy; {new Date().getFullYear()} Major Tom. All rights reserved</Text>
            <Stack>
              {socialMedia &&
                socialMedia.map(
                  ({ name, url }, i) =>
                    url && (
                      <chakra.button
                        key={i}
                        bg={useColorModeValue('dark', 'light')}
                        rounded={'full'}
                        w={8}
                        h={8}
                        as={'a'}
                        href={url}
                        display={'inline-flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        transition={'background 0.3s ease'}
                        _hover={{
                          bg: useColorModeValue('light', 'dark')
                        }}
                      >
                        <Icon name={name} />
                      </chakra.button>
                    )
                )}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
