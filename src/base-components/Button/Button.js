import styled, { css } from 'styled-components'

const getType = ({ theme, type }) => {
  const colors = theme.colors.button
  console.log(colors)
  switch (type) {
    case 'primary':
      return css`
        background-color: ${colors.bg[0]};
        color: ${theme.colors.white};
        &:hover {
          background-color: ${colors.hover[0]};
        }
      `
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.secondary};
        border-color: ${colors.bg[1]};
        &:hover {
          color: ${theme.colors.white};
          background-color: ${colors.hover[1]};
        }
      `
    default:
      return css`
        background-color: ${colors.bg[2]};
        color: ${colors.bg[0]};
        font-weight: 600;
        &:hover {
          color: ${colors.bg[0]};
          background-color: ${colors.hover[2]};
        }
      `
  }
}

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.text[4]};
  line-height: ${({ theme }) => theme.lineHeights.text[4]};
  padding: 0.7rem 1.35rem;
  border-radius: 0.5rem;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  outline: none;
  white-space: nowrap;
  width: fit-content;
  cursor: pointer;
  ${getType};
`

export default Button
