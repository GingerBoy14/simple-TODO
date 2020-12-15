import { useReducer, useEffect } from 'react'

import storeContext, { userDispatch } from './context'
import rootReducer from '../reducer'

const UserProvider = (props) => {
  const { value = { userProfile: null }, ...rest } = props
  const initState = {
    ...value,
    loading: false
  }
  const [state, dispatch] = useReducer(rootReducer, initState)
  useEffect(() => console.log('userState', state), [state])
  return (
    <userDispatch.Provider value={dispatch}>
      <storeContext.Provider value={state} {...rest} />
    </userDispatch.Provider>
  )
}

export default UserProvider
