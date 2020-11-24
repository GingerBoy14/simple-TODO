import styled from 'styled-components'
import { flexbox, layout, color } from 'styled-system'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${color}
  ${flexbox}
	${layout}
`

export default Box
