import { Switch, Route, Link, useHistory } from 'react-router-dom'
import { Login, Registration, ResetPassword } from '../index'
import { Tabs, Row, Col } from 'antd'

const { TabPane } = Tabs

const AuthFormsRouts = () => {
  const history = useHistory()
  return (
    <Row align="middle" justify="center">
      <Col xs={22} sm={22} md={14} lg={8} xl={6} xxl={4}>
        <Tabs
          onChange={(key) => {
            history.push(`/${key}`)
          }}>
          <TabPane tab="Login" key="Login">
            <Link to="/Login"></Link>
          </TabPane>
          <TabPane tab="Registration" key="Registration">
            <Link to="/Registration"></Link>
          </TabPane>
        </Tabs>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/ResetPassword" component={ResetPassword} />
        </Switch>
      </Col>
    </Row>
  )
}

export default AuthFormsRouts
