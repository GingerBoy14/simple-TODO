import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Typography } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const { Title } = Typography

const LoginForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  return (
    <>
      <Title></Title>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="login"
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder="Login" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true
            }
          ]}>
          <Input
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export { LoginForm }
