import { Form, message } from 'antd'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import firebase from 'service'
import { useUserDispatch } from '../../context'
import types from '../../constants'

const LoginForm = () => {
  const dispatch = useUserDispatch()
  const onFinish = async (values) => {
    const { email, password } = values
    try {
      dispatch({ type: types.USER_LOADING, payload: true })
      await firebase.login(email, password)
    } catch (e) {
      message.error(e.message)
      dispatch({ type: types.USER_LOADING, payload: false })
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name="loginForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <EmailInput />
      <PasswordInput />
      <SubmitButton text="Login" />
    </Form>
  )
}

export default LoginForm
