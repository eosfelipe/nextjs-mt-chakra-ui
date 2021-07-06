import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/react'
import { socialMedia } from '../config'
import Icon from './Icon'
import Side from './Side'

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => useColorModeValue(theme.colors.dark, theme.colors.light)};
  }

  li {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        fill: ${({ theme }) => useColorModeValue(theme.colors.dark, theme.colors.light)};
        width: 20px;
        height: 20px;
        transition: all 0.25s ease-in-out;
        &:hover {
          fill: ${({ theme }) => theme.colors.highlight};
          transform: translateY(-3px);
        }
      }
    }
  }
`

const Social = () => {
  return (
    <Side orientation="left">
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(
            ({ name, url }, i) =>
              url && (
                <li key={i}>
                  <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                    <Icon name={name} />
                  </a>
                </li>
              )
          )}
      </StyledSocialList>
    </Side>
  )
}

export default Social
