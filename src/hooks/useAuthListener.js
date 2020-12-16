import { useState, useEffect, useCallback } from 'react'
import firebase from 'service'
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
      const userProfile = await firebase.getUser(user)
      if (!userProfile) {
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
      await firebase.getRedirectResult()
    } catch (e) {
      message.error(e.message)
      dispatch({ type: type.SET_USER_PROFILE, payload: null })
    }
    if (user) {
      // change context only if it empty(user didn't logged in)
      if (!userContext.signup && userContext.userProfile === null) {
        handleLogin(user)
      }
    } else {
      dispatch({ type: type.SET_USER_PROFILE, payload: null })
    }
  }

  const signUpUser = async () => {
    if (userContext.signup) {
      try {
        const res = await firebase.signUp(
          userContext.signup.email,
          userContext.signup.password
        )
        console.log(res)
        if (res.user !== null && res.additionalUserInfo.isNewUser) {
          const { user } = res
          await firebase.createUser(user.uid, user.email, '')
        }

        await handleLogin(res.user)
      } catch (e) {
        message.error(e.message)
      }
    }
  }
  useEffect(() => setLoading(userContext.loading), [userContext.loading])
  useEffect(() => signUpUser(), [userContext.signup])

  useEffect(() => {
    const listener = firebase.onAuthChange(authChangeListener)
    return () => listener()
  }, [])
  return { loading }
}

export default useAuthListener
