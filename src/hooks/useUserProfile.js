import { useState, useEffect, useCallback } from 'react'
import firebase from 'service'
import { useUserContext, useUserDispatch } from 'app/domains/Session/context'
import types from 'app/domains/Session/constants'
import { useHistory } from 'react-router-dom'
const useUserProfile = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useUserDispatch()
  const user = useUserContext()
  let history = useHistory()
  const handleLogin = useCallback(
    async (user) => {
      const userProfile = await firebase.getUser(user)
      dispatch({ type: types.SET_USER_PROFILE, payload: userProfile })
      history.push('/')
    },
    [dispatch]
  )

  useEffect(() => setLoading(user.loading), [user.loading])
  useEffect(() => {
    dispatch({ type: types.USER_LOADING, payload: true })

    firebase.getRedirectResult()

    const listener = firebase.onAuthChange((user) => {
      if (user) {
        handleLogin(user)
      } else {
        dispatch({ type: types.SET_USER_PROFILE, payload: null })
      }
    })
    return () => listener()
  }, [])
  return { loading }
}

export default useUserProfile
