import { Form, Input, Button, Row, Col, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useStoreUserContext } from 'context'
import { useHistory } from 'react-router-dom'
import { firebase } from 'config'

const { Title } = Typography

const Registration = () => {
  const history = useHistory()
  const { dispatch } = useStoreUserContext()

  const onSignUpHandle = async ({ username, email, password }) => {
    try {
      const registrated = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      const userId = registrated.user.uid
      await dispatch({ type: 'SIGN_UP_USER', payload: { userId, username } })
      await dispatch({
        type: 'SIGN_IN_USER_IN_STATE',
        payload: userId
      })
      history.push('/Todo')
    } catch (error) {
      console.log(error.code)
      console.log(error.message)
    }
  }
  const [form] = Form.useForm()

  return (
    <Row justify="center">
      <Col>
        <Form
          form={form}
          name="register"
          className="login-form"
          scrollToFirstError
          initialValues={{
            remember: true
          }}
          size="large"
          onFinish={onSignUpHandle}>
          <Title level={2}>Enter username</Title>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Title level={2}>Enter your email address</Title>
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
                min: 6,
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Registration
