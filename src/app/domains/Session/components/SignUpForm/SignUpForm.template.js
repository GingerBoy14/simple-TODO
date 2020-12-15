import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import { PasswordForm } from '../PasswordForm'
import { EmailForm } from '../EmailForm'
import { SubmitButton } from '../SubmitButton'

const SignUpForm = (props) => {
  let history = useHistory()
  const onFinish = (values) => {
    const { email, password } = values
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    history.push('/')
    console.log('Received values of form: ', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name="signUpForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <EmailForm />
      <PasswordForm />
      <SubmitButton text="Sign up" />
    </Form>
  )
}

export default SignUpForm
