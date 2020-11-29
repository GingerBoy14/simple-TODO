import { useEffect } from 'react'
import styled from 'styled-components'
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
`

const TodoListItem = (props) => {
  const { text, id, status } = props
  const { dispatch } = useStoreContext()
  useEffect(() => console.log('stat ' + status.done), [status.done])
  return (
    <Box direction="vertical" space={2}>
      <StyledTodoListItem>
        <Text
          done={status.done}
          important={status.important}
          onClick={() => dispatch({ type: 'SET_DONE', payload: id })}>
          {text}
        </Text>
        <TodoActions todoId={id} />
      </StyledTodoListItem>
    </Box>
  )
}
export default TodoListItem
