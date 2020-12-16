import { Form } from 'antd'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import { useUserDispatch } from '../../context'
import type from '../../constants'

const SignUpForm = () => {
  const dispatch = useUserDispatch()

  const onFinish = async (values) => {
    dispatch({ type: type.USER_SIGN_UP, payload: values })
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
      <EmailInput />
      <PasswordInput />
      <SubmitButton text="Sign up" />
    </Form>
  )
}

export default SignUpForm
