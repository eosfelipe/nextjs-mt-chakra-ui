import { darken, mode, whiten } from '@chakra-ui/theme-tools'
export const ButtonStyles = {
  baseStyle: {},
  sizes: {
    lg: {
      height: 'auto',
      width: '100%'
    }
  },
  variants: {
    primary: props => ({
      bg: 'transparent',
      color: 'highlight',
      border: '1px solid',
      padding: '1.25rem 1.75rem',
      borderRadius: '4px',
      _hover: {
        bg: mode(darken('highlight', 20), whiten('highlight', 20))(props),
        color: 'light',
        boxShadow: 'md'
      }
    }),
    secondary: props => ({
      bg: 'highlight',
      color: 'light',
      padding: '1.25rem 1.75rem',
      borderRadius: '4px',
      letterSpacing: '2px',
      _hover: {
        bg: mode(darken('highlight', 20), whiten('highlight', 20))(props),
        boxShadow: 'md'
      }
    }),
    highlight: props => ({
      bg: 'transparent',
      _hover: {
        boxShadow: 'sm',
        color: 'highlight'
      }
    })
  },
  defaultProps: {}
}
