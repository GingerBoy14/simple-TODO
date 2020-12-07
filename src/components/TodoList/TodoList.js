import { useState, useEffect } from 'react'
import { List } from 'antd'
import { useStoreContext } from 'context'
import { TodoListItem } from '../TodoListItem'
import SimpleBar from 'simplebar-react'
import { Global, css } from '@emotion/react'
import 'simplebar/dist/simplebar.min.css'

const scrollStyle = css`
  .simplebar-track {
    pointer-events: inherit;
    width: 0.5rem !important;
  }
  .simplebar-scrollbar:before {
    opacity: 1 !important;
    border-radius: 0;
    background-color: #1890ff;
    width: 0.5rem;
  }
  .simplebar-scrollbar.simplebar-visible:before {
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .simplebar-scrollbar.simplebar-hover:before {
    background-color: #40a9ff;
  }
`

const TodoList = () => {
  let style = {}
  const { store } = useStoreContext()
  if (store.tasks.length > 12) {
    style = { height: '70vh' }
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
      temp = temp.filter((item) =>
        item.text.toLowerCase().includes(store.query.toLowerCase())
      )
    }
    setFilteredTasks(temp)
  }

  useEffect(() => filter(store.tasks), [store])
  return (
    <SimpleBar style={{ ...style }} autoHide={false}>
      <Global styles={scrollStyle} />
      <List
        size="large"
        dataSource={filteredTasks}
        renderItem={(item) => <TodoListItem {...item} />}
      />
    </SimpleBar>
  )
}

export default TodoList
