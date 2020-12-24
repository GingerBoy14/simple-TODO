import { TodosProvider } from '../../context'
import { App } from '../App'
import { Col, Row } from 'antd'
import { Header } from '../../components/Header'
import { Profile } from 'app/domains/User/routes'

const TodoApp = () => {
  return (
    <Row style={{ height: '100%' }}>
      <Col span={24} style={{ display: 'flex', flexDirection: 'column' }}>
        <Row>
          <Col
            xs={{ order: 2, offset: 0 }}
            sm={{ order: 1, offset: 4 }}
            flex={1}>
            <Header />
          </Col>
          <Col xs={{ order: 1, span: 24 }} sm={24} md={4}>
            <Profile />
          </Col>
        </Row>
        <Row justify="center" style={{ flex: 1 }}>
          <Col
            xs={24}
            sm={24}
            md={14}
            lg={12}
            xl={9}
            xxl={8}
            style={{ display: 'flex', flexDirection: 'column' }}>
            <TodosProvider store={{ tasks: [], filter: 'all', query: '' }}>
              <App />
            </TodosProvider>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TodoApp
