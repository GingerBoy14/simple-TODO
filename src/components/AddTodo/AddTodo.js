import { Input, Button, Form } from 'antd'
import { useStoreTasksContext, useStoreUserContext } from 'context'

const AddTodo = () => {
  const [form] = Form.useForm()
  const { dispatch } = useStoreTasksContext()
  const { userStore } = useStoreUserContext()
  const userId = userStore.id

  const onFinish = ({ addTodoName }) => {
    addTodoName &&
      dispatch({ type: 'ADD_TODO', payload: { addTodoName, userId } })
    form.setFieldsValue({
      addTodoName: ''
    })
  }
  return (
    <Form form={form} name="add_todo" layout="inline" onFinish={onFinish}>
      <Form.Item name="addTodoName" style={{ flex: 1 }}>
        <Input placeholder="What need to be done?" size="large" />
      </Form.Item>
      <Form.Item noStyle>
        <Button type="primary" htmlType="submit" size="large">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddTodo
