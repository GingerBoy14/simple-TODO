import styled from 'styled-components'
const ButtonGroup = styled.div`
  display: inline-flex;
  & > button {
    border-radius: 0;
    &:first-child {
      border-bottom-left-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
    }
    &:last-child {
      border-bottom-right-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }
`

export default ButtonGroup
