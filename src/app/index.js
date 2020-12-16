import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ROUTES_KEYS, ROUTES } from './constants'
import { useAuthListener, useFirebaseInitLoading } from 'hooks'
import { ProtectedRoute, Spinner } from '../components'

const App = () => {
  const { loading } = useAuthListener()
  const firebaseLoading = useFirebaseInitLoading()
  if (loading || firebaseLoading) return <Spinner />
  return (
    <Router>
      <Switch>
        {ROUTES_KEYS.map((key) => {
          if (ROUTES[key].protected) {
            return (
              <ProtectedRoute
                key={ROUTES[key].path}
                {...ROUTES[key]}
                redirectTo="/login"
              />
            )
          }
          return <Route key={ROUTES[key].path} {...ROUTES[key]} />
        })}
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}
export default App
