import { TodosProvider } from '../../context'
import { App } from '../App'
import { Col, Row } from 'antd'
import { Header } from '../../components/Header'
import { UserSimpleView } from 'app/domains/User/components'

const TodoApp = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col
            xs={{ order: 2, offset: 0 }}
            sm={{ offset: 4, order: 1 }}
            flex={1}>
            <Header />
          </Col>
          <Col xs={{ order: 1, span: 24 }} sm={24} md={4}>
            <UserSimpleView />
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={14} lg={12} xl={9} xxl={8}>
        <TodosProvider store={{ tasks: [], filter: 'all', query: '' }}>
          <App />
        </TodosProvider>
      </Col>
    </Row>
  )
}

export default TodoApp
