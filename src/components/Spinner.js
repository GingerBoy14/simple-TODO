import React from 'react'
import { Row, Col, Spin } from 'antd'

const Spinner = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ width: '100%', height: '100%' }}>
      <Col>
        <Spin />
      </Col>
    </Row>
  )
}

export default Spinner
