import styled, { css } from 'styled-components'
import { flexbox, layout, color } from 'styled-system'

const getSpace = (props) => {
  const space = props.theme.space
  if (Array.isArray(props.space)) {
    return css`
      margin-bottom: ${space[props.space[1]]};
      & > * {
        &:not(:last-child) {
          margin-right: ${space[props.space[0]]};
        }
      }
    `
  } else {
    switch (props.direction) {
      case 'vertical':
        return css`
          &:not(:last-child) {
            margin-bottom: ${space[props.space]};
          }
        `
      default:
        return css`
          & > * {
            &:not(:last-child) {
              margin-right: ${space[props.space]};
            }
          }
        `
    }
  }
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${color}
  ${flexbox}
	${layout}
	${getSpace}
`

export default Box
