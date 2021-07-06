import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Side from './Side'
import { email } from '../config'

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => useColorModeValue(theme.colors.dark, theme.colors.light)};
  }

  a {
    color: ${({ theme }) => useColorModeValue(theme.colors.dark, theme.colors.light)};
    margin: 20px auto;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    letter-spacing: 0.3em;
    writing-mode: vertical-rl;
    transition: all 0.25s ease-in-out;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.highlight};
      transform: translateY(-3px);
    }
  }
`

const Email = () => {
  return (
    <Side orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </Side>
  )
}

export default Email
