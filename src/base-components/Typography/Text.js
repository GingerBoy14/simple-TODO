import styled, { css } from 'styled-components'

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.text[4]};
  line-height: ${({ theme }) => theme.lineHeights.text[4]};
  color: ${({ theme }) => theme.colors.typography.text};
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
  ${({ important, theme }) =>
    important &&
    css`
      color: ${theme.colors.primary};
      font-weight: 700;
    `}
`

export default Text
