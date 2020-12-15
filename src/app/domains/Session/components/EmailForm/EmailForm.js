import React from 'react'
import { Form, Input } from 'antd'

const EmailForm = () => {
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: 'Please input your Email!' },
        {
          type: 'email',
          message: 'Please input correct email, like example@exp.com'
        }
      ]}>
      <Input size="large" placeholder="Email" autoComplete="username" />
    </Form.Item>
  )
}

export default EmailForm
