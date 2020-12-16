import 'antd/dist/antd.css'
import { Input, Button, Form } from 'antd'
import { useStoreContext } from 'context'
import { useAuth } from '../../context/AuthContext'

const AddTodo = () => {
  const [form] = Form.useForm()
  const { dispatch } = useStoreContext()
  const { currentUser } = useAuth()
  const onFinish = (values) => {
    if (values.addTodoName)
      dispatch({
        type: 'ADD_TODO',
        payload: {
          addTodoName: values.addTodoName,
          uid: currentUser.uid
        }
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
