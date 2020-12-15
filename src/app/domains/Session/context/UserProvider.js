import { useReducer, useEffect } from 'react'

import storeContext, { dispatchContext } from './context'
import rootReducer from '../reducer'

const UserProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  useEffect(() => console.log('userState', state), [state])
  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state} {...rest} />
    </dispatchContext.Provider>
  )
}

export default UserProvider
