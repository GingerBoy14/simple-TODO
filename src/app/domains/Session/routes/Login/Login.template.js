import { ResetPasswordModal, SignUpForm } from '../../components'
import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { GoogleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const Login = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={16} md={14} lg={9} xl={7} xxl={5} justify="center">
        <Row gutter={[0, 8]} justify="center">
          <Col span={24}>
            <Row justify="center" align="middle">
              <Col>
                <Title>Login</Title>
              </Col>
            </Row>
            <Card>
              <Space
                align="center"
                direction="vertical"
                style={{ width: '100%' }}>
                <Button type="primary">
                  <GoogleOutlined />
                  Sign in with Google
                </Button>
              </Space>
              <Divider>OR</Divider>
              <SignUpForm />
              <ResetPasswordModal />
            </Card>
          </Col>
          <Col>
            <Link to="/signUp">
              <Text>Don't have account?</Text> Sign up
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Login
