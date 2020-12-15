import 'antd/dist/antd.css'
import { Row, Col, Card } from 'antd'
import React, { useState } from 'react'
import { FetchData } from './hook'
import { MainForm, LoginForm, ToDoApp, SignUpForm } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'context'

const App = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={22} md={14} lg={10} xl={7} xxl={6}>
        <Card>
          <Router>
            <Switch>
              <Route exact path="/">
                <MainForm />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/signUp">
                <SignUpForm />
              </Route>
              <Route path="/toDoApp">
                <Provider
                  store={{
                    tasks: [],
                    filter: 'all',
                    query: ''
                  }}>
                  <ToDoApp />
                </Provider>
              </Route>
            </Switch>
          </Router>
        </Card>
      </Col>
    </Row>
  )
}

export default App
