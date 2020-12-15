import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from 'app/domains/Session/context'

const ProtectedRoute = (props) => {
  const { redirectTo, ...rest } = props
  const { userProfile } = useUserContext()
  if (userProfile === null) {
    return <Redirect to={redirectTo} />
  }
  return <Route {...rest} />
}

export default ProtectedRoute
