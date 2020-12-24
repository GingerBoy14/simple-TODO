import { SignUpForm } from '../../components'
import { Card, Col, Divider, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { SignInWithGoogleButton } from '../../components/SignInWithGoogleButton'
const { Title, Text } = Typography

const SignUp = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={16} md={14} lg={9} xl={7} xxl={5} justify="center">
        <Row gutter={[0, 8]} justify="center">
          <Col span={24}>
            <Row justify="center" align="middle">
              <Col>
                <Title>Sign up</Title>
              </Col>
            </Row>
            <Card>
              <SignInWithGoogleButton />
              <Divider>OR</Divider>
              <SignUpForm />
            </Card>
          </Col>
          <Col>
            <Link to="/login">
              <Text>Already have an account?</Text> Login
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SignUp
