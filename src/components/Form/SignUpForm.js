import React, { useRef, useCallback, useState } from 'react'
import { Form, Input, Button, Typography, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { GoogleOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router'
import { useUserContext } from '../../context'

import 'firebase/auth'

const { Title } = Typography

const SignUpForm = ({ history }) => {
  console.log(history)
  const [form] = Form.useForm()
  const { dispatch } = useUserContext()
  const password = useRef(null)
  const login = useRef(null)

  const handleSignUp = useCallback(
    async (event) => {
      try {
        await dispatch({
          type: 'SIGNUP_USER',
          payload: {
            email: login.current.props.value,
            password: password.current.props.value,
            history: history
          }
        })
      } catch (error) {
        alert(error)
      }
      history.push('/toDoApp')
    },
    [history]
  )

  const SignUpWithGoogle = () => {
    dispatch({ type: 'SIGNUP_USER_WITH_GOOGLE', payload: history })
  }
  return (
    <Form form={form} onFinish={handleSignUp}>
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
                  'Minimum eight characters, at least one letter and one number:'
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
            <Button
              htmlType="button"
              size="large"
              icon={<GoogleOutlined />}
              onClick={SignUpWithGoogle}>
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
export default withRouter(SignUpForm)
