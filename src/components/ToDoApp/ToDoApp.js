import { Col, Row, Spin } from 'antd'
import { Search, Header, TodoList, AddTodo } from 'components'

const ToDoApp = ({ loading }) => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col flex="auto">
            <Row gutter={[0, 8]}>
              <Col flex="auto">
                <Search />
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
                  <TodoList />
                )}
              </Col>
            </Row>
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
export default ToDoApp
