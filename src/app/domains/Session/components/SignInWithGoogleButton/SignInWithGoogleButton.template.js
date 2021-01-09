import React, { useCallback } from 'react'
import { Button, Box } from '@material-ui/core'
import { auth } from 'service'
import { GoogleOutlined } from '@ant-design/icons'

const SignInWithGoogleButton = () => {
  const signIn = useCallback(async () => {
    try {
      await auth.loginWithGoogle()
    } catch (e) {
      // message.error(e.message)
    }
  }, [auth])
  return (
    <Box py={2} display="flex" justifyContent="center">
      <Button variant="contained" color="primary" onClick={signIn}>
        <GoogleOutlined />
        Sign in with Google
      </Button>
    </Box>
  )
}

export default SignInWithGoogleButton
