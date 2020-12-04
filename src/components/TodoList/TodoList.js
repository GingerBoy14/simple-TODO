import { List } from 'antd'
import { useStoreContext } from '../../context'
import { TodoListItem } from '../TodoListItem'
import { useEffect, useState } from 'react'

const TodoList = () => {
  const { store } = useStoreContext()
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)

  const filter = (tasks) => {
    let temp
    if (store.filter === 'all') {
      temp = tasks
    }
    if (store.filter === 'active') {
      temp = tasks.filter(({ status }) => !status.done)
    }
    if (store.filter === 'done') {
      temp = tasks.filter(({ status }) => status.done)
    }
    if (store.query.length > 0) {
      temp = temp.filter((item) => {
        return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
      })
    }
    setFilteredTasks(temp)
  }

  useEffect(() => filter(store.tasks), [store])

  let style = {}
  if (store.tasks.length > 9) {
    style = { overflowY: 'scroll', maxHeight: '1000px' }
  }
  return (
    <List
      bordered
      dataSource={filteredTasks}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
