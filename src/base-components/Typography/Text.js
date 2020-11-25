import styled, { css } from 'styled-components'

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.text[4]};
  line-height: ${({ theme }) => theme.lineHeights.text[4]};
  font-weight: 600;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`

export default Text
