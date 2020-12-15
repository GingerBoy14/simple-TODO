import { useState } from 'react'
import { Space, Button, Modal, Typography, Form, Input, message } from 'antd'
import firebase from 'service'
message.config({ maxCount: 2 })

const { Title, Text } = Typography
const ResetPasswordForm = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errored, setErrored] = useState(false)
  const [form] = Form.useForm()
  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
    form.resetFields()
  }
  const onFinish = async (value) => {
    setLoading(true)
    try {
      await firebase.sendPasswordResetEmail(value.email)
      setVisible(false)
      form.resetFields()
    } catch (e) {
      message.error("Can't find this email.")
    }

    setLoading(false)
  }
  const onFinishFailed = () => {
    setErrored(true)
  }
  return (
    <>
      <Space align="center" direction="vertical" style={{ width: '100%' }}>
        <Button type="link" onClick={() => setVisible(true)}>
          Forgot password?
        </Button>
      </Space>

      <Modal
        visible={visible}
        title={<Title level={4}>Restoring password</Title>}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={false}
            onClick={() => form.submit()}>
            Send
          </Button>
        ]}>
        <Space direction="vertical">
          <Text>
            We will send you an email with further instructions on how to reset
            your password
          </Text>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            name="signUpForm"
            form={form}>
            <Form.Item
              name="email"
              hasFeedback={loading}
              validateStatus={`${errored ? 'error' : 'validation'}`}
              validateTrigger={[
                'onSubmit',
                `${errored ? 'onChange' : 'onSubmit'}`
              ]}
              rules={[
                { required: true, message: 'Please input your Email!' },
                {
                  type: 'email',
                  message: 'Please input correct email, like example@exp.com'
                }
              ]}>
              <Input placeholder="Enter your account email" size="large" />
            </Form.Item>
          </Form>
        </Space>
      </Modal>
    </>
  )
}
export default ResetPasswordForm
