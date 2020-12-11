import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Card, Row, Col, Typography } from 'antd'
const { Title } = Typography

const Form = () => {
  const [activeLink, setActiveLink] = useState('Login')

  const onClickLink = (e) => {
    e.target.style.color = 'blue'
  }

  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={8} xxl={7}>
        <Row>
          <Col span={24}>
            <Card>
              <Router>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Link to="/">
                      <Title level={3} onClick={(e) => onClickLink(e)}>
                        Login in
                      </Title>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Link to="/SignUp">
                      <Title level={3} onClick={(e) => onClickLink(e)}>
                        Sing up
                      </Title>
                    </Link>
                  </Col>
                </Row>
                <Route exact path="/" component={LoginForm} />
                <Route path="/SignUp" component={SignUpForm} />
              </Router>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export { Form }
