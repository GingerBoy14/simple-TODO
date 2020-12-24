import { Col, Row, Typography } from 'antd'
const { Title } = Typography

const Header = (props) => {
  const { children } = props
  return (
    <Row>
      <Col flex={1}>
        <Row justify="center">
          <Col>
            <Title>Todo List</Title>
          </Col>
        </Row>
      </Col>
      {children && <Col xs={24}>{children}</Col>}
    </Row>
  )
}

export default Header
