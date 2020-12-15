import { Form } from 'antd'
import { PasswordForm } from '../PasswordForm'
import { EmailForm } from '../EmailForm'
import { SubmitButton } from '../SubmitButton'
import { useHistory } from 'react-router-dom'
import firebase from 'service'
const LoginForm = (props) => {
  let history = useHistory()
  const onFinish = async (values) => {
    const { email, password } = values
    try {
      await firebase.login(email, password)
    } catch (e) {
      console.log(e)
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
      <EmailForm />
      <PasswordForm />
      <SubmitButton text="Login" />
    </Form>
  )
}

export default LoginForm
