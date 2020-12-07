import { useStoreContext } from '../../context'
import { Col, List, Row, Typography } from 'antd'
import { TodoListItem } from '../TodoListItem'
import { Input } from 'antd'
import { Search } from '../Search'

const TodoList = () => {
  const { store } = useStoreContext()

  let style = {}
  if (store.tasks.length > 9) {
    style = { overflowY: 'scroll', maxHeight: '550px' }
  }
  return (
    <>
      <Search />
      <List
        size="large"
        bordered
        style={{ ...style, minHeight: '550px' }}
        dataSource={store.tasks}
        renderItem={(item) => <TodoListItem {...item} />}
      />
    </>
  )
}
export default TodoList
