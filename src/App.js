import 'antd/dist/antd.css'
import { Row, Col, Card, Spin } from 'antd'
import { useState } from 'react'
import { FetchData } from './hook'
import { AddTodo, Header, Search, TodoList } from './components'
import { useStoreContext } from 'context'

const App = () => {
  const [loading, setLoading] = useState(true)
  const { store, dispatch } = useStoreContext()
  FetchData({ loading, setLoading })
  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={8} xxl={7}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Header store={store} dispatch={dispatch} />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex="auto">
            <Card bodyStyle={{ padding: '8px' }}>
              <Row gutter={[0, 8]}>
                <Col flex="auto">
                  <Search dispatch={dispatch} />
                </Col>
              </Row>
              <Row>
                <Col flex="auto">
                  {loading ? (
                    <Spin
                      tip="Loading..."
                      style={{ margin: '0 auto', display: 'block' }}
                    />
                  ) : (
                    <TodoList store={store} dispatch={dispatch} />
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <AddTodo dispatch={dispatch} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App
