import React from 'react'
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel
} from '@material-ui/core'
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const EmailInput = (props) => {
  const { placeholder, label = 'Email', register, error } = props
  return (
    <FormControl fullWidth margin="normal" error={error.email}>
      <InputLabel htmlFor="email">{label}</InputLabel>
      <Input
        id="email"
        name="email"
        placeholder={placeholder}
        inputRef={register({
          required: 'Please input your Email!',
          pattern: {
            value: re,
            message: 'Please input correct email, like example@exp.com'
          }
        })}
      />
      {error.email && (
        <FormHelperText id="email-error-text">
          {error.email.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default EmailInput
