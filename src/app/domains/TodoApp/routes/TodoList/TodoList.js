import React, { useState, useCallback, useEffect, useRef } from 'react'
import { List } from '../../components/List'
import { useStoreContext } from '../../context'
import useFirestoreListener from 'hooks'
import types from '../../constants/types'
import { Spinner } from 'components'
import { Col, Row } from 'antd'

const TodoList = () => {
  const [filteredTasks, setFilteredTasks] = useState()
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  const store = useStoreContext()
  const list = useRef()

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
  return (
    <Row
      ref={list}
      style={{ flex: 1 }}
      align={filteredTasks.length > 0 ? 'bottom' : 'middle'}>
      <Col span={24}>
        <List
          tasks={filteredTasks}
          height={list.current && list.current.clientHeight}
        />
      </Col>
    </Row>
  )
}

export default TodoList
