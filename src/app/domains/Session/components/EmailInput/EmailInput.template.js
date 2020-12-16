import React from 'react'
import { Form, Input } from 'antd'

const EmailInput = (props) => {
  const { placeholder = 'Email' } = props
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: 'Please input your Email!' },
        {
          type: 'email',
          message: 'Please input correct email, like example@exp.com'
        }
      ]}
      {...props}>
      <Input size="large" placeholder={placeholder} autoComplete="username" />
    </Form.Item>
  )
}

export default EmailInput
