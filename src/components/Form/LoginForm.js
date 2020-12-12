import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const { Title, Text } = Typography

const LoginForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  return (
    <Form>
      <Row justify="center">
        <Col>
          <Title level={1}>Log in</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="login">
            <Input placeholder="Login" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="password">
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col>
          <Form.Item>
            <Link to="/toDoApp">
              <Button type="primary" htmlType="submit" size="large">
                Log in
              </Button>
            </Link>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button htmlType="button" onClick={onReset} size="large">
              Reset
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}></Col>
      </Row>
    </Form>
  )
}
export { LoginForm }
