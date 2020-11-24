import styled from 'styled-components'

const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 0.2px solid #ced4da;
  font-size: ${({ theme }) => theme.fontSizes.text[4]};
  line-height: ${({ theme }) => theme.lineHeights.text[4]};
  &:focus {
    outline: none;
    border-color: rgba(23, 162, 184, 0.5);
    box-shadow: 0 0 5px rgba(23, 162, 184, 0.3);
  }
`
export default Input
