import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import { useUserDispatch } from '../../context'
import type from '../../constants'

const SignUpForm = () => {
  const dispatch = useUserDispatch()
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = handleSubmit(async (values) => {
    try {
      dispatch({ type: type.USER_SIGN_UP, payload: values })
      dispatch({ type: type.USER_LOADING, payload: true })
      history.push('verify')
    } catch (e) {
      console.log(e)
    }
  })
  return (
    <form onSubmit={onSubmit}>
      <EmailInput register={register} error={errors} />
      <PasswordInput register={register} error={errors} />
      <SubmitButton text="Sign up" />
    </form>
  )
}

export default SignUpForm
