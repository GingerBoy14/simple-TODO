import React, { useState, useCallback, useEffect } from 'react'
import { List } from '../../components/List'
import { useStoreContext } from '../../context'
import useFirestoreListener from 'hooks'
import types from '../../constants/types'
import { Spinner } from 'components'

const TodoList = () => {
  const [filteredTasks, setFilteredTasks] = useState()
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  const store = useStoreContext()

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
    return <Spinner />
  }
  return <List tasks={filteredTasks} />
}

export default TodoList
