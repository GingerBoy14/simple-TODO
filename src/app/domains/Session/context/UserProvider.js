import { useReducer, useEffect } from 'react'

import storeContext from './context'
import rootReducer from '../reducer'
const UserProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  useEffect(() => console.log('userState', state), [state])
  return (
    <storeContext.Provider
      value={{ store: state, dispatch: dispatch }}
      {...rest}
    />
  )
}

export default UserProvider
