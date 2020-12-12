import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { GoogleOutlined } from '@ant-design/icons'

const { Title } = Typography

const SignUpForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Form>
      <Row justify="center">
        <Col>
          <Title level={1}>Sign up</Title>
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
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button htmlType="button" size="large" icon={<GoogleOutlined />}>
              Sign up with Google
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
export { SignUpForm }
