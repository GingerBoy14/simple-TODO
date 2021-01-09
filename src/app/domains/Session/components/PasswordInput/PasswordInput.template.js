import React, { useState } from 'react'
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const PasswordInput = (props) => {
  const { placeholder = 'Password', register, error } = props
  const [showPassword, setShowPassword] = useState(false)
  return (
    <FormControl fullWidth margin="normal" error={error.password}>
      <InputLabel htmlFor="standard-adornment-password">
        {placeholder}
      </InputLabel>
      <Input
        id="standard-adornment-password"
        name="password"
        autoComplete="current-password"
        type={showPassword ? 'text' : 'password'}
        inputRef={register({
          minLength: {
            value: 6,
            message: 'Password should contain at least 6 chars'
          },
          required: 'Please input your Password!'
        })}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error.password && (
        <FormHelperText id="email-error-text">
          {error.password.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default PasswordInput
