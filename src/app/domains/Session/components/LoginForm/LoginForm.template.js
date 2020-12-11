import { Button, Form, Input, Row, Col } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const LoginForm = (props) => {
  const onFinish = (values) => {
    const { email, password } = values
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log('Received values of form: ', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name="signUpForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input size="large" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password
          size="large"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Row justify="center" align="middle">
          <Col xs={8} sm={8} md={7} lg={6} xl={6} xxl={5} justify="center">
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
