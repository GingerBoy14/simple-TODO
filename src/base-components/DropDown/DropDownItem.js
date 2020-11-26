import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from '../Typography'

const StyledDropDownItem = styled.div`
  ${(props) => {
    const colors = props.theme.colors
    switch (props.type) {
      case 'danger':
        return css`
          color: red;
          background-color: rgba(255, 0, 0, 0.3);
        `
      default:
        return css`
          color: ${colors.primary};
          background-color: rgba(23, 162, 184, 0.3);
        `
    }
  }}
`

const DropDownItem = (props) => {
  const { text, ...rest } = props
  return (
    <StyledDropDownItem {...rest}>
      <FontAwesomeIcon {...rest} />
      <Text>{text}</Text>
    </StyledDropDownItem>
  )
}

export default DropDownItem
