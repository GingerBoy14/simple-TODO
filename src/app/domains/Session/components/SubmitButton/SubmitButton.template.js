import React from 'react'
import { Button, Col, Form, Row } from 'antd'

const SubmitButton = (props) => {
  const { text } = props
  return (
    <Form.Item>
      <Row justify="center" align="middle">
        <Col xs={8} sm={8} md={7} lg={6} xl={6} xxl={6} justify="center">
          <Button type="primary" htmlType="submit" block>
            {text}
          </Button>
        </Col>
      </Row>
    </Form.Item>
  )
}

export default SubmitButton
