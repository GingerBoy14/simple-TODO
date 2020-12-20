import { useState } from 'react'
import { Space, Button, Modal, Typography, Form, message } from 'antd'
import { auth } from 'service'
import { EmailInput } from '../EmailInput'

message.config({ maxCount: 2 })

const { Title, Text } = Typography
const ResetPasswordModal = () => {
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
      await auth.sendPasswordResetEmail(value.email)
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
            <EmailInput
              hasFeedback={loading}
              validateStatus={`${errored ? 'error' : 'validation'}`}
              validateTrigger={[
                'onSubmit',
                `${errored ? 'onChange' : 'onSubmit'}`
              ]}
              placeholder="Enter your account email"
            />
          </Form>
        </Space>
      </Modal>
    </>
  )
}
export default ResetPasswordModal
