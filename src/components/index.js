import App from '../components/index-2'
import Signup from '../components/Forms/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Forms/Dashboard'
import Login from '../components/Forms/Login'
import PrivateRoute from '../components/Forms/PrivateRoute'
import ForgotPassword from '../components/Forms/ForgotPassword'
import UpdateProfile from '../components/Forms/UpdateProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Space } from 'antd'
import React from 'react'

function Index() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: '100vh' }}>
    //   <div className="w-100" style={{ maxWidth: '1200px' }}>
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
