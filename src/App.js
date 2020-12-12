import 'antd/dist/antd.css'
import { Row, Col, Card } from 'antd'
import React, { useState } from 'react'
import { FetchData } from './hook'
import { MainForm, LoginForm, ToDoApp } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SignUpForm } from 'components/Form'

const App = () => {
  const [loading, setLoading] = useState(true)
  FetchData({ loading, setLoading })

  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={7} xxl={6}>
        <Card>
          <Router>
            <Switch>
              <Route exact path="/" component={MainForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signUp" component={SignUpForm} />
              <Route path="/toDoApp">
                <ToDoApp loading={loading} />
              </Route>
            </Switch>
          </Router>
        </Card>
      </Col>
    </Row>
  )
}

export default App
