import React, { useCallback } from 'react'
import { Button, Space, message } from 'antd'
import { auth } from 'service'
import { GoogleOutlined } from '@ant-design/icons'

const SignInWithGoogleButton = () => {
  const signIn = useCallback(async () => {
    try {
      await auth.loginWithGoogle()
    } catch (e) {
      message.error(e.message)
    }
  }, [auth])
  return (
    <Space align="center" direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" onClick={signIn}>
        <GoogleOutlined />
        Sign in with Google
      </Button>
    </Space>
  )
}

export default SignInWithGoogleButton
