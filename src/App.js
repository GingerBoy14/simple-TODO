import 'antd/dist/antd.css'
import { Row, Col, Card } from 'antd'
import React from 'react'
import { MainForm, LoginForm, ToDoApp, SignUpForm } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={22} md={14} lg={10} xl={7} xxl={6}>
        <Card>
          <Router>
            <Switch>
              <Route exact path="/" component={MainForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signUp" component={SignUpForm} />
              <Route path="/toDoApp" component={ToDoApp} />
            </Switch>
          </Router>
        </Card>
      </Col>
    </Row>
  )
}

export default App
