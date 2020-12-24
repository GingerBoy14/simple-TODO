import React from 'react'
import { Row, Col, Spin } from 'antd'

const Spinner = (props) => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ width: '100%', height: '100%' }}
      {...props}>
      <Col>
        <Spin />
      </Col>
    </Row>
  )
}

export default Spinner
