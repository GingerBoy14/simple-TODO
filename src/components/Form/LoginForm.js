import React, { useCallback, useContext, useRef } from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Redirect } from 'react-router'
import defaultProject from '../../config'
import { userContext } from '../../context'

const { Title } = Typography

const LoginForm = ({ history }) => {
  const [form] = Form.useForm()
  const password = useRef(null)
  const login = useRef(null)
  const handleLogin = useCallback(
    async (event) => {
      try {
        await defaultProject
          .auth()
          .signInWithEmailAndPassword(
            login.current.props.value,
            password.current.props.value
          )
        history.push('/toDoApp')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  const { currentUser } = useContext(userContext)

  if (currentUser) {
    return <Redirect to="/toDoApp" />
  }
  const onReset = () => {
    form.resetFields()
  }
  return (
    <Form form={form} onFinish={handleLogin}>
      <Row justify="center">
        <Col>
          <Title level={1}>Log in</Title>
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
            <Input placeholder="Login" ref={login} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="password"
            label="Password" /*
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                pattern: new RegExp('^(?=.*d)(?=.*[a-z])[0-9a-zA-Z]{8,}$'),
                message:
                  'Minimum eight characters, at least one letter and one number'
              }
            ]}*/
          >
            <Input.Password
              ref={password}
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
            <Button type="primary" size="large" htmlType="submit">
              Log in
            </Button>
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
