import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: inline-flex;
  & > button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      margin-left: 0;
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
