import { Input, Button, Form } from 'antd'
import { useStoreContext } from 'context'

const AddTaskForm = () => {
  const { dispatch } = useStoreContext()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    if (values.todoName) {
      dispatch({ type: 'ADD_TODO', payload: values.todoName })
      form.setFieldsValue({ todoName: '' })
    }
  }
  return (
    <Form
      form={form}
      name="addTodoForm"
      layout="inline"
      size="large"
      onFinish={onFinish}
      initialValues={{ todoName: '' }}>
      <Form.Item name="todoName" style={{ flex: 1 }}>
        <Input placeholder="What need to be done?" />
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
