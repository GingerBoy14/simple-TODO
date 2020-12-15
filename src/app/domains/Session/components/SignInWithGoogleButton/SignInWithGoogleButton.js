import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Space } from 'antd'
import firebase from 'service'
import { GoogleOutlined } from '@ant-design/icons'

const SignInWithGoogleButton = () => {
  let history = useHistory()
  const signIn = useCallback(async () => {
    try {
      await firebase.loginWithGoogle()
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }, [firebase])
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
