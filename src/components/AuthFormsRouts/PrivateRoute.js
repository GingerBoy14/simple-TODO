import { Route, Redirect } from 'react-router-dom'
import { useStoreUserContext } from 'context'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { userStore } = useStoreUserContext()
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!userStore ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/Login'} />
        )
      }
    />
  )
}

export default PrivateRoute
