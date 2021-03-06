import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const fonts = {
  body: 'Raleway',
  heading: 'Open Sans',
  mono: 'monospace'
}

const fontWeights = {
  light: 100,
  normal: 400,
  bold: 700
}

export const customTheme = extendTheme({
  fonts,
  fontWeights,
  colors: {
    dark: '#151313', // #0a192f,
    highlight: '#ff0042',
    light: '#ccd6f6',
    text: '#8892b0'
  },
  components: {
    Button
  }
})
