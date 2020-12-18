import { Form, Input, Button, Row, Col, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Title } = Typography

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  const [form] = Form.useForm()
  return (
    <Row justify="center">
      <Col>
        <Form
          form={form}
          initialValues={{
            remember: true
          }}
          size="large"
          onFinish={onFinish}>
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
                message: 'Please input your E-mail!'
              }
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email address"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default ResetPassword
