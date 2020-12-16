import { Col, Row } from 'antd'
import { TaskCounter } from '../../components/TaskCounter'
import { Filter } from '../Filter'
import { TodoList } from '../TodoList'
import { AddTask } from '../AddTask'
import { Search } from '../Search'

const App = () => {
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
        <Col xs={24}>
          <TodoList />
        </Col>
      </Row>
      <AddTask />
    </>
  )
}

export default App
