import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { ROUTES_KEYS, ROUTES } from './constants'

const App = () => {
  return (
    <Router>
      <Switch>
        {ROUTES_KEYS.map((key) => (
          <Route
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
