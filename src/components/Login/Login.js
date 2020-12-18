import { Form, Input, Checkbox, Button, Row, Col, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Route, Link, useHistory } from 'react-router-dom'
import { useStoreUserContext } from 'context'
import { firebase } from 'config'
import { ResetPassword } from '../index'

const { Title } = Typography

const Login = () => {
  const history = useHistory()
  const { dispatch } = useStoreUserContext()

  const onSignInHandle = async ({ email, password }) => {
    try {
      const logined = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      const userId = logined.user.uid
      await dispatch({ type: 'SIGN_IN_USER_IN_STATE', payload: userId })
      history.push('/Todo')
    } catch (error) {
      console.log(error.code)
      console.log(error.message)
    }
  }

  return (
    <Row justify="center">
      <Col>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          size="large"
          onFinish={onSignInHandle}>
          <Title level={2}>Enter email address</Title>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your email address!'
              }
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email address"
            />
          </Form.Item>
          <Title level={2}>Enter password</Title>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/ResetPassword">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Route exact path="/ResetPassword" component={ResetPassword} />
      </Col>
    </Row>
  )
}

export default Login
