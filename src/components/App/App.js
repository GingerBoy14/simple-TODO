import { Switch, Route } from 'react-router-dom'
import { AuthFormsRouts, ToDo } from '../index'
import { PrivateRoute } from '../index'

const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/Todo" component={ToDo} />
        <Route path="/" component={AuthFormsRouts} />
      </Switch>
    </>
  )
}
export default App
