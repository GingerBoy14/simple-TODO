/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react'
import { List } from 'antd'
import { useStoreContext } from 'context'
import { TodoListItem } from '../TodoListItem'
import styled from '@emotion/styled'

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
        return item.text.toLowerCase().includes(store.query.toLowerCase())
      })
    }
    setFilteredTasks(temp)
  }

  useEffect(() => filter(store.tasks), [store])
  return (
    <ScrollBar style={{ ...style }}>
      <List
        size="large"
        dataSource={filteredTasks}
        renderItem={(item) => <TodoListItem {...item} />}
      />
    </ScrollBar>
  )
}

const ScrollBar = styled.div`
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: #1890ff;

  -webkit-background-clip: text;
  &:hover {
    background-color: #40a9ff;
  }
  &::-webkit-scrollbar {
    width: 0.35rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: inherit;
  }
`
export default TodoList
