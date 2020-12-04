import { List } from 'antd'
import { useStoreContext } from '../../context'
import { TodoListItem } from '../TodoListItem'

const TodoList = () => {
  const { store } = useStoreContext()

  let style = {}
  if (store.tasks.length > 9) {
    style = { overflowY: 'scroll', maxHeight: '600px' }
  }
  return (
    <List
      bordered
      dataSource={store.tasks}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
