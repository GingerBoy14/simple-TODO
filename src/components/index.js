import Signup from '../components/Forms/Signup'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Forms/Dashboard'
import Login from '../components/Forms/Login'
import PrivateRoute from '../components/Forms/PrivateRoute'
import ForgotPassword from '../components/Forms/ForgotPassword'
import UpdateProfile from '../components/Forms/UpdateProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row } from 'antd'
import { App } from './App'

function Index() {
  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={9} xxl={8}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/app" component={App} />
            </Switch>
          </AuthProvider>
        </Router>
      </Col>
    </Row>
  )
}
export default Index
