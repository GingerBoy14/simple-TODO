import { Col, Row } from 'antd'
import { TaskCounter } from '../TaskCounter'
import { Filter } from '../../routes/Filter'
import { TodoList } from '../../routes/TodoList'
import { AddTask } from '../../routes/AddTask'
import { Search } from '../../routes/Search'

const TodoApp = () => {
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

export default TodoApp
