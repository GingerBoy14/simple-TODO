import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import { AddTodo } from './AddTodo'

const App = () => {
  return (
    <Row>
      <Col span={12} push={6}>
        <AddTodo />
      </Col>
    </Row>
  )
}

export default App
