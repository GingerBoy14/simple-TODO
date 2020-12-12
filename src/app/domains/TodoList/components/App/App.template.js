import { Col, Row, Spin } from 'antd'
import { Header } from '../Header'
import { TaskCounter } from '../TaskCounter'
import { Filter } from '../Filter'
import { Search } from '../Search'
import { TodoList } from '../TodoList'
import { AddTaskForm } from '../AddTaskForm'
import React from 'react'
import useFirestoreListener from 'hooks'
import types from '../../constants/types'
import { UserSimpleView } from 'app/domains/User/components'

const TodoApp = () => {
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  return (
    <Row justify="center" style={{ height: '100%' }}>
      <Col xs={24}>
        <Row>
          <Col
            xs={{ order: 2, offset: 0 }}
            sm={{ offset: 4, order: 1 }}
            flex={1}>
            <Header />
          </Col>
          <Col xs={{ order: 1, span: 22 }} sm={22} md={4}>
            <Row justify="end">
              <Col xs={22}>
                <UserSimpleView />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={22} sm={22} md={14} lg={12} xl={9} xxl={8}>
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
      </Col>
    </Row>
  )
}

export default TodoApp
