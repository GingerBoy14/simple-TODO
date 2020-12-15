import { useReducer, useEffect } from 'react'

import { userContext, storeContext } from 'context'
import { userReducer, tasksReducer } from '../reducer'
/*
const Provider = (props) => {
  const { store = {}, users, ...rest } = props
  const [state, dispatch] = useReducer(tasksReducer, store)
  useEffect(() => console.log(state), [state])
  return (
    <storeContext.Provider
      value={{ store: state, dispatch, users: users }}
      {...rest}
    />
  )
}*/

const Provider = (props) => {
  const { user, ...rest } = props
  const [state, dispatch] = useReducer(userReducer, user)
  useEffect(() => console.log(state), [state])
  return <userContext.Provider value={{ dispatch, user: user }} {...rest} />
}

export default Provider
