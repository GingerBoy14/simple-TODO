import { List } from 'antd'
import { useStoreContext } from '../../context'
import TodoListItem from '../TodoListItem'

const TodoList = () => {
  const { store } = useStoreContext()

  let style = {}
  if (store.tasks.length > 9) {
    style = { overflowY: 'scroll', maxHeight: '550px' }
  }
  return (
    <List
      size="large"
      style={{ ...style, alignItems: 'center', padding: '5px 0' }}
      dataSource={store.tasks}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
