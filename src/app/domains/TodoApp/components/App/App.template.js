import { Col, Row, Spin } from 'antd'
import { TaskCounter } from '../TaskCounter'
import { Filter } from '../Filter'
import { Search } from '../Search'
import { TodoList } from '../List'
import { AddTaskForm } from '../AddTaskForm'
import { memo } from 'react'
import useFirestoreListener from 'hooks'
import types from '../../constants/types'

const TodoApp = () => {
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  return (
    <>
      <Row justify="space-between" gutter={[0, 16]}>
        <Col flex={1}>
          <TaskCounter />
        </Col>
        <Col>
          <Filter />
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col xs={24}>
          <Search />
        </Col>
        <Col xs={24}>{loading ? <Spin /> : <TodoList />}</Col>
      </Row>
      <AddTaskForm />
    </>
  )
}

export default memo(TodoApp)
