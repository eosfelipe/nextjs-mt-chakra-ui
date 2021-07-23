import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '30px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '30px')};
  z-index: 10;
  color: ${({ theme }) => useColorModeValue(theme.colors.dark, theme.colors.light)};

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '15px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '15px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const Side = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>
      <>{children}</>
    </StyledSideElement>
  )
}

export default Side
