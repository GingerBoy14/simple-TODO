import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Col, Row } from 'antd'
import { useDocumentListener } from 'hooks'
import { Spinner } from 'components'
import { useUserContext } from 'app/domains/Session/context'
import { List } from '../../components/List'
import { useStoreContext } from '../../context'
import types from '../../constants/types'
import { useHeightDifference } from '../../hooks'

const TodoList = () => {
  const [filteredTasks, setFilteredTasks] = useState()
  const [listHeight, setListHeight] = useState()
  const { userProfile } = useUserContext()
  const { loading } = useDocumentListener(
    'userTasks',
    userProfile.tasksId,
    types.SET_TASKS
  )
  const store = useStoreContext()
  const list = useRef()
  const height = useHeightDifference()
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
  useEffect(
    () =>
      list.current &&
      setListHeight(
        height > 0
          ? list.current.clientHeight
          : list.current.clientHeight + height
      ),
    [list]
  )
  // show how useCallback works
  // need to
  // useEffect(() => console.log('rerender'), [filter])
  console.log(loading)
  if (loading && !listHeight) {
    return <Spinner />
  }
  return (
    <Row
      ref={list}
      style={{ flex: 1 }}
      align={filteredTasks.length > 0 ? 'top' : 'middle'}>
      <Col span={24}>
        <List tasks={filteredTasks} height={listHeight} />
      </Col>
    </Row>
  )
}

export default TodoList
