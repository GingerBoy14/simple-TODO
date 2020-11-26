import { TodoListItem } from '../TodoListItem'
import { Text } from 'base-components/Typography'
import { Box } from 'base-components'

const TodoList = (props) => {
  const data = [
    { text: '3555565dsfds' },
    { text: 'sdf' },
    { text: '3555asdf565dsfds' }
  ]

  return (
    <Box direction="vertical" space={4}>
      <ul>
        {data.map((item) => (
          <TodoListItem key={item.text}>
            <Text>{item.text}</Text>
          </TodoListItem>
        ))}
      </ul>
    </Box>
  )
}

export default TodoList
