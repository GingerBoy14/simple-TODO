import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useEffect } from 'react'
import { ROUTES_KEYS, ROUTES } from './constants'
import firebase from 'service'
const App = () => {
  useEffect(
    () =>
      firebase.onAuthChange((user) => {
        if (user) {
          console.log('sign in')
        } else {
          console.log('sign out')
        }
      }),
    []
  )
  return (
    <Router>
      <Switch>
        {ROUTES_KEYS.map((key) => (
          <Route
            key={ROUTES[key].path}
            path={ROUTES[key].path}
            component={ROUTES[key].component}
            exact={ROUTES[key].exact}
          />
        ))}
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}
export default App
