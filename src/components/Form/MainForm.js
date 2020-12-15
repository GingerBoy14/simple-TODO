import { Row, Col, Typography, Form, Button } from 'antd'
import { useHistory } from 'react-router-dom'
const { Title, Text } = Typography

const NavigationForm = () => (
  <>
    <Row justify="center">
      <Col>
        <Title level={1}>ToDo List</Title>
      </Col>
    </Row>
    <Row justify="center" gutter={[0, 16]}>
      <Col>
        <Text type="secondary">
          Welcome ToDo List, please login to your account
        </Text>
      </Col>
    </Row>
    <Row justify="space-around"></Row>
  </>
)

const MainForm = () => {
  let history = useHistory()

  const passToLink = (path) => {
    history.push(path)
  }

  return (
    <Form>
      <Row>
        <Col span={24}>
          <NavigationForm />
        </Col>
      </Row>
      <Row justify="space-around">
        <Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              onClick={() => passToLink('/login')}>
              Log in
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button
              htmlType="button"
              size="large"
              onClick={() => passToLink('/signUp')}>
              Sign up
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export { MainForm }
