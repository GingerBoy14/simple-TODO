import { Row, Col, Grid, Space } from 'antd'
import { AddTodo } from './AddTodo'
import { Header } from './Header'
import { Filter } from './Filter'
import { Search } from './Search'
import List from './TodoList'
import 'antd/dist/antd.css'

const { useBreakpoint } = Grid

const App = () => {
  const screens = useBreakpoint()
  return (
    <Row justify="center">
      <Col
        xs={22}
        xxl={6}
        style={{ maxWidth: `${screens.sm && !screens.xxl && '450px'}` }}>
        <Header />
        <Row gutter={16}>
          <Col flex={1}>
            <Search />
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
        <List />
        <AddTodo />
      </Col>
    </Row>
  )
}

export default App
