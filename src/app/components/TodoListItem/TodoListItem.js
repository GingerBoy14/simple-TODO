import styled from 'styled-components'
import { TodoActions } from '../TodoActions'
import { Box } from 'base-components'

const StyledTodoListItem = styled.li`
  border-radius: 0.5rem;
  border: 1px solid rgba(108, 117, 125, 0.6);
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`

const TodoListItem = (props) => {
  const { children, id } = props
  return (
    <Box direction="vertical" space={2}>
      <StyledTodoListItem>
        {children}
        <TodoActions todoId={id} />
      </StyledTodoListItem>
    </Box>
  )
}
export default TodoListItem
