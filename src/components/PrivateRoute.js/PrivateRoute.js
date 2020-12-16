import { AuthProvider } from 'components/Form/Auth'
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { userContext } from '../../context'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(userContext)
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  )
}
export default PrivateRoute
