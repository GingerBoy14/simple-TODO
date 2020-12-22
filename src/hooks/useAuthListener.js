import { useState, useEffect, useCallback } from 'react'
import { auth } from 'service'
import { useUserContext, useUserDispatch } from 'app/domains/Session/context'
import type from 'app/domains/Session/constants'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

const useAuthListener = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useUserDispatch()
  const userContext = useUserContext()
  let history = useHistory()
  const handleLogin = useCallback(
    async (user) => {
      // dispatch({ type: type.USER_LOADING, payload: true })
      let userProfile = await auth.getUser(user)
      if (!userProfile.name) {
        await createUser(user, true)
        userProfile = await auth.getUser(user)
        dispatch({ type: type.SET_USER_PROFILE, payload: userProfile })
        history.push('/')
      } else if (!userProfile) {
        message.error('Something went wrong, please try again.')
        return dispatch({ type: type.SET_USER_PROFILE, payload: null })
      }

      dispatch({ type: type.SET_USER_PROFILE, payload: userProfile })
      history.push('/')
    },
    [dispatch]
  )
  const authChangeListener = async (user) => {
    try {
      await auth.getRedirectResult()
    } catch (e) {
      message.error(e.message)
      dispatch({ type: type.SET_USER_PROFILE, payload: null })
    }
    if (user) {
      console.log(user)
      // change context only if it empty(user didn't logged in)
      if (user.emailVerified && userContext.userProfile === null) {
        handleLogin(user)
      } else {
        dispatch({ type: type.USER_LOADING, payload: false })
      }
    } else if (userContext.userProfile !== null) {
      dispatch({ type: type.SET_USER_PROFILE, payload: null })
    } else {
      dispatch({ type: type.USER_LOADING, payload: false })
    }
  }

  const createUser = async (user, undef) => {
    if (user.emailVerified && undef) {
      try {
        await auth.createUser(user.uid, user.email, '')
      } catch (e) {
        message.error(e.message)
      }
    }
  }
  const signUpUser = async () => {
    if (userContext.signup) {
      try {
        await auth.signUp(userContext.signup.email, userContext.signup.password)
        await auth.sendVerifyEmail()
        dispatch({ type: type.USER_SIGN_UP, payload: false })
        dispatch({ type: type.USER_LOADING, payload: false })
      } catch (e) {
        message.error(e.message)
      }
    }
  }
  useEffect(() => signUpUser(), [userContext.signup])
  useEffect(() => {
    const listener = auth.onAuthChange(authChangeListener)
    return () => listener()
  }, [])
  useEffect(() => setLoading(userContext.loading), [userContext.loading])
  return { loading }
}

export default useAuthListener
