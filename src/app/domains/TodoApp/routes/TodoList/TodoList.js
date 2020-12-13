import React, { useState, useCallback, useEffect } from 'react'
import { Space, Spin } from 'antd'
import { List } from '../../components/List'
import { useStoreContext } from '../../context'
import useFirestoreListener from 'hooks'
import types from '../../constants/types'

const TodoList = () => {
  const store = useStoreContext()
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  //TODO: refactor
  const filter = useCallback(
    (tasks) => {
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
    },
    [store, setFilteredTasks]
  )

  useEffect(() => filter(store.tasks), [store, filter])

  if (loading) {
    return (
      <Space align="center" direction="vertical" style={{ width: '100%' }}>
        <Spin />
      </Space>
    )
  }
  return <List tasks={filteredTasks} />
}

export default TodoList
