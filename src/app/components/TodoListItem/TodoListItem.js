import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { TodoActions } from '../TodoActions'
import { Box } from 'base-components'
import { Text } from '../../../base-components/Typography'
import { useStoreContext } from 'app/context'

const StyledTodoListItem = styled.li`
  border-radius: 0.5rem;
  border: 1px solid rgba(108, 117, 125, 0.6);
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  ${({ pinned }) =>
    pinned &&
    css`
      border-left: 5px solid rgba(23, 162, 184, 0.5);
    `}
`

const TodoListItem = (props) => {
  const { text, id, status } = props
  const { dispatch } = useStoreContext()
  return (
    <Box direction="vertical" space={2}>
      <StyledTodoListItem pinned={status.pinned}>
        <Text
          done={status.done}
          important={status.important}
          onClick={() => dispatch({ type: 'SET_DONE', payload: id })}>
          {text}
        </Text>
        <TodoActions todoId={id} pinned={status.pinned} />
      </StyledTodoListItem>
    </Box>
  )
}
export default TodoListItem
