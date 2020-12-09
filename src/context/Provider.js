import { useReducer, useEffect, useMemo } from 'react'

import storeContext from 'context'
import rootReducer from '../reducer'
import firebase from '../config'

const Provider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  useEffect(() => console.log(state), [state])
  const middleware = (dispatch) => (action) => {
    if (action instanceof Function) {
      return action(dispatch, firebase)
    }
    return dispatch(action)
  }
  const asyncDispatch = useMemo(() => middleware(dispatch), [dispatch])

  return (
    <storeContext.Provider
      value={{ store: state, dispatch: asyncDispatch }}
      {...rest}
    />
  )
}

export default Provider
