import { useForm } from 'react-hook-form'
import { PasswordInput } from '../PasswordInput'
import { EmailInput } from '../EmailInput'
import { SubmitButton } from '../SubmitButton'
import { auth } from 'service'
import { useUserDispatch } from '../../context'
import types from '../../constants'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import React, { useState } from 'react'

const LoginForm = () => {
  const [openMassage, setOpenMassage] = useState(false)

  const dispatch = useUserDispatch()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = handleSubmit(async (values) => {
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
      setOpenMassage(e.message)
      dispatch({ type: types.USER_LOADING, payload: false })
    }
  })
  return (
    <>
      <form onSubmit={onSubmit}>
        <EmailInput register={register} error={errors} />
        <PasswordInput register={register} error={errors} />
        <SubmitButton text="Login" />
      </form>
      <Snackbar
        open={openMassage}
        autoHideDuration={3500}
        onClose={() => setOpenMassage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setOpenMassage(false)} severity="error">
          {openMassage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LoginForm
