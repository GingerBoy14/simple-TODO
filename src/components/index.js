import { Row, Col } from 'antd'
import { AddTaskForm } from './AddTaskForm'
import { Header } from './Header'
import { TodoList } from './TodoList'
import { TaskCounter } from './TaskCounter'
import { Filter } from './Filter'
import { Search } from './Search'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Row justify="center">
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
          <Col xs={24}>
            <TodoList />
          </Col>
        </Row>
        <AddTaskForm />
      </Col>
    </Row>
  )
}

export default App
