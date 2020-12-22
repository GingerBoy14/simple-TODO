import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import { useUserDispatch } from '../../context'
import type from '../../constants'

const SignUpForm = () => {
  const dispatch = useUserDispatch()
  let history = useHistory()
  const onFinish = async (values) => {
    try {
      dispatch({ type: type.USER_SIGN_UP, payload: values })
      dispatch({ type: type.USER_LOADING, payload: true })
      history.push('verify')
    } catch (e) {
      console.log(e)
    }
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
