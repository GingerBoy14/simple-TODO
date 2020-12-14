import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { GoogleOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const { Title } = Typography

const SignUpForm = () => {
  const [form] = Form.useForm()

  let history = useHistory()

  const onFinish = (values) => {
    history.push('/toDoApp')
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Row justify="center">
        <Col>
          <Title level={1}>Sign up</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="login"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}>
            <Input placeholder="Login" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                pattern: new RegExp('^(?=.*d)(?=.*[a-z])[0-9a-zA-Z]{8,}$'),
                message:
                  'Minimum eight characters, at least one letter and one number:'
              }
            ]}>
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject('The two passwords do not match!')
                }
              })
            ]}>
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
