import { Input, Button, Form } from 'antd'

const AddTaskForm = (props) => {
  const { onFinish, taskLoading } = props
  const [form] = Form.useForm()
  return (
    <Form
      form={form}
      name="addTodoForm"
      layout="inline"
      size="large"
      onFinish={(value) => onFinish(value, form)}>
      <Form.Item
        name="todoName"
        style={{ flex: 1 }}
        hasFeedback={!taskLoading}
        validateStatus="validating">
        <Input placeholder="What need to be done?" autoComplete="off" />
      </Form.Item>
      <Form.Item noStyle>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddTaskForm
