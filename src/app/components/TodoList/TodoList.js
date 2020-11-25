import { TodoListItem } from '../TodoListItem'
import { Text } from 'base-components/Typography'

const TodoList = (props) => {
  const data = [
    { text: '3555565dsfds' },
    { text: 'sdf' },
    { text: '3555asdf565dsfds' }
  ]

  return (
    <ul>
      {data.map((item) => (
        <TodoListItem>
          <Text>{item.text}</Text>
        </TodoListItem>
      ))}
    </ul>
  )
}

export default TodoList
