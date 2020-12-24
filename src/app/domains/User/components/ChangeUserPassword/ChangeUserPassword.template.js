import React, { useState } from 'react'
import { Button, Modal, Typography, Form, message, Input } from 'antd'
import { auth } from 'service'
import { PasswordInput } from 'app/domains/Session/components'

const { Title } = Typography

const ChangeUserPassword = (props) => {
  const { visible, setVisible } = props
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [form] = Form.useForm()
  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
    form.resetFields()
  }
  const onFinish = async (value) => {
    setLoading(true)
    try {
      await auth.changePassword(value.confirm, value.password)
      setVisible(false)
      form.resetFields()
    } catch (e) {
      message.error("Can't find this email.")
    }

    setLoading(false)
  }
  return (
    <Modal
      visible={visible}
      title={<Title level={4}>Restoring password</Title>}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          disabled={disabled}
          onClick={() => form.submit()}>
          Change
        </Button>
      ]}>
      <Form onFinish={onFinish} name="signUpForm" form={form}>
        <PasswordInput />

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please input your Password!' },
            { min: 6, message: 'Password should contain at least 6 chars' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') !== value) {
                  setDisabled(false)
                  return Promise.resolve()
                }
                setDisabled(true)
                return Promise.reject('The two passwords are the same!')
              }
            })
          ]}>
          <Input.Password placeholder="New password" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default ChangeUserPassword
