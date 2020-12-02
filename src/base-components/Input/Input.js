import styled from 'styled-components'

const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: none;
  color: ${({ theme }) => theme.colors.typography.text};
  font-size: ${({ theme }) => theme.fontSizes.text[4]};
  line-height: ${({ theme }) => theme.lineHeights.text[4]};
  flex: 1;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.input.bg};
  &:focus {
    outline: none;
  }
`
export default Input
