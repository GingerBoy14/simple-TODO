import { Form, message } from 'antd'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import { auth } from 'service'
import { useUserDispatch } from '../../context'
import types from '../../constants'

const LoginForm = () => {
  const dispatch = useUserDispatch()
  const onFinish = async (values) => {
    const { email, password } = values
    try {
      await auth.logout()
      const res = await auth.login(email, password)
      if (!res.user.emailVerified) {
        throw new Error('User is not confirmed.')
      }
      dispatch({ type: types.USER_LOADING, payload: true })
    } catch (e) {
      console.log(e)
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
