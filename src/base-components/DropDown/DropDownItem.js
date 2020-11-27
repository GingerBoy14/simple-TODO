import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from '../Typography'
import { Box } from '../Box'
import { useStoreContext } from 'app/context'

const StyledDropDownItem = styled.div`
  ${(props) => {
    const colors = props.theme.colors
    switch (props.type) {
      case 'danger':
        return css`
          color: red;
          &:hover {
            background-color: rgba(255, 0, 0, 0.1);
          }
        `
      default:
        return css`
          color: ${colors.primary};
          &:hover {
            background-color: rgba(23, 162, 184, 0.1);
          }
        `
    }
  }};
  cursor: pointer;
  white-space: nowrap;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
`

const DropDownItem = (props) => {
  const { text, todoId, action, ...rest } = props
  const { dispatch } = useStoreContext()
  return (
    <StyledDropDownItem
      {...rest}
      onClick={() => action && dispatch(action(todoId))}>
      <Box space={2} flexDirection="row">
        <Box width={10} alignItems="center">
          <Text>
            <FontAwesomeIcon {...rest} />
          </Text>
        </Box>
        <Text>{text}</Text>
      </Box>
    </StyledDropDownItem>
  )
}

export default DropDownItem
