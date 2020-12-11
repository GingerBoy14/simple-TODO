import { Input, Button, Form } from 'antd'
import { useStoreContext } from 'context/TodoListContext'
import { addTask } from './action'

const AddTaskForm = () => {
  const { dispatch } = useStoreContext()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    if (values.todoName) {
      dispatch(addTask(values.todoName))
      form.setFieldsValue({ todoName: '' })
    }
  }
  return (
    <Form
      form={form}
      name="addTodoForm"
      layout="inline"
      size="large"
      onFinish={onFinish}>
      <Form.Item
        name="todoName"
        style={{ flex: 1 }}
        hasFeedback
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
