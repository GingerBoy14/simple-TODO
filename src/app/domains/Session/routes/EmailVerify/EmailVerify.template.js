import React, { useEffect } from 'react'
import { Col, Row, Typography, Button, Grid } from 'antd'
import { useHistory } from 'react-router-dom'
import { RedoOutlined } from '@ant-design/icons'
import { auth } from 'service'
import { useUserDispatch } from '../../context'
import type from '../../constants'

const { Title, Text } = Typography
const { useBreakpoint } = Grid

const EmailVerify = () => {
  const screen = useBreakpoint()
  let history = useHistory()
  const dispatch = useUserDispatch()
  useEffect(() => {
    dispatch({ type: type.USER_LOADING, payload: false })
  }, [])

  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={22} sm={22} md={14} lg={12} xl={9} xxl={7} justify="center">
        <Row gutter={[0, 4]} justify="center">
          <Col>
            <Title level={screen.xs ? 3 : 1}>Please verify your email</Title>
          </Col>
          <Col span={24}>
            <Row justify="center" gutter={[4, 12]}>
              <Col>
                <Text>We have send email to:</Text>
              </Col>
              <Col>
                <Text strong>{auth.getCurrentUser().email}</Text>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row justify="center" gutter={[0, 12]}>
              <Col>
                <Row justify="center" gutter={[0, 8]}>
                  <Col>
                    <Text>Already confirmed email?</Text>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col>
                    <Button
                      type="primary"
                      onClick={() => history.push('login')}>
                      Go to Login
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Text>Don't get a confirmation email?</Text>
              </Col>
            </Row>
          </Col>

          <Col>
            <Text>Check your spam or</Text>
            <Button
              type="link"
              icon={<RedoOutlined />}
              size="small"
              onClick={() => auth.sendVerifyEmail()}>
              Send again
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default EmailVerify
