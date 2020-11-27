import { TodoListItem } from '../TodoListItem'
import { Text } from 'base-components/Typography'
import { Box } from 'base-components'
import { useStoreContext } from 'app/context'
import empty from './empty.svg'
const TodoList = (props) => {
  const { store } = useStoreContext()

  return (
    <Box direction="vertical" space={4}>
      <ul>
        {store.tasks.length === 0 && (
          <Box justifyContent="center" flexDirection="row">
            <img src={empty} alt="" style={{ width: '50%' }} />
          </Box>
        )}
        {store.tasks &&
          store.tasks.map((item) => (
            <TodoListItem {...item} key={item.id}>
              <Text>{item.text}</Text>
            </TodoListItem>
          ))}
      </ul>
    </Box>
  )
}

export default TodoList
