import React from 'react'
import { Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const PasswordForm = () => {
  return (
    <Form.Item
      name="password"
      rules={[
        { required: true, message: 'Please input your Password!' },
        { min: 6, message: 'Password should contain at least 6 chars' }
      ]}>
      <Input.Password
        size="large"
        placeholder="Password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        autoComplete="current-password"
      />
    </Form.Item>
  )
}

export default PasswordForm
