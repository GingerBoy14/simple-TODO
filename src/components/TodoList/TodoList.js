import { useState, useEffect } from 'react'
import { List } from 'antd'
import { useStoreContext } from 'context'
import { TodoListItem } from '../TodoListItem'

const TodoList = () => {
  let style = {}
  const { store } = useStoreContext()
  if (store.tasks.length > 10) {
    style = { overflowY: 'scroll', maxHeight: '70vh' }
  }
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)

  //TODO: refactor
  const filter = (tasks) => {
    let temp
    temp = tasks
    if (store.filter === 'todo') {
      temp = tasks.filter(({ status }) => !status.done)
    } else if (store.filter === 'done') {
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
  return (
    <List
      size="large"
      style={{ ...style }}
      dataSource={filteredTasks}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
