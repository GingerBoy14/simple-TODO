import { LoginForm, SignUpForm } from './index.js'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Card, Row, Col, Typography, Form, Button } from 'antd'
const { Title, Text } = Typography

const navigationForm = () => (
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
  return (
    <Form>
      <Row justify="space-around">
        <Col>
          <Form.Item>
            <Link to="/login">
              <Button type="primary" htmlType="submit" size="large">
                Log in
              </Button>
            </Link>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Link to="/signUp">
              <Button htmlType="button" size="large">
                Sign up
              </Button>
            </Link>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export { MainForm }
