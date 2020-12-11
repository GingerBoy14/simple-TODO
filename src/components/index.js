import { Row, Col, Spin } from 'antd'
import { AddTaskForm } from './AddTaskForm'
import { Header } from './Header'
import { TodoList } from './TodoList'
import { TaskCounter } from './TaskCounter'
import { Filter } from './Filter'
import { Search } from './Search'
import useFirestoreListener from '../hook'
import types from 'constants/types'

const App = () => {
  const { loading } = useFirestoreListener('tasks', types.SET_TASKS, {
    func: 'orderBy',
    fieldPath: 'timestamp'
  })
  return (
    <Row justify="center" style={{ height: '100%' }}>
      <Col xs={22} sm={22} md={14} lg={12} xl={9} xxl={8}>
        <Header>
          <Row justify="space-between" gutter={[0, 16]}>
            <Col flex={1}>
              <TaskCounter />
            </Col>
            <Col>
              <Filter />
            </Col>
          </Row>
        </Header>
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

export default App
