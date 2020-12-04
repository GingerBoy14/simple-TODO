import { Row, Col } from 'antd'
import { AddTodo } from './AddTodo'
import { Header } from './Header'
import { Filter } from './Filter'
import { Search } from './Search'
import { TodoList } from './TodoList'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={9} xxl={8}>
        <Row gutter={[0, 8]}>
          <Col style={{ width: '100%' }}>
            <Header />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex="auto">
            <Search />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex={1}>
            <TodoList />
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <AddTodo />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App
