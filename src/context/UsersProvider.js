import { useReducer, useState, useEffect } from 'react'
import { storeUsersContext } from 'context'
import usersReducer from '../reducer/usersReducer'

const UsersProvider = (props) => {
  const { userStore, ...rest } = props
  const [state, dispatch] = useReducer(usersReducer, userStore)

  return (
    <storeUsersContext.Provider
      value={{ userStore: state, dispatch }}
      {...rest}
    />
  )
}

export default UsersProvider
